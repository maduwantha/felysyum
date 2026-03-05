"use client";
import RevealAnimation from "@/components/animation/RevealAnimation";
import { MobileMenuProvider } from "@/context/MobileMenuContext";
import { mobileMenuData } from "@/data/navbar-data";
import { useNavbarScroll } from "@/hooks/useScrollHeader";
import { cn } from "@/utils/cn";
import mainLogo from "@public/images/shared/felysyum-logo.png";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import MobileMenu from "../mobile-menu/MobileMenu";
import EngageMenu from "./EngageMenu";
import ExploreMenu from "./ExploreMenu";
import InsightsMenu from "./InsightsMenu";
import MobileMenuButton from "./MobileMenuButton";
import FelyMenu from "./FelyMenu";

const POLYGON_CHAIN_ID = "0x89";

// Detect mobile browser (not just user agent — also checks for no ethereum injected)
const isMobileBrowser = () => {
  if (typeof navigator === "undefined") return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
};

// Safe ethereum accessor — avoids SSR crashes
const getEthereum = () => {
  if (typeof window === "undefined") return null;
  return (window as any).ethereum ?? null;
};

const Navbar = () => {
  const { isScrolled } = useNavbarScroll(150);
  const [menuDropdownId, setMenuDropdownId] = useState<string | null>(null);
  const [yourWalletAddress, setWalletAddress] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleMenuHover = (dropdownId?: string | null) => {
    setMenuDropdownId(dropdownId || null);
  };

  const shortenAddress = (address: string) =>
    `${address.slice(0, 4)}...${address.slice(-4)}`;

  // Switch / add Polygon network
  const checkAndSwitchNetwork = useCallback(async () => {
    const eth = getEthereum();
    if (!eth) return;

    const chainId = await eth.request({ method: "eth_chainId" });
    if (chainId === POLYGON_CHAIN_ID) return;

    try {
      await eth.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: POLYGON_CHAIN_ID }],
      });
    } catch (switchError: any) {
      if (switchError.code === 4902) {
        await eth.request({
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
      } else {
        throw switchError;
      }
    }
  }, []);

  // On mount — silently check if already authorised (no popup)
  useEffect(() => {
    const checkExisting = async () => {
      const eth = getEthereum();
      if (!eth) return;

      try {
        const accounts: string[] = await eth.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setIsConnected(true);
          setWalletAddress(accounts[0]);
        }
      } catch {
        // ignore — user not connected yet
      }
    };

    checkExisting();
  }, []);

  // Listen for account / chain changes
  useEffect(() => {
    const eth = getEthereum();
    if (!eth) return;

    const onChainChanged = () => window.location.reload();

    const onAccountsChanged = (accounts: string[]) => {
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
        setIsConnected(true);
      } else {
        setIsConnected(false);
        setWalletAddress(null);
      }
    };

    eth.on("chainChanged", onChainChanged);
    eth.on("accountsChanged", onAccountsChanged);

    return () => {
      eth.removeListener("chainChanged", onChainChanged);
      eth.removeListener("accountsChanged", onAccountsChanged);
    };
  }, []);

  const connectWallet = async () => {
    const eth = getEthereum();

    // ── Mobile: no injected provider ──────────────────────────────────────
    if (isMobileBrowser() && !eth) {
      // Build a deep-link that opens MetaMask's in-app browser
      const dappUrl = encodeURIComponent(
        window.location.href.replace(/^https?:\/\//, ""),
      );
      // MetaMask universal link — works on both iOS and Android
      window.location.href = `https://metamask.app.link/dapp/${dappUrl}`;
      return;
    }

    // ── Desktop / MetaMask in-app browser ────────────────────────────────
    if (!eth) {
      // No wallet at all — send them to install MetaMask
      window.open("https://metamask.io/download/", "_blank");
      return;
    }

    try {
      setIsLoading(true);
      await checkAndSwitchNetwork();
      const accounts: string[] = await eth.request({
        method: "eth_requestAccounts",
      });
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
        setIsConnected(true);
      }
    } catch (error: any) {
      // 4001 = user rejected — silently ignore
      if (error?.code !== 4001) {
        console.error("Wallet connection error:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress(null);
  };

  return (
    <MobileMenuProvider>
      <header
        onMouseLeave={() => handleMenuHover(null)}
        className={cn(
          "lp:!max-w-[1290px] bg-background-2 dark:bg-background-6 fixed top-5 left-1/2 z-50 mx-auto w-full max-w-[350px] -translate-x-1/2 rounded-full transition-all duration-500 ease-in-out min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]",
          isScrolled && "top-2",
        )}
      >
        <RevealAnimation direction="up" offset={100} delay={0.1} instant>
          <div>
            <div className="bg-background-2 dark:bg-background-6 flex items-center justify-between rounded-full px-2.5 py-2.5 backdrop-blur-[25px] xl:py-0">
              {/* Logo */}
              <div>
                <Link href="/">
                  <span className="sr-only">Home</span>
                  <figure className="hidden lg:block lg:max-w-[220px]">
                    <Image
                      src={mainLogo}
                      alt="Felysium"
                      className="py-2 pl-5"
                      priority
                    />
                  </figure>
                  <figure className="block max-w-[120px] lg:hidden">
                    <Image
                      src={mainLogo}
                      alt="Felysium"
                      className="w-full"
                      priority
                    />
                  </figure>
                </Link>
              </div>

              {/* Desktop Nav */}
              <nav className="hidden items-center xl:flex">
                <ul className="flex items-center">
                  <li className="py-2.5">
                    <Link
                      href="/"
                      className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200"
                    >
                      Elysium
                    </Link>
                  </li>

                  {/* FELY */}
                  <li
                    onMouseEnter={() => handleMenuHover("fely-mega-menu")}
                    data-menu="fely-mega-menu"
                    className="group/nav-item relative cursor-pointer py-2.5"
                  >
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200"
                    >
                      <span>FELY</span>
                      <ChevronIcon />
                    </Link>
                    <FelyMenu
                      menuDropdownId={menuDropdownId}
                      setMenuDropdownId={setMenuDropdownId}
                    />
                  </li>

                  {/* About */}
                  <li
                    onMouseEnter={() => handleMenuHover("explore-mega-menu")}
                    data-menu="explore-mega-menu"
                    className="group/nav-item relative cursor-pointer py-2.5"
                  >
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200"
                    >
                      <span>About</span>
                      <ChevronIcon />
                    </Link>
                    <ExploreMenu
                      menuDropdownId={menuDropdownId}
                      setMenuDropdownId={setMenuDropdownId}
                    />
                  </li>

                  {/* Insight */}
                  <li
                    onMouseEnter={() => handleMenuHover("insights-mega-menu")}
                    data-menu="insights-mega-menu"
                    className="group/nav-item relative cursor-pointer py-2.5"
                  >
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200"
                    >
                      <span>Insight</span>
                      <ChevronIcon />
                    </Link>
                    <InsightsMenu
                      menuDropdownId={menuDropdownId}
                      setMenuDropdownId={setMenuDropdownId}
                    />
                  </li>

                  {/* Products */}
                  <li
                    onMouseEnter={() => handleMenuHover("engage-mega-menu")}
                    data-menu="engage-mega-menu"
                    className="group/nav-item relative cursor-pointer py-2.5"
                  >
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200"
                    >
                      <span>Products</span>
                      <ChevronIcon />
                    </Link>
                    <EngageMenu
                      menuDropdownId={menuDropdownId}
                      setMenuDropdownId={setMenuDropdownId}
                    />
                  </li>

                  <li className="py-2.5">
                    <Link
                      href="/announcement"
                      className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200"
                    >
                      Announcements
                    </Link>
                  </li>
                  <li className="py-2.5">
                    <Link
                      href="/contact-us"
                      className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Wallet Button */}
              <div className="hidden items-center justify-center xl:flex">
                {isConnected && yourWalletAddress ? (
                  <button
                    onClick={disconnectWallet}
                    title="Click to disconnect"
                    className="btn btn-md btn-primary hover:btn-white-dark dark:hover:btn-white flex flex-col items-center justify-center"
                  >
                    <span className="text-sm font-semibold">Connected</span>
                    <span className="text-xs opacity-80">
                      {shortenAddress(yourWalletAddress)}
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={connectWallet}
                    disabled={isLoading}
                    className="btn btn-md btn-primary hover:btn-white-dark dark:hover:btn-white flex items-center justify-center gap-1.5 disabled:opacity-60"
                  >
                    {isLoading ? (
                      <>
                        <span className="size-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        <span>Connecting…</span>
                      </>
                    ) : (
                      <span>Connect</span>
                    )}
                  </button>
                )}
              </div>

              <MobileMenuButton />
            </div>
          </div>
        </RevealAnimation>
      </header>
      <MobileMenu menuData={mobileMenuData} />
    </MobileMenuProvider>
  );
};

// Small reusable chevron to keep JSX tidy
const ChevronIcon = () => (
  <span className="block origin-center translate-y-px transition-all duration-300 group-hover/nav-item:rotate-180">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  </span>
);

Navbar.displayName = "Navbar";
export default Navbar;
