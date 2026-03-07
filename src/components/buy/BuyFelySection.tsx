"use client";
import { useEffect, useState, useRef } from "react";
import RevealAnimation from "../animation/RevealAnimation";
import { USDT_CONTRACT_ADDRESS, USDT_ABI } from "@/app/contracts/usdtContract";
import { ICO_CONTRACT, ICO_ABI } from "@/app/contracts/icoContract";
import { ethers } from "ethers";

// ─── Public Polygon RPCs ──────────────────────────────────────────────────────
const POLYGON_RPC_URLS = [
  "https://polygon-bor-rpc.publicnode.com",
  "https://1rpc.io/matic",
  "https://polygon.meowrpc.com",
  "https://polygon.drpc.org",
];

const getPublicProvider = async (): Promise<ethers.JsonRpcProvider> => {
  for (const url of POLYGON_RPC_URLS) {
    try {
      const provider = new ethers.JsonRpcProvider(url, {
        chainId: 137,
        name: "polygon",
      });
      await Promise.race([
        provider.getBlockNumber(),
        new Promise((_, r) => setTimeout(() => r(new Error("timeout")), 8000)),
      ]);
      return provider;
    } catch (_) {
      console.warn(`RPC ${url} failed, trying next...`);
    }
  }
  return new ethers.JsonRpcProvider(POLYGON_RPC_URLS[0], {
    chainId: 137,
    name: "polygon",
  });
};

let _providerCache: ethers.JsonRpcProvider | null = null;
let _providerCacheTime = 0;
const CACHE_TTL = 90_000;

const getCachedPublicProvider = async (): Promise<ethers.JsonRpcProvider> => {
  if (_providerCache && Date.now() - _providerCacheTime < CACHE_TTL)
    return _providerCache;
  const p = await getPublicProvider();
  _providerCache = p;
  _providerCacheTime = Date.now();
  return p;
};

const clearProviderCache = () => {
  _providerCache = null;
  _providerCacheTime = 0;
};

// Try injected wallet provider first — always works inside wallet browser.
const getReadProvider = async (
  injectedProvider?: any,
): Promise<ethers.JsonRpcProvider | ethers.BrowserProvider> => {
  if (injectedProvider) {
    try {
      const bp = new ethers.BrowserProvider(injectedProvider);
      await Promise.race([
        bp.getBlockNumber(),
        new Promise((_, r) => setTimeout(() => r(new Error("timeout")), 5000)),
      ]);
      return bp;
    } catch (_) {
      console.warn("Injected provider unavailable, falling back to public RPC");
    }
  }
  return getCachedPublicProvider();
};

// ─── Mobile helpers ───────────────────────────────────────────────────────────
const detectMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    typeof navigator !== "undefined" ? navigator.userAgent : "",
  );

const detectInAppWalletBrowser = (): { isInApp: boolean; name: string } => {
  if (typeof navigator === "undefined") return { isInApp: false, name: "" };
  const ua = navigator.userAgent;
  if (/TrustWallet|Trust\//.test(ua))
    return { isInApp: true, name: "Trust Wallet" };
  if (/CoinbaseWallet|Coinbase\//.test(ua))
    return { isInApp: true, name: "Coinbase Wallet" };
  if (/MetaMaskMobile/.test(ua)) return { isInApp: true, name: "MetaMask" };
  if (
    detectMobile() &&
    typeof window !== "undefined" &&
    (window as any).ethereum
  )
    return { isInApp: true, name: "Wallet Browser" };
  return { isInApp: false, name: "" };
};

const waitForEthereum = (timeoutMs = 4000): Promise<any> =>
  new Promise((resolve) => {
    if ((window as any).ethereum) {
      resolve((window as any).ethereum);
      return;
    }
    const interval = setInterval(() => {
      if ((window as any).ethereum) {
        clearInterval(interval);
        clearTimeout(timer);
        resolve((window as any).ethereum);
      }
    }, 100);
    const timer = setTimeout(() => {
      clearInterval(interval);
      resolve(null);
    }, timeoutMs);
  });

const copyToClipboard = (text: string) => {
  if (navigator.clipboard && window.isSecureContext)
    return navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  fallbackCopy(text);
};
const fallbackCopy = (text: string) => {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.cssText = "position:fixed;left:-9999px;top:-9999px;opacity:0";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand("copy");
  } catch (_) {}
  document.body.removeChild(ta);
};

const getMobileDeepLinks = (currentUrl: string) => {
  const encoded = encodeURIComponent(currentUrl);
  const bare = currentUrl.replace(/^https?:\/\//, "");
  return [
    {
      name: "MetaMask",
      icon: "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg",
      url: `https://metamask.app.link/dapp/${bare}`,
    },
    {
      name: "Trust Wallet",
      icon: "https://trustwallet.com/assets/images/favicon.png",
      url: `https://link.trustwallet.com/open_url?coin_id=966&url=${encoded}`,
    },
    {
      name: "Coinbase Wallet",
      icon: "https://www.coinbase.com/favicon.ico",
      url: `https://go.cb-w.com/dapp?cb_url=${encoded}`,
    },
  ];
};

const WalletDeepLinkModal = ({ onClose }: { onClose: () => void }) => {
  const links = getMobileDeepLinks(
    typeof window !== "undefined" ? window.location.href : "",
  );
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-[#13171E] border border-[#2a333e] rounded-2xl p-6 max-w-xs w-full mx-4 shadow-2xl">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-white font-bold text-lg">Open in Wallet</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-white text-xl leading-none"
          >
            ✕
          </button>
        </div>
        <p className="text-gray-400 text-xs mb-4 text-center">
          Open this page inside your wallet's browser to connect.
        </p>
        <div className="flex flex-col gap-3">
          {links.map((dl) => (
            <a
              key={dl.name}
              href={dl.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-[#1c2230] hover:bg-[#2a333e] border border-[#2a333e] rounded-xl px-4 py-3 transition-colors"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={dl.icon}
                alt={dl.name}
                className="w-8 h-8 rounded-full"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <span className="text-white text-sm font-medium">{dl.name}</span>
              <span className="ml-auto text-xs text-primary-500">
                Open App →
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── Component ────────────────────────────────────────────────────────────────
const BuyFelySection = () => {
  // FIX 1: Refs were SWAPPED in the previous version causing inputs to update
  // the wrong field. buyingUsdtValue = USDT input, buyingFelyValue = FELY output.
  const buyingUsdtValue = useRef<HTMLInputElement>(null); // user types USDT here
  const buyingFelyValue = useRef<HTMLInputElement>(null); // auto-calculated FELY shown here

  const POLYGON_CHAIN_ID = "0x89";

  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [showDeepLinks, setShowDeepLinks] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [yourWalletAddress, setWalletAddress] = useState<string | null>(null);
  const [activeProvider, setActiveProvider] = useState<any>(null);
  const [fellyPrice, setFellyPrice] = useState("0");
  // FIX 2: null = not yet loaded (shows "Loading..."), "—" = failed, "0.00" = loaded
  const [yourUsdtBalance, setYourUsdtBalance] = useState<string | null>(null);
  const [transactionStatus, setTransactionStatus] = useState<string | null>(
    null,
  );

  // ── On mount ──────────────────────────────────────────────────────────────
  useEffect(() => {
    setIsMobile(detectMobile());
    const silentReconnect = async () => {
      const eth = await waitForEthereum(3000);
      if (!eth) return;
      try {
        const accounts = await eth.request({ method: "eth_accounts" });
        if (accounts?.length > 0) {
          setWalletAddress(accounts[0]);
          setActiveProvider(eth);
          setIsConnected(true);
          // FIX 3: pass eth directly — React state (activeProvider) not yet committed
          await loadBalancesAndPrice(accounts[0], eth);
          eth.on?.("chainChanged", () => window.location.reload());
          eth.on?.("accountsChanged", (accs: string[]) => {
            if (accs.length > 0) {
              setWalletAddress(accs[0]);
              loadBalancesAndPrice(accs[0], eth);
            } else {
              setIsConnected(false);
              setWalletAddress(null);
              setYourUsdtBalance(null);
            }
          });
        }
      } catch (_) {}
    };
    const t = setTimeout(silentReconnect, 1500);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCopy = () => {
    copyToClipboard("0xEe997788f625809332BaABB3110BCf1BA7400824");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // ── FIX 4: Input calculators — refs and direction were swapped ───────────
  // User types USDT → compute FELY. User types FELY → compute USDT.
  const handleUsdtChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const usdtVal = e.target.value;
    if (!buyingFelyValue.current || fellyPrice === "0") return;
    if (!usdtVal || parseFloat(usdtVal) === 0) {
      buyingFelyValue.current.value = "";
      return;
    }
    buyingFelyValue.current.value = (
      parseFloat(usdtVal) / parseFloat(fellyPrice)
    ).toFixed(6);
  };

  const handleFelyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const felyVal = e.target.value;
    if (!buyingUsdtValue.current || fellyPrice === "0") return;
    if (!felyVal || parseFloat(felyVal) === 0) {
      buyingUsdtValue.current.value = "";
      return;
    }
    buyingUsdtValue.current.value = (
      parseFloat(felyVal) * parseFloat(fellyPrice)
    ).toFixed(6);
  };

  // ── Network switch ────────────────────────────────────────────────────────
  const checkAndSwitchNetwork = async (provider: any) => {
    try {
      const chainId = await provider.request({ method: "eth_chainId" });
      if (chainId === POLYGON_CHAIN_ID || parseInt(chainId, 16) === 137) return;
      setTransactionStatus("Switching to Polygon network...");
      try {
        await provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: POLYGON_CHAIN_ID }],
        });
        setTransactionStatus("Network switched successfully");
        setTimeout(() => setTransactionStatus(null), 3000);
      } catch (switchError: any) {
        if (
          switchError.code === 4902 ||
          switchError.code === -32603 ||
          !switchError.code
        ) {
          setTransactionStatus("Adding Polygon network...");
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: POLYGON_CHAIN_ID,
                chainName: "Polygon Mainnet",
                nativeCurrency: { name: "POL", symbol: "POL", decimals: 18 },
                rpcUrls: [
                  "https://polygon-bor-rpc.publicnode.com",
                  "https://polygon-rpc.com/",
                ],
                blockExplorerUrls: ["https://polygonscan.com/"],
              },
            ],
          });
          setTransactionStatus("Network added successfully");
          setTimeout(() => setTransactionStatus(null), 3000);
        } else if (switchError.code === 4001) {
          throw new Error("User rejected network switch");
        } else {
          const now = await provider
            .request({ method: "eth_chainId" })
            .catch(() => null);
          if (now === POLYGON_CHAIN_ID || parseInt(now, 16) === 137) return;
          throw switchError;
        }
      }
    } catch (error: any) {
      if (error.message?.includes("rejected")) throw error;
      console.warn("Network switch warning (non-fatal):", error.message);
    }
  };

  // ── FIX 5: Load balance AND price in PARALLEL, not sequential ────────────
  // Original: getFelyPrice() was called at the END of getUsdtBalance().
  // If balance failed → price never loaded. Now both run independently.
  const loadBalancesAndPrice = async (
    walletAddress: string,
    injectedProvider?: any,
  ) => {
    const walletProv =
      injectedProvider || activeProvider || (window as any).ethereum;
    await Promise.all([
      fetchUsdtBalance(walletAddress, walletProv),
      fetchFelyPrice(walletProv),
    ]);
  };

  const fetchUsdtBalance = async (walletAddress: string, walletProv: any) => {
    const attempts = [
      () => getReadProvider(walletProv),
      () => {
        clearProviderCache();
        return getCachedPublicProvider();
      },
      () => {
        clearProviderCache();
        return getCachedPublicProvider();
      },
    ];
    for (let i = 0; i < attempts.length; i++) {
      try {
        const provider = await attempts[i]();
        const contract = new ethers.Contract(
          USDT_CONTRACT_ADDRESS,
          USDT_ABI,
          provider,
        );
        const balance = await contract.balanceOf(walletAddress);
        setYourUsdtBalance(
          parseFloat(ethers.formatUnits(balance, 6)).toFixed(2),
        );
        return;
      } catch (e) {
        console.warn(`USDT balance attempt ${i + 1} failed:`, e);
        if (i === attempts.length - 1) setYourUsdtBalance("—");
        else await new Promise((r) => setTimeout(r, (i + 1) * 1200));
      }
    }
  };

  const fetchFelyPrice = async (walletProv: any) => {
    const attempts = [
      () => getReadProvider(walletProv),
      () => {
        clearProviderCache();
        return getCachedPublicProvider();
      },
    ];
    for (let i = 0; i < attempts.length; i++) {
      try {
        const provider = await attempts[i]();
        const contract = new ethers.Contract(ICO_CONTRACT, ICO_ABI, provider);
        const price = await contract.pricePerToken();
        setFellyPrice(ethers.formatUnits(price, 6));
        return;
      } catch (e) {
        console.warn(`FELY price attempt ${i + 1} failed:`, e);
        if (i === attempts.length - 1) setFellyPrice("—");
        else await new Promise((r) => setTimeout(r, (i + 1) * 1200));
      }
    }
  };

  // ── Core connect ──────────────────────────────────────────────────────────
  const doConnect = async (provider: any) => {
    let accounts: string[] = [];
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        accounts = await provider.request({ method: "eth_requestAccounts" });
        if (accounts?.length > 0) break;
      } catch (e: any) {
        if (e.code === 4001) throw new Error("User rejected connection");
        if (attempt < 2) await new Promise((r) => setTimeout(r, 700));
        else throw e;
      }
    }
    if (!accounts?.length)
      throw new Error("No accounts returned — please approve in your wallet");
    await checkAndSwitchNetwork(provider);
    setWalletAddress(accounts[0]);
    setActiveProvider(provider);
    setIsConnected(true);
    await loadBalancesAndPrice(accounts[0], provider);
    provider.on?.("chainChanged", () => window.location.reload());
    provider.on?.("accountsChanged", (accs: string[]) => {
      if (accs.length > 0) {
        setWalletAddress(accs[0]);
        loadBalancesAndPrice(accs[0], provider);
      } else {
        setIsConnected(false);
        setWalletAddress(null);
        setYourUsdtBalance(null);
      }
    });
  };

  const connectWallet = async () => {
    if (isConnecting) return;
    setIsConnecting(true);
    setTransactionStatus(null);
    try {
      const inApp = detectInAppWalletBrowser();
      if (inApp.isInApp || isMobile) {
        const ethNow = (window as any).ethereum;
        if (ethNow) {
          await doConnect(ethNow);
          return;
        }
        const eth = await waitForEthereum(3000);
        if (eth) {
          await doConnect(eth);
          return;
        }
        setShowDeepLinks(true);
        return;
      }
      setTransactionStatus("Detecting wallet...");
      const found = new Map<string, any>();
      const handler = (e: any) =>
        found.set(e.detail.info.uuid, e.detail.provider);
      window.addEventListener("eip6963:announceProvider", handler);
      window.dispatchEvent(new Event("eip6963:requestProvider"));
      await new Promise((r) => setTimeout(r, 600));
      window.removeEventListener("eip6963:announceProvider", handler);
      setTransactionStatus(null);
      const wallets = Array.from(found.values());
      if (wallets.length >= 1) {
        await doConnect(wallets[0]);
        return;
      }
      const eth = (window as any).ethereum;
      if (eth) {
        await doConnect(eth);
        return;
      }
      setTransactionStatus(
        "No wallet detected. Install MetaMask or use a wallet browser.",
      );
      setTimeout(() => setTransactionStatus(null), 5000);
    } catch (e: any) {
      setTransactionStatus(e?.message || "Failed to connect");
      setTimeout(() => setTransactionStatus(null), 5000);
    } finally {
      setIsConnecting(false);
    }
  };

  // ── FIX 6: buyFelyToken reads USDT input (what user typed), not FELY field ─
  const buyFelyToken = async () => {
    const usdtAmount = buyingUsdtValue.current?.value;
    if (!usdtAmount || parseFloat(usdtAmount) <= 0) {
      setTransactionStatus("Enter a USDT amount to buy FELY");
      setTimeout(() => setTransactionStatus(null), 3000);
      return;
    }
    setIsProcessing(true);
    setTransactionStatus("Buy in action");
    await approveAndBuyTokens(usdtAmount);
  };

  const approveAndBuyTokens = async (amount: string) => {
    const spenderAddress = "0x6350637c20C62bD62091c8e2e08C414A863f10A4";
    try {
      if (!yourWalletAddress) {
        setTransactionStatus("Please connect your wallet first");
        setTimeout(() => setTransactionStatus(null), 3000);
        setIsProcessing(false);
        return;
      }
      const rawProvider = activeProvider ?? (window as any).ethereum;
      const provider = new ethers.BrowserProvider(rawProvider);
      const signer = await provider.getSigner();

      setTransactionStatus("Step 1/2: Approving USDT...");
      const usdtContract = new ethers.Contract(
        USDT_CONTRACT_ADDRESS,
        USDT_ABI,
        signer,
      );
      const amountInWei = ethers.parseUnits(amount, 6);
      const approveTx = await usdtContract.approve(spenderAddress, amountInWei);
      setTransactionStatus("Step 1/2: Confirming approval...");
      await approveTx.wait();

      setTransactionStatus("Step 2/2: Buying FELY tokens...");
      const icoContract = new ethers.Contract(ICO_CONTRACT, ICO_ABI, signer);
      const feeData = await provider.getFeeData();
      if (!feeData.gasPrice) throw new Error("Unable to fetch gas price");
      const gasPrice = (feeData.gasPrice * BigInt(110)) / BigInt(100);
      const transferTx = await icoContract.transferUSDT(amountInWei, {
        gasLimit: 200000,
        gasPrice,
      });
      setTransactionStatus("Step 2/2: Confirming purchase...");
      const receipt = await transferTx.wait();

      setTransactionStatus("FELY tokens purchased successfully! 🎉");
      setTimeout(async () => {
        if (buyingUsdtValue.current) buyingUsdtValue.current.value = "";
        if (buyingFelyValue.current) buyingFelyValue.current.value = "";
        await loadBalancesAndPrice(yourWalletAddress!, rawProvider);
        setTransactionStatus(null);
        setIsProcessing(false); // FIX 7: close modal after success
      }, 3000);

      return { approveTx, transferTx: receipt };
    } catch (error: any) {
      console.error("Error in approve and buy:", error);
      if (error.code === "ACTION_REJECTED")
        setTransactionStatus("Transaction rejected by user");
      else if (error.code === "INSUFFICIENT_FUNDS")
        setTransactionStatus("Insufficient funds for gas");
      else if (error.reason) setTransactionStatus(`Failed: ${error.reason}`);
      else setTransactionStatus("Transaction failed. Please try again!");
      setTimeout(() => setTransactionStatus(null), 5000);
      setIsProcessing(false); // FIX 7: always close modal on error
    }
  };

  // ─── JSX ─────────────────────────────────────────────────────────────────
  return (
    <div className="space-y-10">
      {showDeepLinks && (
        <WalletDeepLinkModal onClose={() => setShowDeepLinks(false)} />
      )}

      <div className="text-center space-y-4">
        <RevealAnimation delay={0.1}>
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            Golden Opportunity Unveiled
          </h2>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <p className="text-accent/80 text-base md:text-lg max-w-3xl mx-auto">
            Your once-in-a-lifetime chance to get Felysyum at a
            never-before-seen price is here! The public sale is open for a
            limited period only. Act now to secure your stake and become an
            early pioneer of digital gold!
          </p>
        </RevealAnimation>
      </div>

      <RevealAnimation delay={0.3}>
        <div className="bg-secondary dark:bg-background-8 rounded-[30px] p-6 md:p-10 border border-stroke-2 dark:border-stroke-6 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary-500/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
            <div className="space-y-6 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Buy FELY now!
                <br />
                This price is available for a{" "}
                <span className="text-primary-500">limited time.</span>
              </h3>
            </div>

            <div className="flex flex-col items-center lg:items-end space-y-4">
              <div className="bg-[#13171E] rounded-2xl p-6 w-full max-w-md border border-[#2a333e]">
                <div className="space-y-4 mb-6 pb-6 border-b border-[#2a333e]">
                  <p className="text-xs text-center text-gray-400">
                    {isMobile
                      ? "Open this page inside MetaMask, Trust Wallet, or Coinbase Wallet browser."
                      : "Supports MetaMask, Coinbase Wallet, and Trust Wallet."}
                  </p>
                  <p className="text-xs text-center text-gray-500">
                    Note: Uses Polygon network — POL is required for gas.
                  </p>
                  {isConnected && (
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">FELY Price:</span>
                      <span className="text-white font-medium">
                        {fellyPrice === "0"
                          ? "Loading..."
                          : fellyPrice === "—"
                            ? "Unavailable"
                            : `${fellyPrice} USDT`}
                      </span>
                    </div>
                  )}
                </div>

                {!isConnected ? (
                  <button
                    onClick={connectWallet}
                    disabled={isConnecting}
                    className="btn btn-primary btn-xl w-full touch-manipulation disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isConnecting ? "Connecting..." : "CONNECT YOUR WALLET"}
                  </button>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-black/20 rounded-xl p-3 border border-[#2a333e]">
                      <p className="text-[10px] text-gray-400 mb-1">
                        Your Wallet Address
                      </p>
                      <p className="text-xs text-primary-500 font-mono break-all">
                        {yourWalletAddress}
                      </p>
                    </div>

                    {/* FIX 2: Shows "Loading..." until fetched — never blank or stuck at 0 */}
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">USDT Balance:</span>
                      <span className="text-white font-medium">
                        {yourUsdtBalance === null
                          ? "Loading..."
                          : yourUsdtBalance === "—"
                            ? "Could not load"
                            : `${yourUsdtBalance} USDT`}
                      </span>
                    </div>

                    {/* USDT input — user types here */}
                    <div className="space-y-2">
                      <label className="text-xs text-gray-300">
                        Enter USDT Amount
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          inputMode="decimal"
                          ref={buyingUsdtValue}
                          onChange={handleUsdtChange}
                          placeholder="Enter amount"
                          className="w-full bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 placeholder:text-sm touch-manipulation"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs pointer-events-none">
                          USDT
                        </span>
                      </div>
                    </div>

                    {/* FELY output — auto-calculated */}
                    <div className="space-y-2">
                      <label className="text-xs text-gray-300">
                        You will receive (FELY)
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          inputMode="decimal"
                          ref={buyingFelyValue}
                          onChange={handleFelyChange}
                          placeholder="Calculated automatically"
                          className="w-full bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 placeholder:text-sm touch-manipulation"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs pointer-events-none">
                          FELY
                        </span>
                      </div>
                    </div>

                    <button
                      className="btn btn-primary btn-lg w-full touch-manipulation disabled:opacity-60"
                      onClick={buyFelyToken}
                      disabled={isProcessing}
                    >
                      BUY FELY TOKEN
                    </button>

                    {transactionStatus && (
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">Status:</span>
                        <span className="text-yellow-500 font-medium text-xs">
                          {transactionStatus}
                        </span>
                      </div>
                    )}

                    <div className="pt-3 border-t border-[#2a333e]">
                      <p className="text-xs text-gray-400 mb-2">
                        Token Address:
                      </p>
                      <div className="flex gap-2 items-center">
                        <code className="text-[10px] text-gray-300 bg-black/40 px-2 py-1 rounded flex-1 truncate font-mono">
                          0xEe997788f625809332BaABB3110BCf1BA7400824
                        </code>
                        <button
                          onClick={handleCopy}
                          className="text-primary-500 text-xs hover:text-primary-400 flex items-center gap-1 transition-colors touch-manipulation active:scale-95"
                        >
                          {isCopied ? (
                            <>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m4.5 12.75 6 6 9-13.5"
                                />
                              </svg>
                              COPIED!
                            </>
                          ) : (
                            <>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                                />
                              </svg>
                              COPY
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </RevealAnimation>

      {/* Processing Modal */}
      {isProcessing && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-[#13171E] border border-[#2a333e] rounded-2xl p-8 max-w-sm w-full mx-4 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-primary-500/10 blur-3xl rounded-full" />
            <div className="relative mb-6">
              <div className="w-16 h-16 border-4 border-[#2a333e] border-t-primary-500 rounded-full animate-spin" />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 text-[10px] font-bold text-primary-500 tracking-wider">
                FELY
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {transactionStatus}
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Please wait while your transaction is being processed. Confirm the
              request in your wallet if prompted.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyFelySection;
