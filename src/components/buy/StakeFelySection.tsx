"use client";

import RevealAnimation from "../animation/RevealAnimation";
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
import { USDT_CONTRACT_ADDRESS, USDT_ABI } from "@/app/contracts/usdtContract";
import { ethers } from "ethers";
import { useSearchParams } from "next/navigation";

// ─── SSR guard ────────────────────────────────────────────────────────────────
const isBrowser = typeof window !== "undefined";

// ─── Polygon RPC — routed through your own API to avoid CORS ─────────────────
// Create app/api/rpc/route.ts  (see bottom of this file)
const PROXY_RPC_URL = "/rpc.php"; // PHP proxy — upload rpc.php to your server root

// ─── Provider cache ───────────────────────────────────────────────────────────
let _providerCache: ethers.JsonRpcProvider | null = null;
let _providerCacheTime = 0;
const CACHE_TTL = 90_000;

const getPublicProvider = (): ethers.JsonRpcProvider =>
  new ethers.JsonRpcProvider(PROXY_RPC_URL, { chainId: 137, name: "polygon" });

const getCachedPublicProvider = (): ethers.JsonRpcProvider => {
  const now = Date.now();
  if (_providerCache && now - _providerCacheTime < CACHE_TTL)
    return _providerCache;
  _providerCache = getPublicProvider();
  _providerCacheTime = Date.now();
  return _providerCache;
};

const clearProviderCache = () => {
  _providerCache = null;
  _providerCacheTime = 0;
};

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
      console.warn("Injected provider read failed, falling back to proxy RPC");
    }
  }
  return getCachedPublicProvider();
};

// ─────────────────────────────────────────────────────────────────────────────
//  WALLET DETECTION UTILITIES
// ─────────────────────────────────────────────────────────────────────────────

const detectMobile = (): boolean =>
  isBrowser
    ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
    : false;

const detectIOS = (): boolean =>
  isBrowser ? /iPhone|iPad|iPod/i.test(navigator.userAgent) : false;

/** Returns the raw injected provider for each known wallet, or null */
const getWalletProviders = () => {
  if (!isBrowser)
    return {
      metamask: null,
      trust: null,
      coinbase: null,
      binance: null,
      ethereum: null,
    };

  const win = window as any;

  // MetaMask — may live in ethereum.providers[] when multiple extensions loaded
  let metamask: any = null;
  if (win.ethereum?.isMetaMask && !win.ethereum?.isBraveWallet)
    metamask = win.ethereum;
  if (!metamask && Array.isArray(win.ethereum?.providers)) {
    metamask =
      win.ethereum.providers.find(
        (p: any) => p.isMetaMask && !p.isBraveWallet,
      ) ?? null;
  }

  // Trust Wallet — has its own global AND may inject into window.ethereum
  const trust: any =
    win.trustwallet?.ethereum ??
    win.trustwallet ??
    (win.ethereum?.isTrust || win.ethereum?.isTrustWallet
      ? win.ethereum
      : null) ??
    (Array.isArray(win.ethereum?.providers)
      ? (win.ethereum.providers.find(
          (p: any) => p.isTrust || p.isTrustWallet,
        ) ?? null)
      : null);

  // Coinbase Wallet
  const coinbase: any =
    win.coinbaseWalletExtension ??
    (win.ethereum?.isCoinbaseWallet ? win.ethereum : null) ??
    (Array.isArray(win.ethereum?.providers)
      ? (win.ethereum.providers.find((p: any) => p.isCoinbaseWallet) ?? null)
      : null);

  // Binance Web3 Wallet — injects as window.BinanceChain OR window.ethereum with isBinance flag
  const binance: any =
    win.BinanceChain ??
    (win.ethereum?.isBinance || win.ethereum?.isBinanceW3W
      ? win.ethereum
      : null) ??
    (Array.isArray(win.ethereum?.providers)
      ? (win.ethereum.providers.find(
          (p: any) => p.isBinance || p.isBinanceW3W,
        ) ?? null)
      : null);

  return { metamask, trust, coinbase, binance, ethereum: win.ethereum ?? null };
};

const detectTrustWallet = (provider: any): boolean => {
  if (!provider) return false;
  if (provider.isTrust || provider.isTrustWallet || provider.isTrustBrowser)
    return true;
  if (isBrowser && /TrustWallet|Trust\//.test(navigator.userAgent)) return true;
  if (isBrowser && !!(window as any).trustwallet) return true;
  return false;
};

const detectCoinbase = (provider: any): boolean =>
  !!(provider?.isCoinbaseWallet || provider?.isCoinbaseBrowser);

const detectBinance = (provider: any): boolean =>
  !!(
    provider?.isBinance ||
    provider?.isBinanceW3W ||
    (isBrowser &&
      !!(window as any).BinanceChain &&
      provider === (window as any).BinanceChain)
  );

/** Which named in-app browser are we inside? */
const detectInAppBrowser = (): { isInApp: boolean; name: string } => {
  if (!isBrowser) return { isInApp: false, name: "" };
  const ua = navigator.userAgent;
  if (/TrustWallet|Trust\//.test(ua))
    return { isInApp: true, name: "Trust Wallet" };
  if (/CoinbaseWallet|Coinbase\//.test(ua))
    return { isInApp: true, name: "Coinbase Wallet" };
  if (/MetaMaskMobile/.test(ua)) return { isInApp: true, name: "MetaMask" };
  if (/BinanceApp|BinanceW3W/.test(ua))
    return { isInApp: true, name: "Binance" };
  const win = window as any;
  if (detectMobile() && (win.ethereum || win.trustwallet || win.BinanceChain))
    return { isInApp: true, name: "Wallet Browser" };
  return { isInApp: false, name: "" };
};

/** Wait for window.ethereum / trust globals to be injected (mobile wallets inject late) */
const waitForEthereum = (timeoutMs = 6000): Promise<any> =>
  new Promise((resolve) => {
    if (!isBrowser) {
      resolve(null);
      return;
    }
    const win = window as any;

    const getBestProvider = () =>
      win.trustwallet?.ethereum ??
      win.trustwallet ??
      win.BinanceChain ??
      win.ethereum ??
      null;

    const existing = getBestProvider();
    if (existing) {
      resolve(existing);
      return;
    }

    const interval = setInterval(() => {
      const p = getBestProvider();
      if (p) {
        clearInterval(interval);
        clearTimeout(timer);
        resolve(p);
      }
    }, 100);

    const timer = setTimeout(() => {
      clearInterval(interval);
      resolve(getBestProvider() ?? null);
    }, timeoutMs);
  });

// ─────────────────────────────────────────────────────────────────────────────
//  SIGNING — wallet-specific quirks handled centrally
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Signs a plain-text message with whatever provider is active.
 * Handles MetaMask, Trust (iOS/Android param order), Coinbase, Binance quirks.
 */
const signMessageWithProvider = async (
  provider: any,
  walletAddr: string,
  message: string,
): Promise<string> => {
  const isTrust = detectTrustWallet(provider);
  const isCoinbase = detectCoinbase(provider);
  const isBinanceW = detectBinance(provider);
  const isIOS = detectIOS();
  const hexMsg = ethers.hexlify(ethers.toUtf8Bytes(message));

  // ── Coinbase Wallet ───────────────────────────────────────────────────────
  if (isCoinbase) {
    for (const params of [
      [message, walletAddr],
      [hexMsg, walletAddr],
    ]) {
      try {
        return await provider.request({ method: "personal_sign", params });
      } catch (_) {}
    }
    return provider.request({
      method: "eth_sign",
      params: [walletAddr, ethers.hashMessage(message)],
    });
  }

  // ── Binance Web3 Wallet ───────────────────────────────────────────────────
  if (isBinanceW) {
    for (const params of [
      [message, walletAddr],
      [hexMsg, walletAddr],
      [walletAddr, hexMsg],
    ]) {
      try {
        return await provider.request({ method: "personal_sign", params });
      } catch (_) {}
    }
    throw new Error("Binance Web3 Wallet signing failed");
  }

  // ── Trust Wallet Mobile ───────────────────────────────────────────────────
  // iOS: [hexMsg, address]  |  Android: [address, hexMsg]
  if (isTrust) {
    const primary = isIOS ? [hexMsg, walletAddr] : [walletAddr, hexMsg];
    const fallback = isIOS ? [walletAddr, hexMsg] : [hexMsg, walletAddr];
    try {
      return await provider.request({
        method: "personal_sign",
        params: primary,
      });
    } catch (_) {}
    try {
      return await provider.request({
        method: "personal_sign",
        params: fallback,
      });
    } catch (e: any) {
      throw new Error("Trust Wallet signing failed: " + e.message);
    }
  }

  // ── MetaMask / Default ────────────────────────────────────────────────────
  try {
    return await provider.request({
      method: "personal_sign",
      params: [hexMsg, walletAddr],
    });
  } catch (e: any) {
    if (
      e.code === -32000 ||
      e.message?.includes("param") ||
      e.message?.includes("invalid")
    ) {
      try {
        return await provider.request({
          method: "personal_sign",
          params: [walletAddr, hexMsg],
        });
      } catch (_) {}
    }
    try {
      return await provider.request({
        method: "eth_sign",
        params: [walletAddr, ethers.hashMessage(message)],
      });
    } catch (_) {}
    throw e;
  }
};

// ─────────────────────────────────────────────────────────────────────────────
//  CLIPBOARD
// ─────────────────────────────────────────────────────────────────────────────

const copyToClipboard = (text: string) => {
  if (!isBrowser) return;
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
    return;
  }
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

// ─────────────────────────────────────────────────────────────────────────────
//  TYPES
// ─────────────────────────────────────────────────────────────────────────────

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

type StakeRow = {
  id: number;
  month: number;
  usdt_amount: string;
  fely_amount: string;
  bonus_percentage: string;
  fely_bonus_amount: string;
  total_fely_amount: string;
  staked_at: string;
  maturity_date: string;
  days_until_maturity: number;
  is_matured: boolean;
  transaction_hash: string;
  status: string;
};
type WithdrawHistory = {
  id: number;
  usdt_amount: string;
  fely_amount: string;
  withdrawal_date: string;
  status: { code: number; text: string };
  created_at: string;
  transaction_hash: string;
};
type BonusHistory = {
  id: number;
  bonus_level: number;
  bonus_percentage: string;
  bonus_amount: string;
  earned_at: string;
};

// ─────────────────────────────────────────────────────────────────────────────
//  DEEP LINKS
// ─────────────────────────────────────────────────────────────────────────────

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
    {
      name: "Binance Web3",
      icon: "https://bin.bnbstatic.com/static/images/common/favicon.ico",
      url: `https://app.binance.com/en/dapp/browser?url=${encoded}`,
    },
  ];
};

// ─────────────────────────────────────────────────────────────────────────────
//  WALLET ICONS MAP
// ─────────────────────────────────────────────────────────────────────────────

const WALLET_ICONS: Record<string, string> = {
  MetaMask:
    "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg",
  "Trust Wallet": "https://trustwallet.com/assets/images/favicon.png",
  "Coinbase Wallet": "https://www.coinbase.com/favicon.ico",
  "Binance Web3 Wallet":
    "https://bin.bnbstatic.com/static/images/common/favicon.ico",
  "Brave Wallet":
    "https://brave.com/static-assets/images/brave-logo-sans-text.svg",
};

// ─────────────────────────────────────────────────────────────────────────────
//  WALLET SELECTOR MODAL
// ─────────────────────────────────────────────────────────────────────────────

const WalletModal = ({
  wallets,
  onSelect,
  onClose,
  isMobile,
}: {
  wallets: EIP6963ProviderDetail[];
  onSelect: (provider: any, name: string) => void;
  onClose: () => void;
  isMobile: boolean;
}) => {
  const deepLinks = getMobileDeepLinks(isBrowser ? window.location.href : "");

  return (
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

        {wallets.length > 0 && (
          <div className="flex flex-col gap-3 mb-4">
            {wallets.map((w) => {
              const icon = w.info.icon || WALLET_ICONS[w.info.name] || "";
              return (
                <button
                  key={w.info.uuid}
                  onClick={() => onSelect(w.provider, w.info.name)}
                  className="flex items-center gap-3 bg-[#1c2230] hover:bg-[#2a333e] border border-[#2a333e] rounded-xl px-4 py-3 transition-colors text-left"
                >
                  {icon && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={icon}
                      alt={w.info.name}
                      className="w-8 h-8 rounded-full object-contain bg-white p-0.5"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  )}
                  <span className="text-white text-sm font-medium">
                    {w.info.name}
                  </span>
                  <span className="ml-auto text-xs text-green-400">
                    Detected
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {isMobile && (
          <>
            {wallets.length > 0 && (
              <p className="text-gray-500 text-xs mb-3 text-center">
                — or open in wallet app —
              </p>
            )}
            <div className="flex flex-col gap-3">
              {deepLinks.map((dl) => (
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
                    className="w-8 h-8 rounded-full object-contain bg-white p-0.5"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <span className="text-white text-sm font-medium">
                    {dl.name}
                  </span>
                  <span className="ml-auto text-xs text-primary-500">
                    Open App →
                  </span>
                </a>
              ))}
            </div>
          </>
        )}

        {wallets.length === 0 && !isMobile && (
          <p className="text-gray-400 text-sm text-center py-4">
            No wallet detected. Install MetaMask, Trust Wallet, Coinbase Wallet,
            or Binance Web3 Wallet extension.
          </p>
        )}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
//  REUSABLE PLAN SELECT
// ─────────────────────────────────────────────────────────────────────────────

const PlanSelect = ({
  value,
  onChange,
  label,
}: {
  value: string;
  onChange: (v: string) => void;
  label?: string;
}) => (
  <div className="flex flex-col space-y-2 w-full md:w-auto">
    {label && <label className="text-xs text-gray-300 ml-1">{label}</label>}
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 appearance-none min-w-[160px] w-full pr-10"
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
);

const CopyIcon = () => (
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
);
const CheckIcon = () => (
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
);

// ─────────────────────────────────────────────────────────────────────────────
//  MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

const StakeFelySection = () => {
  const searchParams = useSearchParams();
  const refCode = searchParams.get("ref");

  const [referalCode, setReferalCode] = useState<string | null>(null);
  const [stakeUsdtAmount, setStakeUsdtAmount] = useState("");
  const [stakeIdForInterst, setStakeIdForInterst] = useState("");
  const [stakeIdForWithdraw, setStakeIdForWithdraw] = useState("");
  const [StakePlan, setStakePlan] = useState("");
  const [loockUpStakePlan, setLoockUpStakePlan] = useState("");
  const [ClameInterstPlan, SetClameInterstPlan] = useState("");
  const [WithDrwaCapitalPlan, SetWithdrawCapitalPlan] = useState("");

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
  const [copiedHash, setCopiedHash] = useState<string | null>(null);
  const [copiedHashWith, setCopiedHashhis] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  const [bareToken, setBareToken] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [withdrawableFely, setWithdrawableFely] = useState("");
  const [withdrawableUsdt, setWithdrawableUsdt] = useState("");
  const [withdrawableFelyFix, setwithdrawableFelyFix] = useState("");
  const [balanceErr, setBalanceErr] = useState("");
  const [usdtBalance, setUsdtBalance] = useState("");
  const [PolyBalance, setPolyBalance] = useState("");

  const [detectedWallets, setDetectedWallets] = useState<
    EIP6963ProviderDetail[]
  >([]);
  const [showWalletModal, setShowWalletModal] = useState(false);

  const [stakeData, setStakeData] = useState<StakeRow[]>([]);
  const [withdrawData, setWithdrawData] = useState<WithdrawHistory[]>([]);
  const [bonusData, setBonusData] = useState<BonusHistory[]>([]);

  const activeProviderRef = useRef<any>(null);
  const isConnectingRef = useRef(false);

  const POLYGON_CHAIN_ID = "0x89";
  const planNames: Record<number, string> = {
    3: "Dolphin",
    6: "Shark",
    12: "Whale",
  };
  const shortenHash = (v: any) =>
    v ? `${String(v).slice(0, 6)}...${String(v).slice(-4)}` : "—";

  // ── EIP-6963 + legacy wallet scan ─────────────────────────────────────────
  useEffect(() => {
    setIsMobile(detectMobile());
    setLockUpState("No active stakes found");

    const walletMap = new Map<string, EIP6963ProviderDetail>();

    const upsert = (p: any, key: string, name: string, icon = "") => {
      if (!p || walletMap.has(key)) return;
      walletMap.set(key, {
        info: { uuid: key, name, icon, rdns: key },
        provider: p,
      });
      setDetectedWallets(Array.from(walletMap.values()));
    };

    const handleAnnounce = (e: any) => {
      walletMap.set(e.detail.info.uuid, e.detail);
      setDetectedWallets(Array.from(walletMap.values()));
    };
    window.addEventListener("eip6963:announceProvider", handleAnnounce);
    window.dispatchEvent(new Event("eip6963:requestProvider"));

    const scan = () => {
      const { metamask, trust, coinbase, binance, ethereum } =
        getWalletProviders();
      if (trust)
        upsert(
          trust,
          "trustwallet",
          "Trust Wallet",
          WALLET_ICONS["Trust Wallet"],
        );
      if (coinbase)
        upsert(
          coinbase,
          "coinbase",
          "Coinbase Wallet",
          WALLET_ICONS["Coinbase Wallet"],
        );
      if (binance)
        upsert(
          binance,
          "binance",
          "Binance Web3 Wallet",
          WALLET_ICONS["Binance Web3 Wallet"],
        );
      if (metamask)
        upsert(metamask, "metamask", "MetaMask", WALLET_ICONS["MetaMask"]);
      if (ethereum && !metamask && !trust && !coinbase && !binance)
        upsert(ethereum, "ethereum", "Browser Wallet", "");
    };

    scan();
    const scanTimers = [100, 300, 600, 1200, 2000, 3000, 4000].map((d) =>
      setTimeout(scan, d),
    );

    const silentReconnect = async () => {
      if (isConnectingRef.current) return;
      const eth = await waitForEthereum(4000);
      if (!eth) return;
      try {
        const accounts: string[] = await eth.request({
          method: "eth_accounts",
        });
        if (accounts?.length > 0) {
          activeProviderRef.current = eth;
          setWalletAddress(accounts[0]);
          await regProgress(eth, accounts[0]);
          attachListeners(eth);
        }
      } catch (_) {}
    };
    const reconnectTimer = setTimeout(silentReconnect, 1500);

    return () => {
      window.removeEventListener("eip6963:announceProvider", handleAnnounce);
      [...scanTimers, reconnectTimer].forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const attachListeners = (provider: any) => {
    provider.removeListener?.("chainChanged", onChainChanged);
    provider.removeListener?.("accountsChanged", onAccountsChanged);
    provider.on?.("chainChanged", onChainChanged);
    provider.on?.("accountsChanged", onAccountsChanged);
  };
  const onChainChanged = () => {
    if (isBrowser) window.location.reload();
  };
  const onAccountsChanged = (accs: string[]) => {
    if (accs.length > 0) setWalletAddress(accs[0]);
    else {
      setIsConnected(false);
      setWalletAddress(null);
      activeProviderRef.current = null;
    }
  };

  // ── Network ───────────────────────────────────────────────────────────────
  const checkAndSwitchNetwork = async (provider: any) => {
    try {
      const chainId = await provider.request({ method: "eth_chainId" });
      if (chainId === POLYGON_CHAIN_ID || parseInt(chainId, 16) === 137) return;
      setTransactionStatus("Switching to Polygon…");
      try {
        await provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: POLYGON_CHAIN_ID }],
        });
        setTransactionStatus("Switched to Polygon");
        setTimeout(() => setTransactionStatus(null), 2000);
        return;
      } catch (sw: any) {
        if (sw.code === 4902 || sw.code === -32603 || !sw.code) {
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: POLYGON_CHAIN_ID,
                chainName: "Polygon Mainnet",
                nativeCurrency: { name: "POL", symbol: "POL", decimals: 18 },
                rpcUrls: [
                  "https://polygon-bor-rpc.publicnode.com",
                  "https://1rpc.io/matic",
                ],
                blockExplorerUrls: ["https://polygonscan.com/"],
              },
            ],
          });
          setTransactionStatus("Polygon network added");
          setTimeout(() => setTransactionStatus(null), 2000);
          return;
        }
        if (sw.code === 4001) throw new Error("User rejected network switch");
        const nowId = await provider
          .request({ method: "eth_chainId" })
          .catch(() => null);
        if (nowId === POLYGON_CHAIN_ID || parseInt(nowId, 16) === 137) return;
      }
    } catch (e: any) {
      if (e.message?.includes("rejected")) throw e;
      console.warn("Network switch warning:", e.message);
    }
  };

  // ── Core connect ──────────────────────────────────────────────────────────
  const doConnect = async (provider: any) => {
    try {
      setTransactionStatus("Connecting…");
      const isTrust = detectTrustWallet(provider);
      const isBinanceW = detectBinance(provider);
      const maxAttempts = isTrust || isBinanceW ? 5 : 3;
      const retryDelay = isTrust || isBinanceW ? 1200 : 700;

      let accounts: string[] = [];
      for (let attempt = 0; attempt < maxAttempts; attempt++) {
        try {
          accounts = await Promise.race([
            provider.request({ method: "eth_requestAccounts", params: [] }),
            new Promise<never>((_, reject) =>
              setTimeout(
                () => reject(new Error("Request timeout")),
                isTrust || isBinanceW ? 15000 : 10000,
              ),
            ),
          ]);
          if (accounts?.length > 0) break;
        } catch (e: any) {
          if (e.code === 4001) throw new Error("User rejected connection");
          if (attempt < maxAttempts - 1) {
            setTransactionStatus(`Retrying… (${attempt + 2}/${maxAttempts})`);
            await new Promise((r) => setTimeout(r, retryDelay));
          } else throw e;
        }
        if (!accounts?.length && attempt < maxAttempts - 1)
          await new Promise((r) => setTimeout(r, retryDelay));
      }

      if (!accounts?.length)
        throw new Error("No accounts returned — please approve in your wallet");

      activeProviderRef.current = provider;
      setWalletAddress(accounts[0]);
      await checkAndSwitchNetwork(provider);
      await regProgress(provider, accounts[0]);
      attachListeners(provider);
    } catch (e: any) {
      console.error("Connect error:", e);
      setTransactionStatus(e?.message || "Failed to connect");
      setTimeout(() => setTransactionStatus(null), 5000);
    }
  };

  const connectWallet = async () => {
    if (isConnecting || isConnected) return;
    setIsConnecting(true);
    isConnectingRef.current = true;
    try {
      const inApp = detectInAppBrowser();

      if (inApp.isInApp || isMobile) {
        setTransactionStatus("Connecting…");
        if (detectedWallets.length === 1) {
          await doConnect(detectedWallets[0].provider);
          return;
        }
        if (detectedWallets.length > 1) {
          setShowWalletModal(true);
          return;
        }
        const { trust, binance, ethereum } = getWalletProviders();
        const direct = trust ?? binance ?? ethereum;
        if (direct) {
          await doConnect(direct);
          return;
        }
        setTransactionStatus("Waiting for wallet…");
        const injected = await waitForEthereum(6000);
        if (injected) {
          await doConnect(injected);
          return;
        }
        setShowWalletModal(true);
        return;
      }

      // Desktop
      setTransactionStatus("Detecting wallet…");
      const freshWallets = await new Promise<EIP6963ProviderDetail[]>(
        (resolve) => {
          const found = new Map<string, EIP6963ProviderDetail>(
            detectedWallets.map((w) => [w.info.uuid, w]),
          );
          const h = (e: any) => found.set(e.detail.info.uuid, e.detail);
          window.addEventListener("eip6963:announceProvider", h);
          window.dispatchEvent(new Event("eip6963:requestProvider"));
          setTimeout(() => {
            window.removeEventListener("eip6963:announceProvider", h);
            resolve(Array.from(found.values()));
          }, 600);
        },
      );

      const legacyMap = new Map(freshWallets.map((w) => [w.info.uuid, w]));
      detectedWallets.forEach((w) => {
        if (!legacyMap.has(w.info.uuid)) legacyMap.set(w.info.uuid, w);
      });
      const allWallets = Array.from(legacyMap.values());

      setTransactionStatus(null);
      if (allWallets.length === 1) {
        await doConnect(allWallets[0].provider);
        return;
      }
      if (allWallets.length > 1) {
        setDetectedWallets(allWallets);
        setShowWalletModal(true);
        return;
      }
      const { ethereum } = getWalletProviders();
      if (ethereum) {
        await doConnect(ethereum);
        return;
      }
      setShowWalletModal(true);
    } finally {
      setIsConnecting(false);
      isConnectingRef.current = false;
    }
  };

  const handleWalletSelect = async (provider: any, _name: string) => {
    setShowWalletModal(false);
    await doConnect(provider);
  };

  // ── Auth ──────────────────────────────────────────────────────────────────
  const getNonce = async (wallet: string) => {
    try {
      return await serverPostRequest({ wallet_address: wallet }, "/auth/nonce");
    } catch (e) {
      console.error("getNonce failed:", e);
      return null;
    }
  };

  const regProgress = async (provider: any, walletAddr: string) => {
    try {
      const nonce = await getNonce(walletAddr);
      if (nonce?.success) {
        const message = `Sign this message to authenticate with your wallet:  ${nonce.data.nonce}`;
        const signature = await signMessageWithProvider(
          provider,
          walletAddr,
          message,
        );
        const loginData = await serverPostRequest(
          {
            wallet_address: walletAddr,
            signature,
            nonce: nonce.data.nonce,
            message,
          },
          "/auth/login",
        );
        if (loginData?.success)
          finalizeConnection(
            walletAddr,
            loginData.data.token,
            loginData.data.referral?.url ?? null,
            provider,
          );
      } else {
        const tim = new Date().toISOString();
        const message = `Sign this message to authenticate with your wallet. Wallet: ${walletAddr}. Timestamp: ${tim}`;
        const signature = await signMessageWithProvider(
          provider,
          walletAddr,
          message,
        );
        const regData = await serverPostRequest(
          {
            wallet_address: walletAddr,
            signature,
            message,
            timestamp: tim,
            referral_code: refCode ?? null,
            network: "polygon",
          },
          "/auth/register",
        );
        if (regData?.success)
          finalizeConnection(
            walletAddr,
            regData.data.token,
            regData.data.referral?.url ?? null,
            provider,
          );
        else {
          setIsConnected(false);
          setTransactionStatus("Registration failed");
        }
      }
    } catch (e: any) {
      console.error("Auth error:", e);
      setTransactionStatus(
        e.code === 4001
          ? "Signature rejected"
          : "Authentication failed: " + (e.message || ""),
      );
      setTimeout(() => setTransactionStatus(null), 4000);
    }
  };

  const finalizeConnection = (
    address: string,
    token: string,
    referral: string | null,
    provider: any,
  ) => {
    setIsConnected(true);
    setWalletAddress(address);
    setTransactionStatus("connected");
    setBareToken(token);
    setReferalCode(referral);
    getUsdtBalance(address, provider);
    getPolyBalance(address, provider);
    getmyStaking(token);
    UserWithdrawalsHistory(token);
    getWithdrwalBalance(token);
    getReferalBonus(token);
  };

  // ── Balances ──────────────────────────────────────────────────────────────
  const getBestRaw = () =>
    activeProviderRef.current ??
    (isBrowser
      ? ((window as any).trustwallet?.ethereum ??
        (window as any).trustwallet ??
        (window as any).BinanceChain ??
        (window as any).ethereum)
      : null);

  const getUsdtBalance = async (address: string, injectedProvider?: any) => {
    const wp = injectedProvider ?? getBestRaw();
    for (let i = 0; i < 3; i++) {
      try {
        const p =
          i === 0
            ? await getReadProvider(wp)
            : (() => {
                clearProviderCache();
                return getCachedPublicProvider();
              })();
        const raw = await new ethers.Contract(
          USDT_CONTRACT_ADDRESS,
          USDT_ABI,
          p,
        ).balanceOf(address);
        setUsdtBalance(parseFloat(ethers.formatUnits(raw, 6)).toFixed(2));
        return;
      } catch (_) {
        if (i === 2) setUsdtBalance("—");
        else await new Promise((r) => setTimeout(r, (i + 1) * 1200));
      }
    }
  };

  const getPolyBalance = async (address: string, injectedProvider?: any) => {
    const wp = injectedProvider ?? getBestRaw();
    for (let i = 0; i < 3; i++) {
      try {
        const p =
          i === 0
            ? await getReadProvider(wp)
            : (() => {
                clearProviderCache();
                return getCachedPublicProvider();
              })();
        const raw = await p.getBalance(address);
        setPolyBalance(parseFloat(ethers.formatUnits(raw, 18)).toFixed(4));
        return;
      } catch (_) {
        if (i === 2) setPolyBalance("—");
        else await new Promise((r) => setTimeout(r, (i + 1) * 1200));
      }
    }
  };

  // ── Contract helpers ──────────────────────────────────────────────────────
  const returnContract = async (plan: number): Promise<ethers.Contract> => {
    const signer = await new ethers.BrowserProvider(getBestRaw()).getSigner();
    const abi =
      plan === 100
        ? USDT_ABI
        : plan === 5
          ? STAKE5DAYS_ABI
          : plan === 3
            ? STAKE3MONTH_ABI
            : plan === 6
              ? STAKE6MONTH_ABI
              : STAKE12MONTH_ABI;
    const address =
      plan === 100
        ? USDT_CONTRACT_ADDRESS
        : plan === 5
          ? STAKE5DAYS_CONTRACT
          : plan === 3
            ? STAKE3MONTH_CONTRACT
            : plan === 6
              ? STAKE6MONTH_CONTRACT
              : STAKE12MONTH_CONTRACT;
    return new ethers.Contract(address, abi, signer);
  };

  const returnReadContract = async (plan: number): Promise<ethers.Contract> => {
    const p = await getReadProvider(getBestRaw());
    const map: Record<number, [string, any]> = {
      5: [STAKE5DAYS_CONTRACT, STAKE5DAYS_ABI],
      3: [STAKE3MONTH_CONTRACT, STAKE3MONTH_ABI],
      6: [STAKE6MONTH_CONTRACT, STAKE6MONTH_ABI],
      12: [STAKE12MONTH_CONTRACT, STAKE12MONTH_ABI],
    };
    const [addr, abi] = map[plan] ?? map[12];
    return new ethers.Contract(addr, abi, p);
  };

  const waitForTx = async (
    txHash: string,
    timeoutMs = 120_000,
  ): Promise<ethers.TransactionReceipt> => {
    const p = await getReadProvider(getBestRaw());
    const start = Date.now();
    while (Date.now() - start < timeoutMs) {
      const receipt = await p.getTransactionReceipt(txHash).catch(() => null);
      if (receipt) return receipt;
      await new Promise((r) => setTimeout(r, 2500));
    }
    throw new Error("Transaction not confirmed within timeout");
  };

  // ── API data ──────────────────────────────────────────────────────────────
  const getmyStaking = async (t: string) => {
    try {
      const d = await serverGetWithBareGet("", "/staking/my-stakings", t);
      setStakeData(d.data.stakings);
    } catch (e) {
      console.error(e);
    }
  };
  const UserWithdrawalsHistory = async (t: string) => {
    try {
      const d = await serverGetWithBareGet(
        "",
        "/withdrawal/history?limit=50",
        t,
      );
      setWithdrawData(d.data.withdrawals);
    } catch (e) {
      console.error(e);
    }
  };
  const getReferalBonus = async (t: string) => {
    try {
      const d = await serverGetWithBareGet("", "/staking/my-bonus-history", t);
      setBonusData(
        d.data.bonuses.map((item: any) => ({
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
  const getWithdrwalBalance = async (t: string) => {
    try {
      const d = await serverGetWithBareGet("", "/withdrawal/balance", t);
      if (d.success) {
        setwithdrawableFelyFix(d.data.fely_balance);
        setWithdrawableFely(d.data.fely_balance);
        setWithdrawableUsdt(d.data.usdt_equivalent);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // ── Actions ───────────────────────────────────────────────────────────────
  const lockupStakes = async () => {
    setLockUpState("Searching…");
    if (!yourWalletAddress) {
      setLockUpState("No wallet address provided");
      return;
    }
    if (!loockUpStakePlan) {
      setLockUpState("No Plan Selected");
      return;
    }
    try {
      const contract = await returnReadContract(parseInt(loockUpStakePlan));
      const stakeIds = await contract.getStakeIdsByAccount(yourWalletAddress);
      if (!stakeIds?.length) {
        setLockUpState("No stake IDs found");
        return;
      }
      setLockUpState(stakeIds.map((id: bigint) => id.toString()).join(", "));
    } catch (_) {
      setLockUpState("No active stakes found");
    }
  };

  const stakePlan = async () => {
    if (!StakePlan) {
      setStakeState("Select a staking plan");
      return;
    }
    if (!stakeUsdtAmount) {
      setStakeState("Enter USDT amount");
      return;
    }
    setIsProcessing(true);
    setStakeState("Approving transaction…");
    try {
      const usdtContract = await returnContract(100);
      const amountInWei = ethers.parseUnits(stakeUsdtAmount, 6);
      const recipient = "0xB9191FF35722dc165C13ECd9B280808B0b59e749";
      const txn = await usdtContract.transfer(recipient, amountInWei);
      setStakeState("Waiting for confirmation…");
      const receipt = await waitForTx(txn.hash);
      if (receipt.status === 1) {
        setStakeState("Transaction successful!");
        await createstakePlan(receipt.hash);
      } else setStakeState("Transaction failed!");
    } catch (e: any) {
      if (e.code === 4001 || e.message?.includes("rejected"))
        setStakeState("Rejected by user");
      else if (e.code === -32603) setStakeState("Insufficient balance");
      else setStakeState("Failed: " + (e.message ?? "unknown error"));
    } finally {
      setIsProcessing(false);
      setStakePlan("");
      setStakeUsdtAmount("");
    }
  };

  const createstakePlan = async (hash: string) => {
    try {
      const d = await serverGetWithBarePost(
        {
          month: StakePlan,
          usdt_amount: stakeUsdtAmount,
          transaction_hash: hash,
          wallet_address: yourWalletAddress,
        },
        "/staking/create",
        bareToken,
      );
      setStakeState(d.message);
      await getmyStaking(bareToken);
    } catch (e) {
      console.error(e);
    }
  };

  const claimInterest = async () => {
    if (!yourWalletAddress) {
      setClameUpState("No wallet connected");
      return;
    }
    if (!ClameInterstPlan) {
      setClameUpState("Select a plan");
      return;
    }
    if (!stakeIdForInterst) {
      setClameUpState("Enter Stake ID");
      return;
    }
    setClameUpState("Preparing…");
    try {
      const contract = await returnContract(parseInt(ClameInterstPlan));
      setClameUpState("Confirm in wallet…");
      const tx = await contract.claimInterest(stakeIdForInterst);
      setClameUpState("Waiting for confirmation…");
      await waitForTx(tx.hash);
      setClameUpState("Interest claimed successfully!");
    } catch (e: any) {
      setClameUpState(
        e.code === 4001 ? "Rejected by user" : "Transaction failed",
      );
    }
  };

  const withdrawCapital = async () => {
    if (!yourWalletAddress) {
      setWithdrawState("No wallet connected");
      return;
    }
    if (!WithDrwaCapitalPlan) {
      setWithdrawState("Select a plan");
      return;
    }
    if (!stakeIdForWithdraw) {
      setWithdrawState("Enter Stake ID");
      return;
    }
    setWithdrawState("Preparing…");
    try {
      const contract = await returnContract(parseInt(WithDrwaCapitalPlan));
      setWithdrawState("Confirm in wallet…");
      const tx = await contract.withdrawCapital(stakeIdForWithdraw);
      setWithdrawState("Waiting for confirmation…");
      await waitForTx(tx.hash);
      setWithdrawState("Capital withdrawn successfully!");
    } catch (e: any) {
      setWithdrawState(
        e.code === 4001 ? "Rejected by user" : "Transaction failed",
      );
      setTimeout(() => setWithdrawState(null), 4000);
    }
  };

  const createWithdrawalRequest = async (token: string, amount: string) => {
    if (!amount || parseFloat(amount) === 0) {
      setBalanceErr("Amount must be greater than 0");
      return;
    }
    setBalanceErr("");
    try {
      const provider = activeProviderRef.current;
      if (!provider || !yourWalletAddress) {
        setBalanceErr("Wallet not connected");
        return;
      }
      const nonceResp = await getNonce(yourWalletAddress);
      if (!nonceResp?.success) {
        setBalanceErr("Could not get withdrawal nonce");
        return;
      }
      const message = `Withdrawal request: ${amount} FELY. Nonce: ${nonceResp.data.nonce}`;
      const freshSignature = await signMessageWithProvider(
        provider,
        yourWalletAddress,
        message,
      );
      const result = await serverGetWithBarePost(
        {
          fely_amount: amount,
          signature: freshSignature,
          nonce: nonceResp.data.nonce,
          message,
          timestamp: Date.now().toString(),
        },
        "/withdrawal/request",
        token,
      );
      if (!result.success) setBalanceErr(result.message);
      await UserWithdrawalsHistory(token);
    } catch (e: any) {
      setBalanceErr(e?.message || "Withdrawal request failed");
    }
    await getWithdrwalBalance(token);
  };

  // ─── Contract address card (DRY) ─────────────────────────────────────────
  const ContractCard = ({
    name,
    period,
    rates,
    address,
    scanUrl,
    cardKey,
    delay,
  }: {
    name: string;
    period: string;
    rates: [string, string][];
    address: string;
    scanUrl: string;
    cardKey: string;
    delay: number;
  }) => (
    <RevealAnimation delay={delay}>
      <div className="bg-secondary dark:bg-background-8 rounded-[24px] p-6 border border-stroke-2 dark:border-stroke-6 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:border-primary-500/50 hover:shadow-[0_0_20px_rgba(228,145,39,0.1)]">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-primary-500 font-medium text-sm mb-6">
          Staking Period {period}
        </p>
        <div className="flex-grow space-y-4 mb-6 text-sm">
          <div className="flex justify-between border-b border-[#2a333e] pb-2 text-gray-400 font-medium">
            <span>Staked Amount</span>
            <span>Interest Rate</span>
          </div>
          {rates.map(([range, rate]) => (
            <div key={range} className="flex justify-between text-white">
              <span>{range}</span>
              <span className="text-ns-yellow font-bold">{rate}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto pt-5 border-t border-[#2a333e] space-y-3">
          <p className="text-[11px] text-gray-400 leading-relaxed">
            Monitor Your Stake on Polygon Chain –<br />
            <a
              href={scanUrl}
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
                value={address}
                className="w-full bg-[#13171E] border border-[#2a333e] rounded-lg px-3 py-2 text-xs text-gray-300 focus:outline-none"
              />
              <button
                className="bg-primary-500 text-white p-2 rounded-lg hover:bg-primary-600 transition-colors flex-shrink-0"
                onClick={() => {
                  copyToClipboard(address);
                  setCopiedContract(cardKey);
                  setTimeout(() => setCopiedContract(null), 3000);
                }}
              >
                {copiedContract === cardKey ? <CheckIcon /> : <CopyIcon />}
              </button>
            </div>
            {copiedContract === cardKey && (
              <span className="text-xs text-primary-500 mt-1">
                Copied {name} Contract!
              </span>
            )}
          </div>
        </div>
      </div>
    </RevealAnimation>
  );

  // ─────────────────────────────────────────────────────────────────────────
  //  RENDER
  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="space-y-10">
      {showWalletModal && (
        <WalletModal
          wallets={detectedWallets}
          onSelect={handleWalletSelect}
          onClose={() => setShowWalletModal(false)}
          isMobile={isMobile}
        />
      )}

      {/* Header */}
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
                  type="text"
                  readOnly
                  value={referalCode || ""}
                  className="w-full bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-primary-500"
                />
                <button
                  className="bg-secondary border border-stroke-2 p-3 rounded-xl hover:bg-[#2a333e] transition-colors flex-shrink-0"
                  title="Copy referral link"
                  onClick={() => {
                    copyToClipboard(referalCode || "");
                    const msg = document.getElementById("copy-msg");
                    if (msg) {
                      msg.style.display = "block";
                      setTimeout(() => {
                        msg.style.display = "none";
                      }, 2000);
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
          can access it.
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

      {/* Plan cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-10 w-full px-4 md:px-0">
        <ContractCard
          name="Dolphin"
          period="3 Months"
          cardKey="dolphin"
          delay={0.2}
          rates={[
            ["0 - 1000 USDT", "2.5%"],
            ["1001 - 5000 USDT", "3%"],
            ["5001 - 10000 USDT", "4%"],
          ]}
          address="0x66BAf11521Ee8B3eF84bd459F7062916b6218D68"
          scanUrl="https://polygonscan.com/address/0x66BAf11521Ee8B3eF84bd459F7062916b6218D68"
        />
        <ContractCard
          name="Shark"
          period="6 Months"
          cardKey="shark"
          delay={0.3}
          rates={[
            ["0 - 1000 USDT", "6%"],
            ["1001 - 5000 USDT", "7%"],
            ["5001 - 10000 USDT", "9%"],
          ]}
          address="0xe4410D26224d4728846722309fF386495Cc1E490"
          scanUrl="https://polygonscan.com/address/0xe4410D26224d4728846722309fF386495Cc1E490"
        />
        <ContractCard
          name="Whale"
          period="12 Months"
          cardKey="whale"
          delay={0.4}
          rates={[
            ["0 - 1000 USDT", "12.5%"],
            ["1001 - 5000 USDT", "15%"],
            ["5001 - 10000 USDT", "20%"],
          ]}
          address="0x5eff66487f9d33465baf1ebd4cfa991f0b8cd963"
          scanUrl="https://polygonscan.com/address/0x5eff66487f9d33465baf1ebd4cfa991f0b8cd963"
        />
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT — Connect + Stake */}
        <div className="space-y-8">
          <RevealAnimation delay={0.3}>
            <div className="bg-secondary dark:bg-background-8 rounded-[30px] p-6 border border-stroke-2 dark:border-stroke-6 overflow-hidden relative h-full">
              <div className="relative z-10 space-y-6">
                <h3 className="text-xl font-bold text-white">
                  Connect Your Wallet &amp; Stake
                </h3>

                <div className="bg-[#13171E] rounded-xl p-4 border border-[#2a333e] space-y-3">
                  <h4 className="text-white text-sm font-medium">
                    Use Polygon Network – keep Polygon USDT and a little POL for
                    gas.
                  </h4>
                  <button
                    className="btn btn-primary btn-sm w-auto px-6 disabled:opacity-60 disabled:cursor-not-allowed"
                    onClick={connectWallet}
                    disabled={isConnecting || isConnected}
                  >
                    {isConnecting
                      ? "Connecting…"
                      : isConnected
                        ? "Connected ✓"
                        : "CONNECT WALLET"}
                  </button>
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
                        <p className="text-xs text-primary-500 font-medium font-mono break-all">
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
                      {transactionStatus &&
                        transactionStatus !== "connected" && (
                          <div>
                            <p className="text-xs text-gray-500">Status:</p>
                            <p className="text-xs text-primary-500 font-medium font-mono">
                              {transactionStatus}
                            </p>
                          </div>
                        )}
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
                          min="0"
                          placeholder="Enter amount"
                          className="w-full bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 placeholder:text-sm"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs">
                          USDT
                        </span>
                      </div>
                    </div>
                    <PlanSelect
                      value={StakePlan}
                      onChange={setStakePlan}
                      label="Plan"
                    />
                    {stakeState && (
                      <p className="text-primary-500 text-xs">{stakeState}</p>
                    )}
                    <button
                      onClick={stakePlan}
                      disabled={isProcessing}
                      className="btn btn-primary btn-lg w-full shadow-lg shadow-primary-500/20 mt-2 disabled:opacity-60"
                    >
                      {isProcessing ? "Processing…" : "STAKE"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </RevealAnimation>
        </div>

        {/* RIGHT — Actions */}
        {isConnected ? (
          <div className="space-y-8">
            {/* Search Stake ID */}
            <RevealAnimation delay={0.3}>
              <div className="bg-secondary dark:bg-background-8 rounded-[30px] p-6 border border-stroke-2 dark:border-stroke-6">
                <h3 className="text-xl font-bold text-white mb-6">
                  Search Your Stake ID
                </h3>
                <div className="flex flex-col md:flex-row gap-3 md:items-end">
                  <PlanSelect
                    value={loockUpStakePlan}
                    onChange={setLoockUpStakePlan}
                    label="Plan"
                  />
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
                <p className="text-gray-400 text-sm mt-4 pl-1">
                  Results:{" "}
                  <span className="text-primary-500 italic ml-2">
                    {lockUpState}
                  </span>
                </p>
              </div>
            </RevealAnimation>

            {/* Claim Interest */}
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
                      className="w-full bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 placeholder:text-sm"
                    />
                  </div>
                  <PlanSelect
                    value={ClameInterstPlan}
                    onChange={SetClameInterstPlan}
                    label="Plan"
                  />
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
                {ClameUpState && (
                  <p className="text-primary-500 text-xs mt-2">
                    {ClameUpState}
                  </p>
                )}
              </div>
            </RevealAnimation>

            {/* Withdraw Capital */}
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
                      className="w-full bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 placeholder:text-sm"
                    />
                  </div>
                  <PlanSelect
                    value={WithDrwaCapitalPlan}
                    onChange={SetWithdrawCapitalPlan}
                    label="Plan"
                  />
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
                {WithdrawState && (
                  <p className="text-primary-500 text-xs mt-2">
                    {WithdrawState}
                  </p>
                )}
              </div>
            </RevealAnimation>
          </div>
        ) : (
          <div />
        )}
      </div>

      {/* Data tables */}
      {isConnected && (
        <RevealAnimation delay={0.6}>
          <div className="space-y-8">
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
                          ? format(new Date(row.staked_at), "dd/MM/yyyy")
                          : "-"}
                      </td>
                      <td className="p-4 text-gray-300">
                        {row.maturity_date
                          ? format(new Date(row.maturity_date), "dd/MM/yyyy")
                          : "-"}
                      </td>
                      <td className="p-4 text-gray-300">
                        <div className="flex items-center gap-2">
                          <span className="font-mono">
                            {shortenHash(row.transaction_hash)}
                          </span>
                          {row.transaction_hash && (
                            <button
                              onClick={() => {
                                copyToClipboard(row.transaction_hash);
                                setCopiedHash(row.transaction_hash);
                                setTimeout(() => setCopiedHash(null), 2000);
                              }}
                              className="text-gray-500 hover:text-primary-500 transition-colors"
                            >
                              {copiedHash === row.transaction_hash ? (
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
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  />
                                </svg>
                              )}
                            </button>
                          )}
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
            <div className="bg-secondary dark:bg-background-8 rounded-[30px] p-6 border border-stroke-2 dark:border-stroke-6 overflow-x-auto">
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
                        {row.earned_at
                          ? format(new Date(row.earned_at), "dd/MM/yyyy")
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

            {/* FELY Withdrawal */}
            <div className="bg-secondary dark:bg-background-8 rounded-[30px] p-6 border border-stroke-2 dark:border-stroke-6">
              <div className="flex flex-col gap-4 mb-6">
                <h3 className="text-xl font-bold text-white">
                  Total Bonus Balance{" "}
                  {parseFloat(withdrawableFelyFix || "0").toFixed(2)} FELY (
                  {parseFloat(withdrawableUsdt || "0").toFixed(2)} USDT)
                  {balanceErr && (
                    <span className="text-red-400 text-sm ml-2">
                      {balanceErr}
                    </span>
                  )}
                </h3>
                <div className="flex flex-col sm:flex-row items-start gap-3">
                  <div className="relative">
                    <input
                      type="number"
                      min="0"
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

              <div className="overflow-x-auto border-t border-[#2a333e] pt-6">
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
                    {withdrawData.map((row) => (
                      <tr
                        key={row.id}
                        className="border-b border-[#2a333e] last:border-0 hover:bg-[#13171E]/50 transition-colors"
                      >
                        <td className="p-4 text-white text-sm">
                          {row.created_at
                            ? format(new Date(row.created_at), "dd/MM/yyyy")
                            : "-"}
                        </td>
                        <td className="p-4 text-white text-sm">
                          {parseFloat(row.usdt_amount).toFixed(2)}
                        </td>
                        <td className="p-4 text-white text-sm">
                          {parseFloat(row.fely_amount).toFixed(2)}
                        </td>
                        <td className="p-4 text-white text-sm">
                          <div className="flex items-center gap-2">
                            <span className="font-mono">
                              {shortenHash(row.transaction_hash)}
                            </span>
                            {row.transaction_hash && (
                              <button
                                onClick={() => {
                                  copyToClipboard(row.transaction_hash);
                                  setCopiedHashhis(row.transaction_hash);
                                  setTimeout(
                                    () => setCopiedHashhis(null),
                                    2000,
                                  );
                                }}
                                className="text-gray-500 hover:text-primary-500 transition-colors"
                              >
                                {copiedHashWith === row.transaction_hash ? (
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
                                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                    />
                                  </svg>
                                )}
                              </button>
                            )}
                          </div>
                        </td>
                        <td className="p-4 text-white text-sm">
                          <span className="inline-block px-2 py-1 bg-primary-500/20 text-primary-500 text-xs rounded-md">
                            {row.status.text}
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
      )}

      {/* Processing spinner */}
      {isProcessing && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-[#13171E] border border-[#2a333e] rounded-2xl p-8 max-w-sm w-full mx-4 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-primary-500/10 blur-3xl rounded-full" />
            <div className="relative mb-6">
              <div className="w-16 h-16 border-4 border-[#2a333e] border-t-primary-500 rounded-full animate-spin" />
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

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  REQUIRED — Create this exact file:
  Path: app/api/rpc/route.ts
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

import { NextRequest, NextResponse } from "next/server";

const RPC_URLS = [
  "https://polygon-bor-rpc.publicnode.com",
  "https://1rpc.io/matic",
  "https://polygon.meowrpc.com",
  "https://polygon.drpc.org",
];

export async function POST(req: NextRequest) {
  const body = await req.text();
  for (const url of RPC_URLS) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) continue;
      const data = await res.json();
      return NextResponse.json(data);
    } catch (_) { continue; }
  }
  return NextResponse.json({ error: "All RPC endpoints failed" }, { status: 502 });
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/
