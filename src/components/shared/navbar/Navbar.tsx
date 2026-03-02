"use client";
import RevealAnimation from "@/components/animation/RevealAnimation";
import { MobileMenuProvider } from "@/context/MobileMenuContext";
import { mobileMenuData } from "@/data/navbar-data";
import { useNavbarScroll } from "@/hooks/useScrollHeader";
import { cn } from "@/utils/cn";
import logoDark from "@public/images/shared/logo-dark.svg";
import logo from "@public/images/shared/logo.svg";
import mainLogo from "@public/images/shared/felysyum-logo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileMenu from "../mobile-menu/MobileMenu";
import EngageMenu from "./EngageMenu";
import ExploreMenu from "./ExploreMenu";
import InsightsMenu from "./InsightsMenu";
import MobileMenuButton from "./MobileMenuButton";
import FelyMenu from "./FelyMenu";

const Navbar = () => {
  const { isScrolled } = useNavbarScroll(150);

  const [menuDropdownId, setMenuDropdownId] = useState<string | null>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [yourWalletAddress, setWalletAddress] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const POLYGON_CHAIN_ID = "0x89";

  const handleMenuHover = (dropdownId?: string | null) => {
    setMenuDropdownId(dropdownId || null);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        ),
      );
    };
    checkMobile();
    checkIfWalletIsConnected();
  }, []);

  const checkIfWalletIsConnected = async () => {
    try {
      // Check if MetaMask is installed
      if (!(window as any).ethereum) {
        console.log("MetaMask is not installed");
        return;
      }

      // Check network first
      await checkAndSwitchNetwork();

      // Check if already connected (no popup)
      const accounts = await (window as any).ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length > 0) {
        // Already connected!
        setIsConnected(true);
        setWalletAddress(accounts[0]);
      } else {
        // Not connected
        setIsConnected(false);
        console.log("Not connected");
      }
    } catch (error) {
      console.error("Error checking wallet connection:", error);
    }
  };

  // Check and switch to Polygon network
  const checkAndSwitchNetwork = async () => {
    try {
      const chainId = await (window as any).ethereum.request({
        method: "eth_chainId",
      });

      console.log("Current Chain ID:", chainId);

      if (chainId !== POLYGON_CHAIN_ID) {
        try {
          // Try to switch to Polygon
          await (window as any).ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: POLYGON_CHAIN_ID }],
          });
        } catch (switchError: any) {
          // If Polygon is not added, add it
          if (switchError.code === 4902) {
            await (window as any).ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: POLYGON_CHAIN_ID,
                  chainName: "Polygon Mainnet",
                  nativeCurrency: {
                    name: "POL",
                    symbol: "POL",
                    decimals: 18,
                  },
                  rpcUrls: ["https://polygon-rpc.com/"],
                  blockExplorerUrls: ["https://polygonscan.com/"],
                },
              ],
            });
          } else {
            throw switchError;
          }
        }
      }
    } catch (error) {
      console.error("Error switching network:", error);

      throw error;
    }
  };

  const connectWallet = async () => {
    // Mobile detection and deep linking
    if (isMobile && !(window as any).ethereum) {
      const dappUrl = window.location.href.replace(/^https?:\/\//, "");
      const metamaskDeepLink = `https://metamask.app.link/dapp/${dappUrl}`;

      window.open(metamaskDeepLink, "_blank");
      return;
    }

    try {
      if ((window as any).ethereum) {
        // First, check and switch to Polygon network
        await checkAndSwitchNetwork();
        const accounts = await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        setIsConnected(true);
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  // Listen for network changes
  useEffect(() => {
    if ((window as any).ethereum) {
      (window as any).ethereum.on("chainChanged", (chainId: string) => {
        console.log("Network changed to:", chainId);
        window.location.reload(); // Reload page on network change
      });

      (window as any).ethereum.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        } else {
          setIsConnected(false);
          setWalletAddress(null);
        }
      });
    }

    return () => {
      if ((window as any).ethereum) {
        (window as any).ethereum.removeAllListeners("chainChanged");
        (window as any).ethereum.removeAllListeners("accountsChanged");
      }
    };
  }, []);

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
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
              <div>
                <Link href="/">
                  <span className="sr-only">Home</span>
                  <figure className="hidden  lg:block lg:max-w-[220px]">
                    <Image
                      src={mainLogo}
                      alt="NextSaaS"
                      className="py-2 pl-5"
                      priority
                    />
                  </figure>
                  <figure className="block max-w-[120px] lg:hidden">
                    <Image
                      src={mainLogo}
                      alt="NextSaaS"
                      className="w-full"
                      priority
                    />
                  </figure>
                </Link>
              </div>
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
                  <li
                    onMouseEnter={() => handleMenuHover("fely-mega-menu")}
                    data-menu="fely-mega-menu"
                    className="group/nav-item relative cursor-pointer py-2.5"
                  >
                    <Link
                      href="#"
                      onClick={(event) => event.preventDefault()}
                      className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200"
                    >
                      <span>FELY</span>
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
                    </Link>
                    <FelyMenu
                      menuDropdownId={menuDropdownId}
                      setMenuDropdownId={setMenuDropdownId}
                    />
                  </li>
                  <li
                    onMouseEnter={() => handleMenuHover("explore-mega-menu")}
                    data-menu="explore-mega-menu"
                    className="group/nav-item relative cursor-pointer py-2.5"
                  >
                    <Link
                      href="#"
                      onClick={(event) => event.preventDefault()}
                      className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200"
                    >
                      <span>About</span>
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
                    </Link>
                    <ExploreMenu
                      menuDropdownId={menuDropdownId}
                      setMenuDropdownId={setMenuDropdownId}
                    />
                  </li>

                  <li
                    onMouseEnter={() => handleMenuHover("insights-mega-menu")}
                    data-menu="insights-mega-menu"
                    className="group/nav-item relative cursor-pointer py-2.5"
                  >
                    <Link
                      href="#"
                      onClick={(event) => event.preventDefault()}
                      className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200"
                    >
                      <span>Insight</span>
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
                    </Link>
                    <InsightsMenu
                      menuDropdownId={menuDropdownId}
                      setMenuDropdownId={setMenuDropdownId}
                    />
                  </li>
                  <li
                    onMouseEnter={() => handleMenuHover("engage-mega-menu")}
                    data-menu="engage-mega-menu"
                    className="group/nav-item relative cursor-pointer py-2.5"
                  >
                    <Link
                      href="#"
                      onClick={(event) => event.preventDefault()}
                      className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200"
                    >
                      <span>Products</span>
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
              <div className="hidden items-center justify-center xl:flex">
                <button
                  onClick={!isConnected ? connectWallet : undefined}
                  className="btn btn-md btn-primary hover:btn-white-dark dark:hover:btn-white flex flex-col items-center justify-center"
                >
                  {isConnected && yourWalletAddress ? (
                    <>
                      <span className="text-sm font-semibold">Connected</span>
                      <span className="text-xs opacity-80">
                        {shortenAddress(yourWalletAddress)}
                      </span>
                    </>
                  ) : (
                    <span>Connect</span>
                  )}
                </button>
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

Navbar.displayName = "Navbar";
export default Navbar;
