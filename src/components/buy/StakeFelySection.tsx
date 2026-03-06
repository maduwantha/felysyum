"use client";
import RevealAnimation from "../animation/RevealAnimation";
import Image from "next/image";
import { format } from "date-fns";
import { serverPostRequest } from "@/app/serverServices/serverCalls";
import { serverGetWithBareGet } from "@/app/serverServices/serverCalls";
import { serverGetWithBarePost } from "@/app/serverServices/serverCalls";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  STAKE12MONTH_CONTRACT,
  STAKE12MONTH_ABI,
} from "@/app/contracts/stake12months";

import {
  STAKE6MONTH_CONTRACT,
  STAKE6MONTH_ABI,
} from "@/app/contracts/stake6months";

import {
  STAKE3MONTH_CONTRACT,
  STAKE3MONTH_ABI,
} from "@/app/contracts/stake3months";

import {
  STAKE5DAYS_CONTRACT,
  STAKE5DAYS_ABI,
} from "@/app/contracts/stake5days";

import { POL_CONTRACT, POL_ABI } from "@/app/contracts/polygonContract";
import { USDT_CONTRACT_ADDRESS, USDT_ABI } from "@/app/contracts/usdtContract";

import { ethers } from "ethers";
import { useSearchParams } from "next/navigation";

// ─── EIP-6963 types ──────────────────────────────────────────────────────────
interface EIP6963ProviderInfo {
  uuid: string;
  name: string;
  icon: string;
  rdns: string;
}
interface EIP6963ProviderDetail {
  info: EIP6963ProviderInfo;
  provider: any;
}

// ─── Wallet selector modal ────────────────────────────────────────────────────
const WalletModal = ({
  wallets,
  onSelect,
  onClose,
}: {
  wallets: EIP6963ProviderDetail[];
  onSelect: (provider: any, name: string) => void;
  onClose: () => void;
}) => (
  <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm">
    <div className="bg-[#13171E] border border-[#2a333e] rounded-2xl p-6 max-w-xs w-full mx-4 shadow-2xl">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-white font-bold text-lg">Choose Wallet</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-white text-xl leading-none"
        >
          ✕
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {wallets.map((w) => (
          <button
            key={w.info.uuid}
            onClick={() => onSelect(w.provider, w.info.name)}
            className="flex items-center gap-3 bg-[#1c2230] hover:bg-[#2a333e] border border-[#2a333e] rounded-xl px-4 py-3 transition-colors text-left"
          >
            {w.info.icon && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={w.info.icon}
                alt={w.info.name}
                className="w-8 h-8 rounded-full"
              />
            )}
            <span className="text-white text-sm font-medium">
              {w.info.name}
            </span>
          </button>
        ))}
        {wallets.length === 0 && (
          <p className="text-gray-400 text-sm text-center py-4">
            No wallet detected. Install MetaMask, Trust Wallet, or Coinbase
            Wallet.
          </p>
        )}
      </div>
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const StakeFelySection = () => {
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref");
  const [referalCode, setReferalCode] = useState<string | null>(null);

  const [stakeUsdtAmount, setStakeUsdtAmount] = useState("");
  const [stakeIdForInterst, setStakeIdForInterst] = useState("");
  const [stakeIdForWithdraw, setStakeIdForWithdraw] = useState("");

  const POLYGON_CHAIN_ID = "0x89";
  const [isConnected, setIsConnected] = useState(false);
  const [yourWalletAddress, setWalletAddress] = useState<string | null>(null);
  const [transactionStatus, setTransactionStatus] = useState<string | null>(
    null,
  );
  const [stakeState, setStakeState] = useState<string | null>(null);
  const [lockUpState, setLockUpState] = useState<string | null>(null);
  const [ClameUpState, setClameUpState] = useState<string | null>(null);
  const [WithdrawState, setWithdrawState] = useState<string | null>(null);
  const [copiedContract, setCopiedContract] = useState<string | null>(null);

  const [StakePlan, setStakePlan] = useState("");
  const [loockUpStakePlan, setLoockUpStakePlan] = useState("");
  const [ClameInterstPlan, SetClameInterstPlan] = useState("");
  const [WithDrwaCapitalPlan, SetWithdrawCapitalPlan] = useState("");

  const [bareToken, setBareToken] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const [withdrawableFely, setWithdrawableFely] = useState("");
  const [withdrawableUsdt, setWithdrawableUsdt] = useState("");
  const [withdrawableFelyFix, setwithdrawableFelyFix] = useState("");

  const [usedSignature, setUsedSignature] = useState("");
  const [balanceErr, setBalanceErr] = useState("");

  const [usdtBalance, setUsdtBalance] = useState("");
  const [PolyBalance, setPolyBalance] = useState("");

  const [copiedHash, setCopiedHash] = useState<string | null>(null);
  const [copiedHashWith, setCopiedHashhis] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // ── Multi-wallet state ──
  const [detectedWallets, setDetectedWallets] = useState<
    EIP6963ProviderDetail[]
  >([]);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [activeProvider, setActiveProvider] = useState<any>(null); // the chosen provider

  type StakeRow = {
    id: number;
    month: number;
    usdt_amount: String;
    fely_amount: String;
    bonus_percentage: String;
    fely_bonus_amount: String;
    total_fely_amount: String;
    staked_at: String;
    maturity_date: String;
    days_until_maturity: number;
    is_matured: false;
    transaction_hash: String;
    status: String;
  };
  const [stakeData, setStakeData] = useState<StakeRow[]>([]);

  type WithdrawHistory = {
    id: number;
    usdt_amount: string;
    fely_amount: string;
    withdrawal_date: string;
    status: { code: number; text: string };
    created_at: string;
    transaction_hash: String;
  };
  const [withdrawData, setWithdrawData] = useState<WithdrawHistory[]>([]);

  type BonusHistory = {
    id: number;
    bonus_level: number;
    bonus_percentage: string;
    bonus_amount: string;
    earned_at: string;
  };
  const [bonusData, setBonusData] = useState<BonusHistory[]>([]);

  // ── EIP-6963: listen for wallet announcements ─────────────────────────────
  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        ),
      );
    checkMobile();
    setLockUpState("No active stakes found");

    const walletMap = new Map<string, EIP6963ProviderDetail>();

    const handleAnnounce = (event: any) => {
      const detail: EIP6963ProviderDetail = event.detail;
      walletMap.set(detail.info.uuid, detail);
      setDetectedWallets(Array.from(walletMap.values()));
    };

    window.addEventListener("eip6963:announceProvider", handleAnnounce);
    // Request all wallets to announce themselves
    window.dispatchEvent(new Event("eip6963:requestProvider"));

    // Also add legacy window.ethereum as fallback (MetaMask, Trust, Coinbase inject this)
    setTimeout(() => {
      const eth = (window as any).ethereum;
      if (eth && walletMap.size === 0) {
        // Legacy single provider – wrap it
        const legacy: EIP6963ProviderDetail = {
          info: {
            uuid: "legacy",
            name: eth.isMetaMask
              ? "MetaMask"
              : eth.isTrust || eth.isTrustWallet
                ? "Trust Wallet"
                : eth.isCoinbaseWallet
                  ? "Coinbase Wallet"
                  : "Browser Wallet",
            icon: "",
            rdns: "legacy",
          },
          provider: eth,
        };
        walletMap.set("legacy", legacy);
        setDetectedWallets(Array.from(walletMap.values()));
      }

      // Also handle multi-provider from window.ethereum.providers[] (Trust/Coinbase inject this)
      const providers: any[] = eth?.providers ?? [];
      providers.forEach((p, idx) => {
        const name = p.isMetaMask
          ? "MetaMask"
          : p.isTrust || p.isTrustWallet
            ? "Trust Wallet"
            : p.isCoinbaseWallet
              ? "Coinbase Wallet"
              : `Wallet ${idx + 1}`;
        const key = `legacy-${idx}`;
        walletMap.set(key, {
          info: { uuid: key, name, icon: "", rdns: key },
          provider: p,
        });
      });
      if (providers.length > 0)
        setDetectedWallets(Array.from(walletMap.values()));

      // Auto-reconnect silently (no popup)
      autoReconnect();
    }, 300);

    return () => {
      window.removeEventListener("eip6963:announceProvider", handleAnnounce);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Auto-reconnect if already authorised ─────────────────────────────────
  const autoReconnect = async () => {
    try {
      const eth = (window as any).ethereum;
      if (!eth) return;
      const accounts = await eth.request({ method: "eth_accounts" });
      if (accounts?.length > 0) {
        await checkAndSwitchNetwork(eth);
        setActiveProvider(eth);
        setWalletAddress(accounts[0]);
        setTransactionStatus("connected");
        await regProgress(eth);
      }
    } catch (_) {}
  };

  const planNames: Record<number, string> = {
    3: "Dolphin",
    6: "Shark",
    12: "Whale",
  };

  const shortenHash = (address: any) =>
    `${address.slice(0, 4)}...${address.slice(-4)}`;

  // ── Balances ──────────────────────────────────────────────────────────────
  const getUsdtBalance = async (address: string, provider: any) => {
    try {
      if (!address || !provider) return;
      const ethersProvider = new ethers.BrowserProvider(provider);
      const signer = await ethersProvider.getSigner();
      const usdtContract = new ethers.Contract(
        USDT_CONTRACT_ADDRESS,
        USDT_ABI,
        signer,
      );
      const rawBalance = await usdtContract.balanceOf(address);
      setUsdtBalance(ethers.formatUnits(rawBalance, 6));
    } catch (e) {
      console.error("USDT balance error", e);
    }
  };

  const getPolyBalance = async (address: string, provider: any) => {
    try {
      if (!address || !provider) return;
      const ethersProvider = new ethers.BrowserProvider(provider);
      const signer = await ethersProvider.getSigner();
      const polContract = new ethers.Contract(POL_CONTRACT, POL_ABI, signer);
      const rawBalance = await polContract.balanceOf(address);
      setPolyBalance(ethers.formatUnits(rawBalance, 18));
    } catch (e) {
      console.error("POL balance error", e);
    }
  };

  // ── Network switch ────────────────────────────────────────────────────────
  const checkAndSwitchNetwork = async (provider: any) => {
    try {
      const chainId = await provider.request({ method: "eth_chainId" });
      if (chainId !== POLYGON_CHAIN_ID) {
        setTransactionStatus("Switching to Polygon network...");
        try {
          await provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: POLYGON_CHAIN_ID }],
          });
        } catch (switchError: any) {
          if (switchError.code === 4902) {
            await provider.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: POLYGON_CHAIN_ID,
                  chainName: "Polygon Mainnet",
                  nativeCurrency: { name: "POL", symbol: "POL", decimals: 18 },
                  rpcUrls: ["https://polygon-rpc.com/"],
                  blockExplorerUrls: ["https://polygonscan.com/"],
                },
              ],
            });
          } else throw switchError;
        }
        setTransactionStatus("Network switched to Polygon");
        setTimeout(() => setTransactionStatus(null), 3000);
      }
    } catch (e) {
      console.error("Network switch error", e);
      setTransactionStatus("Failed to switch network");
      setTimeout(() => setTransactionStatus(null), 3000);
      throw e;
    }
  };

  // ── Registration / Login flow (provider-agnostic) ─────────────────────────
  const regProgress = async (provider: any) => {
    const accounts = await provider.request({ method: "eth_requestAccounts" });
    const nonce = await getNonce(accounts[0]);

    if (nonce?.success) {
      const message = `Sign this message to authenticate with your wallet:  ${nonce.data.nonce}`;
      const signature = await provider.request({
        method: "personal_sign",
        params: [message, accounts[0]],
      });
      setUsedSignature(signature);

      const loginReturnData = await serverPostRequest(
        {
          wallet_address: accounts[0],
          signature,
          nonce: nonce.data.nonce,
          message,
        },
        "/auth/login",
      );
      setIsConnected(true);
      getUsdtBalance(accounts[0], provider);
      getPolyBalance(accounts[0], provider);
      setTransactionStatus("connected");
      setBareToken(loginReturnData.data.token);
      getmyStaking(loginReturnData.data.token);
      setReferalCode(loginReturnData.data.referral.url);
      UserWithdrawalsHistory(loginReturnData.data.token);
      getWithdrwalBalance(loginReturnData.data.token);
      getReferalBonus(loginReturnData.data.token);
    } else {
      const tim = new Date().toISOString();
      const message = `Sign this message to authenticate with your wallet. Wallet: ${accounts[0]}. Timestamp: ${tim}`;
      const signature = await provider.request({
        method: "personal_sign",
        params: [message, accounts[0]],
      });
      setUsedSignature(signature);

      const regResoince = await serverPostRequest(
        {
          wallet_address: accounts[0],
          signature,
          message,
          timestamp: tim,
          referral_code: ref || null,
        },
        "/auth/register",
      );
      if (regResoince.success) {
        setIsConnected(true);
        getUsdtBalance(accounts[0], provider);
        getPolyBalance(accounts[0], provider);
        setTransactionStatus("connected");
        setBareToken(regResoince.data.token);
        setReferalCode(regResoince.data.referral.url);
        UserWithdrawalsHistory(regResoince.data.token);
        getWithdrwalBalance(regResoince.data.token);
        getReferalBonus(regResoince.data.token);
      } else {
        setIsConnected(false);
      }
    }
  };

  // ── Called when user picks a wallet from modal ────────────────────────────
  const handleWalletSelect = async (provider: any, name: string) => {
    setShowWalletModal(false);
    try {
      setTransactionStatus(`Connecting ${name}...`);
      await checkAndSwitchNetwork(provider);
      setActiveProvider(provider);
      await regProgress(provider);

      // Listen for events on chosen provider
      provider.on?.("chainChanged", () => window.location.reload());
      provider.on?.("accountsChanged", (accounts: string[]) => {
        if (accounts.length > 0) setWalletAddress(accounts[0]);
        else {
          setIsConnected(false);
          setWalletAddress(null);
        }
      });
    } catch (e: any) {
      console.error("Wallet connect error", e);
      setTransactionStatus(e?.message || "Failed to connect");
      setTimeout(() => setTransactionStatus(null), 3000);
    }
  };

  // ── Connect button ────────────────────────────────────────────────────────
  const connectWallet = async () => {
    // Deep link for mobile browsers without injected wallet
    if (isMobile && !(window as any).ethereum) {
      const dappUrl = window.location.href.replace(/^https?:\/\//, "");
      window.open(`https://metamask.app.link/dapp/${dappUrl}`, "_blank");
      return;
    }

    if (detectedWallets.length === 1) {
      // Only one wallet – connect directly
      await handleWalletSelect(
        detectedWallets[0].provider,
        detectedWallets[0].info.name,
      );
    } else if (detectedWallets.length > 1) {
      setShowWalletModal(true);
    } else {
      setTransactionStatus(
        "No wallet detected. Please install MetaMask or Trust Wallet.",
      );
      setTimeout(() => setTransactionStatus(null), 4000);
    }
  };

  // ── returnContract uses activeProvider ────────────────────────────────────
  const returnContract = async (plan: number): Promise<ethers.Contract> => {
    const provider = new ethers.BrowserProvider(
      activeProvider ?? (window as any).ethereum,
    );
    const signer = await provider.getSigner();

    if (plan === 100)
      return new ethers.Contract(USDT_CONTRACT_ADDRESS, USDT_ABI, signer);
    if (plan === 5)
      return new ethers.Contract(STAKE5DAYS_CONTRACT, STAKE5DAYS_ABI, signer);
    if (plan === 3)
      return new ethers.Contract(STAKE3MONTH_CONTRACT, STAKE3MONTH_ABI, signer);
    if (plan === 6)
      return new ethers.Contract(STAKE6MONTH_CONTRACT, STAKE6MONTH_ABI, signer);
    return new ethers.Contract(STAKE12MONTH_CONTRACT, STAKE12MONTH_ABI, signer);
  };

  // ── All other functions unchanged below ──────────────────────────────────
  const getNonce = async (wallet: any) => {
    try {
      return await serverPostRequest({ wallet_address: wallet }, "/auth/nonce");
    } catch (e) {
      console.error("Failed to get nonce:", e);
    }
  };

  const getmyStaking = async (Bearer: any) => {
    try {
      const MyStakingData = await serverGetWithBareGet(
        "",
        "/staking/my-stakings",
        Bearer,
      );
      setStakeData(MyStakingData.data.stakings);
    } catch (e) {
      console.error(e);
    }
  };

  const lockupStakes = async () => {
    setLockUpState("Wait..");
    try {
      if (!yourWalletAddress) {
        setLockUpState("No wallet address provided");
        return;
      }
      if (!loockUpStakePlan) {
        alert("No Plan Selected");
        setLockUpState("No Plan Selected");
        return;
      }
      setLockUpState("Looking for Stake IDs");
      const contract = await returnContract(parseInt(loockUpStakePlan));
      const stakeIds = await contract.getStakeIdsByAccount(yourWalletAddress);
      if (!stakeIds || stakeIds === "") {
        setLockUpState("Stake ID not found");
        return;
      }
      setLockUpState(stakeIds.map((id: bigint) => id.toString()).join(","));
    } catch (_) {
      setLockUpState("No active stakes found");
    }
  };

  const stakePlan = async () => {
    setStakeState("Wait....");
    if (!StakePlan) {
      setStakeState("select USDT Stake Plan");
      return;
    }
    if (!stakeUsdtAmount) {
      setStakeState("Enter USDT Amount for Stake");
      return;
    }
    setIsProcessing(true);
    try {
      const usdtContract = await returnContract(100);
      const amountInWei = ethers.parseUnits(stakeUsdtAmount, 6);
      const recipient = "0xB9191FF35722dc165C13ECd9B280808B0b59e749";
      setStakeState("Approving transaction...");
      const txn = await usdtContract.transfer(recipient, amountInWei);
      setStakeState("Transaction submitted. Waiting for confirmation...");
      const receipt = await txn.wait();
      if (receipt.status === 1) {
        setStakeState("Transaction successful!");
        createstakePlan(receipt.hash);
      } else setStakeState("Transaction failed!");
      setIsProcessing(false);
      setStakePlan("");
      setStakeUsdtAmount("0");
    } catch (error: any) {
      if (error.code === 4001) setStakeState("Transaction rejected by user");
      else if (error.code === -32603)
        setStakeState("Insufficient balance or allowance");
      else setStakeState("Transaction failed: " + error.message);
      setIsProcessing(false);
    }
  };

  const createstakePlan = async (hash: any) => {
    try {
      const obj = {
        month: StakePlan,
        usdt_amount: stakeUsdtAmount,
        transaction_hash: hash,
        wallet_address: yourWalletAddress,
      };
      const returndata = await serverGetWithBarePost(
        obj,
        "/staking/create",
        bareToken,
      );
      setStakeState(returndata.message);
      await getmyStaking(bareToken);
    } catch (e) {
      console.log(e);
    }
  };

  const claimInterest = async () => {
    setClameUpState("Wait....");
    if (!yourWalletAddress) {
      setClameUpState("No wallet address provided");
      return;
    }
    if (!ClameInterstPlan) {
      alert("No Plan Selected");
      setClameUpState("No Plan Selected");
      return;
    }
    if (!stakeIdForInterst) {
      alert("No Stake ID Inserted");
      setClameUpState("No Stake ID Inserted");
      return;
    }
    try {
      setClameUpState("Preparing transaction...");
      const contract = await returnContract(parseInt(ClameInterstPlan));
      setClameUpState("Requesting signature...");
      const tx = await contract.claimInterest(stakeIdForInterst);
      setClameUpState("Transaction submitted. Waiting for confirmation...");
      await tx.wait();
      setClameUpState("Success!");
      alert("Interest claimed successfully!");
    } catch (e: any) {
      console.error(e);
      setClameUpState("Transaction failed");
    }
  };

  const withdrawCapital = async () => {
    setWithdrawState("Wait....");
    if (!yourWalletAddress) {
      setWithdrawState("No wallet address provided");
      return;
    }
    if (!WithDrwaCapitalPlan) {
      alert("No Plan Selected");
      setWithdrawState("No Plan Selected");
      return;
    }
    if (!stakeIdForWithdraw) {
      alert("No Stake ID Inserted");
      setWithdrawState("No Stake ID Inserted");
      return;
    }
    try {
      setWithdrawState("Preparing transaction...");
      const contract = await returnContract(parseInt(WithDrwaCapitalPlan));
      setWithdrawState("Requesting signature...");
      const tx = await contract.withdrawCapital(stakeIdForWithdraw);
      setWithdrawState("Transaction submitted. Waiting for confirmation...");
      await tx.wait();
      setWithdrawState("Success!");
      alert("Capital withdrawn successfully!");
    } catch (e: any) {
      console.error(e);
      setWithdrawState("Transaction failed");
      setTimeout(() => setWithdrawState(null), 3000);
    }
  };

  const UserWithdrawalsHistory = async (Bearer: any) => {
    try {
      const data = await serverGetWithBareGet(
        "",
        "/withdrawal/history?limit=50",
        Bearer,
      );
      setWithdrawData(data.data.withdrawals);
    } catch (e) {
      console.error(e);
    }
  };

  const getReferalBonus = async (Bearer: any) => {
    try {
      const data = await serverGetWithBareGet(
        "",
        "/staking/my-bonus-history",
        Bearer,
      );
      setBonusData(
        data.data.bonuses.map((item: any) => ({
          id: item.id,
          bonus_level: item.bonus_level,
          bonus_percentage: item.bonus_percentage,
          bonus_amount: item.bonus_amount,
          earned_at: item.earned_at,
        })),
      );
    } catch (e) {
      console.error(e);
    }
  };

  const getWithdrwalBalance = async (Bearer: any) => {
    try {
      const data = await serverGetWithBareGet(
        "",
        "/withdrawal/balance",
        Bearer,
      );
      if (data.success) {
        setwithdrawableFelyFix(data.data.fely_balance);
        setWithdrawableFely(data.data.fely_balance);
        setWithdrawableUsdt(data.data.usdt_equivalent);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const createWithdrawalRequest = async (Bearer: any, amount: any) => {
    if (amount == 0) {
      setBalanceErr("0 value Not allowed");
      return;
    }
    try {
      const obj = {
        fely_amount: amount,
        signature: usedSignature,
        timestamp: Date.now().toString(),
      };
      const result = await serverGetWithBarePost(
        obj,
        "/withdrawal/request",
        Bearer,
      );
      if (!result.success) setBalanceErr(result.message);
      UserWithdrawalsHistory(Bearer);
    } catch (e) {
      console.error(e);
    }
    getWithdrwalBalance(Bearer);
  };

  // ─── JSX ─────────────────────────────────────────────────────────────────
  return (
    <div className="space-y-10">
      {/* Wallet selector modal */}
      {showWalletModal && (
        <WalletModal
          wallets={detectedWallets}
          onSelect={handleWalletSelect}
          onClose={() => setShowWalletModal(false)}
        />
      )}

      {/* Header Section */}
      <div className="text-center space-y-4">
        <RevealAnimation delay={0.2}>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-accent/80 text-base md:text-lg max-w-3xl mx-auto">
              Maximize your holdings by staking FELY. Earn rewards while
              contributing to the ecosystem stability.
            </p>
            <div className="bg-primary-500/10 border border-primary-500/20 px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(228,145,39,0.15)] mt-2">
              <p className="text-primary-500 text-sm md:text-base font-bold text-center">
                Connect your wallet, share your referral code, and earn rewards
                up to 3 levels deep!
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 w-full max-w-md mt-2">
              <div className="flex items-center gap-2 w-full">
                <input
                  id="static-referral-input"
                  type="text"
                  readOnly
                  value={referalCode || ""}
                  className="w-full bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-primary-500"
                />
                <button
                  className="bg-secondary border border-stroke-2 p-3 rounded-xl hover:bg-[#2a333e] transition-colors flex-shrink-0"
                  title="Copy Link"
                  onClick={() => {
                    const el = document.getElementById(
                      "static-referral-input",
                    ) as HTMLInputElement;
                    if (el) {
                      navigator.clipboard.writeText(el.value);
                      const msg = document.getElementById("copy-msg");
                      if (msg) {
                        msg.style.display = "block";
                        setTimeout(() => {
                          msg.style.display = "none";
                        }, 2000);
                      }
                    }
                  }}
                >
                  <svg
                    className="w-5 h-5 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
              <p
                id="copy-msg"
                className="text-xs text-primary-500 mt-1"
                style={{ display: "none" }}
              >
                Copied to clipboard!
              </p>
            </div>
          </div>
        </RevealAnimation>
      </div>

      <div className="text-center w-full px-4 md:px-0">
        <p className="text-white font-bold text-sm md:text-base">
          Felysyum stakes are secured on smart contracts. Once you stake, only
          you can withdraw your daily interest and staking capital – not even we
          can access it. Your funds are safe in your hands.
          <br />
          <span className="text-primary-500 font-medium mt-4 inline-block">
            Choose your staking plan and start earning
          </span>
          <span className="text-primary-500 font-bold block my-4 text-base md:text-lg">
            Enjoy premium interest on every plan—even for small stakes! Whale
            20%, Shark 9%, Dolphin 4%. Don't miss this limited-time opportunity!
          </span>
        </p>
      </div>

      {/* Staking Plan Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-10 w-full px-4 md:px-0">
        {/* Dolphin */}
        <RevealAnimation delay={0.2}>
          <div className="bg-secondary dark:bg-background-8 rounded-[24px] p-6 border border-stroke-2 dark:border-stroke-6 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:border-primary-500/50 hover:shadow-[0_0_20px_rgba(228,145,39,0.1)]">
            <h3 className="text-xl font-bold text-white mb-1">Dolphin</h3>
            <p className="text-primary-500 font-medium text-sm mb-6">
              Staking Period 3 Months
            </p>
            <div className="flex-grow space-y-4 mb-6 text-sm">
              <div className="flex justify-between border-b border-[#2a333e] pb-2 text-gray-400 font-medium">
                <span>Staked Amount</span>
                <span>Interest Rate</span>
              </div>
              <div className="flex justify-between text-white">
                <span>0 - 1000 USDT</span>
                <span className="text-ns-yellow font-bold">2.5%</span>
              </div>
              <div className="flex justify-between text-white">
                <span>1001 - 5000 USDT</span>
                <span className="text-ns-yellow font-bold">3%</span>
              </div>
              <div className="flex justify-between text-white">
                <span>5001 - 10000 USDT</span>
                <span className="text-ns-yellow font-bold">4%</span>
              </div>
            </div>
            <div className="mt-auto pt-5 border-t border-[#2a333e] space-y-3">
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Monitor Your Stake on Polygon Chain – <br />
                <a
                  href="https://polygonscan.com/address/0x66BAf11521Ee8B3eF84bd459F7062916b6218D68"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary-500 hover:underline"
                >
                  Open the Contract on polygonscan.com
                </a>
              </p>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value="0x66BAf11521Ee8B3eF84bd459F7062916b6218D68"
                    className="w-full bg-[#13171E] border border-[#2a333e] rounded-lg px-3 py-2 text-xs text-gray-300 focus:outline-none"
                  />
                  <button
                    className="bg-primary-500 text-white p-2 rounded-lg hover:bg-primary-600 transition-colors flex-shrink-0"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        "0x66BAf11521Ee8B3eF84bd459F7062916b6218D68",
                      );
                      setCopiedContract("dolphin");
                      setTimeout(() => setCopiedContract(null), 3000);
                    }}
                  >
                    {copiedContract === "dolphin" ? (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {copiedContract === "dolphin" && (
                  <span className="text-xs text-primary-500 mt-1">
                    Copied Dolphin Contract!
                  </span>
                )}
              </div>
            </div>
          </div>
        </RevealAnimation>

        {/* Shark */}
        <RevealAnimation delay={0.3}>
          <div className="bg-secondary dark:bg-background-8 rounded-[24px] p-6 border border-stroke-2 dark:border-stroke-6 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:border-primary-500/50 hover:shadow-[0_0_20px_rgba(228,145,39,0.1)]">
            <h3 className="text-xl font-bold text-white mb-1">Shark</h3>
            <p className="text-primary-500 font-medium text-sm mb-6">
              Staking Period 6 Months
            </p>
            <div className="flex-grow space-y-4 mb-6 text-sm">
              <div className="flex justify-between border-b border-[#2a333e] pb-2 text-gray-400 font-medium">
                <span>Staked Amount</span>
                <span>Interest Rate</span>
              </div>
              <div className="flex justify-between text-white">
                <span>0 - 1000 USDT</span>
                <span className="text-ns-yellow font-bold">6%</span>
              </div>
              <div className="flex justify-between text-white">
                <span>1001 - 5000 USDT</span>
                <span className="text-ns-yellow font-bold">7%</span>
              </div>
              <div className="flex justify-between text-white">
                <span>5001 - 10000 USDT</span>
                <span className="text-ns-yellow font-bold">9%</span>
              </div>
            </div>
            <div className="mt-auto pt-5 border-t border-[#2a333e] space-y-3">
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Monitor Your Stake on Polygon Chain – <br />
                <a
                  href="https://polygonscan.com/address/0xe4410D26224d4728846722309fF386495Cc1E490"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary-500 hover:underline"
                >
                  Open the Contract on polygonscan.com
                </a>
              </p>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value="0xe4410D26224d4728846722309fF386495Cc1E490"
                    className="w-full bg-[#13171E] border border-[#2a333e] rounded-lg px-3 py-2 text-xs text-gray-300 focus:outline-none"
                  />
                  <button
                    className="bg-primary-500 text-white p-2 rounded-lg hover:bg-primary-600 transition-colors flex-shrink-0"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        "0xe4410D26224d4728846722309fF386495Cc1E490",
                      );
                      setCopiedContract("shark");
                      setTimeout(() => setCopiedContract(null), 3000);
                    }}
                  >
                    {copiedContract === "shark" ? (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 00-2-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {copiedContract === "shark" && (
                  <span className="text-xs text-primary-500 mt-1">
                    Copied Shark Contract!
                  </span>
                )}
              </div>
            </div>
          </div>
        </RevealAnimation>

        {/* Whale */}
        <RevealAnimation delay={0.4}>
          <div className="bg-secondary dark:bg-background-8 rounded-[24px] p-6 border border-stroke-2 dark:border-stroke-6 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:border-primary-500/50 hover:shadow-[0_0_20px_rgba(228,145,39,0.1)]">
            <h3 className="text-xl font-bold text-white mb-1">Whale</h3>
            <p className="text-primary-500 font-medium text-sm mb-6">
              Staking Period 12 Months
            </p>
            <div className="flex-grow space-y-4 mb-6 text-sm">
              <div className="flex justify-between border-b border-[#2a333e] pb-2 text-gray-400 font-medium">
                <span>Staked Amount</span>
                <span>Interest Rate</span>
              </div>
              <div className="flex justify-between text-white">
                <span>0 - 1000 USDT</span>
                <span className="text-ns-yellow font-bold">12.5%</span>
              </div>
              <div className="flex justify-between text-white">
                <span>1001 - 5000 USDT</span>
                <span className="text-ns-yellow font-bold">15%</span>
              </div>
              <div className="flex justify-between text-white">
                <span>5001 - 10000 USDT</span>
                <span className="text-ns-yellow font-bold">20%</span>
              </div>
            </div>
            <div className="mt-auto pt-5 border-t border-[#2a333e] space-y-3">
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Monitor Your Stake on Polygon Chain – <br />
                <a
                  href="https://polygonscan.com/address/0x5eff66487f9d33465baf1ebd4cfa991f0b8cd963"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary-500 hover:underline"
                >
                  Open the Contract on polygonscan.com
                </a>
              </p>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value="0x5eff66487f9d33465baf1ebd4cfa991f0b8cd963"
                    className="w-full bg-[#13171E] border border-[#2a333e] rounded-lg px-3 py-2 text-xs text-gray-300 focus:outline-none"
                  />
                  <button
                    className="bg-primary-500 text-white p-2 rounded-lg hover:bg-primary-600 transition-colors flex-shrink-0"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        "0x5eff66487f9d33465baf1ebd4cfa991f0b8cd963",
                      );
                      setCopiedContract("whale");
                      setTimeout(() => setCopiedContract(null), 3000);
                    }}
                  >
                    {copiedContract === "whale" ? (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 00-2-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {copiedContract === "whale" && (
                  <span className="text-xs text-primary-500 mt-1">
                    Copied Whale Contract!
                  </span>
                )}
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT: Stake Card */}
        <div className="space-y-8">
          <RevealAnimation delay={0.3}>
            <div className="bg-secondary dark:bg-background-8 rounded-[30px] p-6 border border-stroke-2 dark:border-stroke-6 overflow-hidden relative h-full">
              <div className="relative z-10 space-y-6">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white mb-1">
                    Connect Your Wallet & Stake
                  </h3>
                </div>

                <div className="bg-[#13171E] rounded-xl p-4 border border-[#2a333e] space-y-3">
                  <h4 className="text-white text-sm font-medium">
                    Use Polygon Network – keep Polygon USDT and a little POL for
                    gas.
                  </h4>
                  <button
                    className="btn btn-primary btn-sm w-auto px-6"
                    onClick={connectWallet}
                  >
                    CONNECT WALLET
                  </button>
                  {/* Show detected wallets count hint */}
                  {detectedWallets.length > 0 && !isConnected && (
                    <p className="text-xs text-gray-500">
                      {detectedWallets.length} wallet
                      {detectedWallets.length > 1 ? "s" : ""} detected:{" "}
                      {detectedWallets.map((w) => w.info.name).join(", ")}
                    </p>
                  )}
                  {isConnected && (
                    <div className="space-y-1">
                      <div>
                        <p className="text-xs text-gray-500">Wallet Address:</p>
                        <p className="text-xs text-primary-500 font-medium font-mono">
                          {yourWalletAddress}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">USDT Balance:</p>
                        <p className="text-xs text-primary-500 font-medium font-mono">
                          {usdtBalance}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">POL Balance:</p>
                        <p className="text-xs text-primary-500 font-medium font-mono">
                          {PolyBalance}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">
                          Transaction Status:
                        </p>
                        <p className="text-xs text-primary-500 font-medium font-mono">
                          {transactionStatus}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {isConnected && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs text-gray-300">
                        USDT Amount
                      </label>
                      <div className="relative">
                        <input
                          value={stakeUsdtAmount}
                          onChange={(e) => setStakeUsdtAmount(e.target.value)}
                          type="number"
                          placeholder="Enter amount"
                          className="w-full bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 placeholder:text-sm"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs">
                          USDT
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-gray-300">Plan</label>
                      <div className="relative">
                        <select
                          value={StakePlan}
                          className="w-full bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 appearance-none pr-10"
                          onChange={(e) => setStakePlan(e.target.value)}
                        >
                          <option value="" disabled>
                            Select Plan
                          </option>
                          <option value="3">Dolphin (3 Months)</option>
                          <option value="6">Shark (6 Months)</option>
                          <option value="12">Whale (12 Months)</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                        <p className="text-primary-500 text-xs mt-2">
                          {stakeState}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={stakePlan}
                      className="btn btn-primary btn-lg w-full shadow-lg shadow-primary-500/20 mt-2"
                    >
                      STAKE
                    </button>
                  </div>
                )}
              </div>
            </div>
          </RevealAnimation>
        </div>

        {/* RIGHT: Actions */}
        {isConnected ? (
          <div className="space-y-8">
            <RevealAnimation delay={0.3}>
              <div className="bg-secondary dark:bg-background-8 rounded-[30px] p-6 border border-stroke-2 dark:border-stroke-6">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white">
                    Search Your Stake ID to Claim Bonuses
                  </h3>
                  <div className="flex flex-col md:flex-row gap-3 md:items-end">
                    <div className="flex flex-col space-y-2 w-full md:w-auto">
                      <label className="text-xs text-gray-300 ml-1">Plan</label>
                      <div className="relative">
                        <select
                          onChange={(e) => setLoockUpStakePlan(e.target.value)}
                          className="bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 appearance-none min-w-[120px] w-full pr-10"
                        >
                          <option value="" disabled>
                            Select Plan
                          </option>
                          <option value="3">Dolphin (3 Months)</option>
                          <option value="6">Shark (6 Months)</option>
                          <option value="12">Whale (12 Months)</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2 w-full md:w-auto">
                      <label className="text-xs text-transparent select-none hidden md:block">
                        Action
                      </label>
                      <button
                        onClick={lockupStakes}
                        className="btn btn-primary btn-sm whitespace-nowrap min-w-[100px] w-full md:w-auto px-6 h-[46px]"
                      >
                        SEARCH
                      </button>
                    </div>
                  </div>
                  <div className="pl-1">
                    <p className="text-gray-400 text-sm">
                      Results:{" "}
                      <span className="text-primary-500 italic ml-2">
                        {lockUpState}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <div className="bg-secondary dark:bg-background-8 rounded-[30px] p-6 border border-stroke-2 dark:border-stroke-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Claim Today's Bonus
                </h3>
                <div className="flex flex-col md:flex-row gap-3 md:items-end">
                  <div className="flex-1 flex flex-col space-y-2 w-full">
                    <label className="text-xs text-gray-300 ml-1">
                      Stake ID
                    </label>
                    <input
                      type="text"
                      value={stakeIdForInterst}
                      onChange={(e) => setStakeIdForInterst(e.target.value)}
                      placeholder="Enter Stake ID"
                      className="w-full bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 min-w-0 placeholder:text-sm"
                    />
                  </div>
                  <div className="flex flex-col space-y-2 w-full md:w-auto">
                    <label className="text-xs text-gray-300 ml-1">Plan</label>
                    <div className="relative">
                      <select
                        onChange={(e) => SetClameInterstPlan(e.target.value)}
                        className="bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 appearance-none min-w-[120px] w-full pr-10"
                      >
                        <option value="" disabled>
                          Select Plan
                        </option>
                        <option value="3">Dolphin (3 Months)</option>
                        <option value="6">Shark (6 Months)</option>
                        <option value="12">Whale (12 Months)</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2 w-full md:w-auto">
                    <label className="text-xs text-transparent select-none hidden md:block">
                      Action
                    </label>
                    <button
                      onClick={claimInterest}
                      className="btn btn-primary btn-sm whitespace-nowrap min-w-[100px] w-full md:w-auto px-6 h-[46px]"
                    >
                      CLAIM
                    </button>
                  </div>
                </div>
                <p className="text-primary-500 text-xs mt-2">{ClameUpState}</p>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.5}>
              <div className="bg-secondary dark:bg-background-8 rounded-[30px] p-6 border border-stroke-2 dark:border-stroke-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Withdraw Staked Funds After Lock Period
                </h3>
                <div className="flex flex-col md:flex-row gap-3 md:items-end">
                  <div className="flex-1 flex flex-col space-y-2 w-full">
                    <label className="text-xs text-gray-300 ml-1">
                      Stake ID
                    </label>
                    <input
                      type="text"
                      value={stakeIdForWithdraw}
                      onChange={(e) => setStakeIdForWithdraw(e.target.value)}
                      placeholder="Enter Stake ID"
                      className="w-full bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 min-w-0 placeholder:text-sm"
                    />
                  </div>
                  <div className="flex flex-col space-y-2 w-full md:w-auto">
                    <label className="text-xs text-gray-300 ml-1">Plan</label>
                    <div className="relative">
                      <select
                        onChange={(e) => SetWithdrawCapitalPlan(e.target.value)}
                        className="bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 appearance-none min-w-[120px] w-full pr-10"
                      >
                        <option value="" disabled>
                          Select Plan
                        </option>
                        <option value="3">Dolphin (3 Months)</option>
                        <option value="6">Shark (6 Months)</option>
                        <option value="12">Whale (12 Months)</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2 w-full md:w-auto">
                    <label className="text-xs text-transparent select-none hidden md:block">
                      Action
                    </label>
                    <button
                      onClick={withdrawCapital}
                      className="btn btn-secondary text-white border border-[#2a333e] hover:bg-[#2a333e] btn-sm whitespace-nowrap min-w-[100px] w-full md:w-auto px-6 h-[46px]"
                    >
                      WITHDRAW
                    </button>
                  </div>
                </div>
                <p className="text-primary-500 text-xs mt-2">{WithdrawState}</p>
              </div>
            </RevealAnimation>
          </div>
        ) : (
          <div />
        )}
      </div>

      {/* Data Tables */}
      {isConnected ? (
        <RevealAnimation delay={0.6}>
          <div>
            {/* My Stakes */}
            <div className="bg-secondary dark:bg-background-8 rounded-[30px] p-6 border border-stroke-2 dark:border-stroke-6 overflow-x-auto">
              <h3 className="text-xl font-bold text-white mb-4">My Stakes</h3>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#2a333e]">
                    {[
                      "Plan",
                      "USDT",
                      "Staked (FELY)",
                      "Bonus %",
                      "Bonus (FELY)",
                      "Date",
                      "End Date",
                      "Transaction Hash",
                      "Status",
                    ].map((h) => (
                      <th
                        key={h}
                        className="p-4 text-white font-semibold whitespace-nowrap"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {stakeData.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-[#2a333e] last:border-0 hover:bg-[#13171E]/50 transition-colors"
                    >
                      <td className="p-4 text-gray-300">
                        {planNames[row.month] ?? row.month}
                      </td>
                      <td className="p-4 text-gray-300">{row.usdt_amount}</td>
                      <td className="p-4 text-gray-300">{row.fely_amount}</td>
                      <td className="p-4 text-gray-300">
                        {row.bonus_percentage}
                      </td>
                      <td className="p-4 text-gray-300">
                        {row.fely_bonus_amount}
                      </td>
                      <td className="p-4 text-gray-300">
                        {row.staked_at
                          ? format(
                              new Date(String(row.staked_at)),
                              "dd/MM/yyyy",
                            )
                          : "-"}
                      </td>
                      <td className="p-4 text-gray-300">
                        {row.maturity_date
                          ? format(
                              new Date(String(row.maturity_date)),
                              "dd/MM/yyyy",
                            )
                          : "-"}
                      </td>
                      <td className="p-4 text-gray-300">
                        <div className="flex items-center gap-2">
                          <span>{shortenHash(row.transaction_hash)}</span>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(
                                String(row.transaction_hash),
                              );
                              setCopiedHash(String(row.transaction_hash));
                              setTimeout(() => setCopiedHash(null), 2000);
                            }}
                            className="text-gray-500 hover:text-primary-500 transition-colors flex-shrink-0"
                          >
                            {copiedHash === String(row.transaction_hash) ? (
                              <svg
                                className="w-3.5 h-3.5 text-primary-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            ) : (
                              <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 002 2z"
                                />
                              </svg>
                            )}
                          </button>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="inline-block px-2 py-1 bg-primary-500/20 text-primary-500 text-xs rounded-md">
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Referral Bonus */}
            <div className="bg-secondary dark:bg-background-8 rounded-[30px] p-6 border border-stroke-2 dark:border-stroke-6 overflow-x-auto mt-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Referral Bonus
              </h3>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#2a333e]">
                    {[
                      "Earned At",
                      "Bonus Level",
                      "Bonus Percentage",
                      "Bonus Amount (FELY)",
                    ].map((h) => (
                      <th
                        key={h}
                        className="p-4 text-white font-semibold whitespace-nowrap"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bonusData.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-[#2a333e] last:border-0 hover:bg-[#13171E]/50 transition-colors"
                    >
                      <td className="p-4 text-gray-300">
                        {row.id
                          ? format(
                              new Date(String(row.earned_at)),
                              "dd/MM/yyyy",
                            )
                          : "-"}
                      </td>
                      <td className="p-4 text-gray-300">{row.bonus_level}</td>
                      <td className="p-4 text-gray-300">
                        {row.bonus_percentage}
                      </td>
                      <td className="p-4 text-gray-300">{row.bonus_amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Withdraw Balance */}
            <div className="bg-secondary dark:bg-background-8 rounded-[30px] p-6 border border-stroke-2 dark:border-stroke-6 mt-8">
              <div className="flex flex-col gap-4 mb-6">
                <h3 className="text-xl font-bold text-white">
                  Total Bonus Balance{" "}
                  {parseFloat(withdrawableFelyFix || "0").toFixed(2)} FELY (
                  {parseFloat(withdrawableUsdt || "0").toFixed(2)}) USDT{" "}
                  {balanceErr}
                </h3>
                <div className="flex flex-col sm:flex-row items-start gap-3 justify-start">
                  <div className="relative">
                    <input
                      type="number"
                      value={
                        withdrawableFely
                          ? (
                              Math.trunc(parseFloat(withdrawableFely) * 100) /
                              100
                            ).toString()
                          : ""
                      }
                      onChange={(e) => setWithdrawableFely(e.target.value)}
                      placeholder="Amount to withdraw"
                      className="w-full sm:w-[250px] bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-primary-500 placeholder:text-sm"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs">
                      FELY
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      createWithdrawalRequest(
                        bareToken,
                        (
                          Math.trunc(parseFloat(withdrawableFely) * 100) / 100
                        ).toString(),
                      )
                    }
                    className="btn btn-primary btn-sm whitespace-nowrap px-6 h-[38px] min-w-[120px]"
                  >
                    WITHDRAW
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto border-t border-[#2a333e] pt-6 mt-2">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#2a333e]">
                      {[
                        "Date",
                        "USDT Amount",
                        "FELY Amount",
                        "Transaction Hash",
                        "Status",
                      ].map((h) => (
                        <th
                          key={h}
                          className="p-4 text-white font-semibold whitespace-nowrap"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {withdrawData.map((rows) => (
                      <tr
                        key={rows.id}
                        className="border-b border-[#2a333e] last:border-0 hover:bg-[#13171E]/50 transition-colors"
                      >
                        <td className="p-4 text-white text-sm">
                          {rows.created_at
                            ? format(
                                new Date(String(rows.created_at)),
                                "dd/MM/yyyy",
                              )
                            : "-"}
                        </td>
                        <td className="p-4 text-white text-sm">
                          {parseFloat(rows.usdt_amount).toFixed(2)}
                        </td>
                        <td className="p-4 text-white text-sm">
                          {parseFloat(rows.fely_amount).toFixed(2)}
                        </td>
                        <td className="p-4 text-white text-sm">
                          <div className="flex items-center gap-2">
                            <span>{shortenHash(rows.transaction_hash)}</span>
                            <button
                              onClick={() => {
                                navigator.clipboard.writeText(
                                  String(rows.transaction_hash),
                                );
                                setCopiedHashhis(String(rows.transaction_hash));
                                setTimeout(() => setCopiedHashhis(null), 2000);
                              }}
                              className="text-gray-500 hover:text-primary-500 transition-colors flex-shrink-0"
                            >
                              {copiedHashWith ===
                              String(rows.transaction_hash) ? (
                                <svg
                                  className="w-3.5 h-3.5 text-primary-500"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  className="w-3.5 h-3.5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 002 2z"
                                  />
                                </svg>
                              )}
                            </button>
                          </div>
                        </td>
                        <td className="p-4 text-white text-sm">
                          <span className="inline-block px-2 py-1 bg-primary-500/20 text-primary-500 text-xs rounded-md">
                            {rows.status.text}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </RevealAnimation>
      ) : (
        <div />
      )}

      {/* Processing Modal */}
      {isProcessing && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-[#13171E] border border-[#2a333e] rounded-2xl p-8 max-w-sm w-full mx-4 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-primary-500/10 blur-3xl rounded-full" />
            <div className="relative mb-6">
              <div className="w-16 h-16 border-4 border-[#2a333e] border-t-primary-500 rounded-full animate-spin"></div>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 text-[10px] font-bold text-primary-500 tracking-wider">
                FELY
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{stakeState}</h3>
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

export default StakeFelySection;
