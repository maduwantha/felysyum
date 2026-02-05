"use client";
import { useEffect, useState } from "react";
import RevealAnimation from "../animation/RevealAnimation";
import Image from "next/image";
import LinkButton from "../ui/button/LinkButton";
import { FELY_CONTRACT_ADDRESS, FELY_ABI } from "@/app/contracts/felyContract";
import { USDT_CONTRACT_ADDRESS, USDT_ABI } from "@/app/contracts/usdtContract";
import { ICO_CONTRACT, ICO_ABI } from "@/app/contracts/icoContract";

import { ethers } from "ethers";

import { useRef } from "react";
import { parse } from "path";

const BuyFelySection = () => {
  const buyingFellyValue = useRef<HTMLInputElement>(null);
  const POLYGON_CHAIN_ID = "0x89"; // 137 in decimal (Polygon Mainnet)
  const [isConnected, setIsConnected] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [yourWalletAddress, setWalletAddress] = useState<string | null>(null);
  const [yourWalletBalance, setYourWalletBalance] = useState("0");
  const [yourUsdttBalance, setYourUsdttBalance] = useState("0");
  const [transactionStatus, setTransactionStatus] = useState<string | null>(
    null,
  );

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("0xEe997788f625809332BaABB3110BCf1BA7400824");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Check and switch to Polygon network
  const checkAndSwitchNetwork = async () => {
    try {
      const chainId = await (window as any).ethereum.request({
        method: "eth_chainId",
      });

      console.log("Current Chain ID:", chainId);

      if (chainId !== POLYGON_CHAIN_ID) {
        setTransactionStatus("Switching to Polygon network...");

        try {
          // Try to switch to Polygon
          await (window as any).ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: POLYGON_CHAIN_ID }],
          });
          setTransactionStatus("Network switched successfully");
          setTimeout(() => setTransactionStatus(null), 3000);
        } catch (switchError: any) {
          // If Polygon is not added, add it
          if (switchError.code === 4902) {
            setTransactionStatus("Adding Polygon network...");
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
            setTransactionStatus("Network added successfully");
            setTimeout(() => setTransactionStatus(null), 3000);
          } else {
            throw switchError;
          }
        }
      }
    } catch (error) {
      console.error("Error switching network:", error);
      setTransactionStatus("Failed to switch network");
      setTimeout(() => setTransactionStatus(null), 3000);
      throw error;
    }
  };

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
        setWalletAddress(accounts[0]);
        setIsConnected(true);
        console.log("Already connected:", accounts[0]);
        await getUsdtBalance(accounts[0]);
      } else {
        // Not connected
        setIsConnected(false);
        console.log("Not connected");
      }
    } catch (error) {
      console.error("Error checking wallet connection:", error);
    }
  };

  const connectWallet = async () => {
    try {
      if ((window as any).ethereum) {
        // First, check and switch to Polygon network
        await checkAndSwitchNetwork();

        // Then request accounts
        const accounts = await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });

        setWalletAddress(accounts[0]);
        setIsConnected(true);
        await getUsdtBalance(accounts[0]);
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
      setTransactionStatus("Failed to connect wallet");
      setTimeout(() => setTransactionStatus(null), 3000);
    }
  };

  //get usdt balance
  const getUsdtBalance = async (walletAddress?: string) => {
    try {
      // Check if address is valid
      if (!walletAddress) {
        console.log("No wallet address provided");
        return;
      }
      setTransactionStatus("Fetching USDT balance...");
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const contract = new ethers.Contract(
        USDT_CONTRACT_ADDRESS,
        USDT_ABI,
        provider,
      );

      const balance = await contract.balanceOf(walletAddress);
      const formattedBalance = ethers.formatUnits(balance, 18);

      console.log("Raw balance:", balance.toString());
      console.log("Formatted balance:", formattedBalance);

      setYourWalletBalance(formattedBalance);
      setTransactionStatus(null);
    } catch (error) {
      console.error("Error fetching balance:", error);
      setTransactionStatus("Failed to fetch balance");
      setTimeout(() => setTransactionStatus(null), 3000);
    }
  };

  //get fely balance
  const getFelyBalance = async (walletAddress?: string) => {
    try {
      // Check if address is valid
      if (!walletAddress) {
        console.log("No wallet address provided");
        return;
      }

      setTransactionStatus("Fetching balance...");

      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const contract = new ethers.Contract(
        FELY_CONTRACT_ADDRESS,
        FELY_ABI,
        provider,
      );

      const balance = await contract.balanceOf(walletAddress);
      const formattedBalance = ethers.formatUnits(balance, 18);

      console.log("Raw balance:", balance.toString());
      console.log("Formatted balance:", formattedBalance);

      setYourWalletBalance(formattedBalance);
      setTransactionStatus(null);
    } catch (error) {
      console.error("Error fetching balance:", error);
      setTransactionStatus("Failed to fetch balance");
      setTimeout(() => setTransactionStatus(null), 3000);
    }
  };

  // BUY FELLY TOKEN
  const buyFelyToken = async (walletAddress?: string) => {
    if (buyingFellyValue.current) {
      console.log(buyingFellyValue.current.value);
      setTransactionStatus("Buy In action");
      const felyValue = buyingFellyValue.current.value;
      if (!felyValue) {
        console.log("felly value canot be zero or null");
        setTransactionStatus("Felly Value canot bezero or null");
        return;
      }

      if (parseInt(felyValue) < 111) {
        console.log("Minimum Value is 111");
        setTransactionStatus("Felly Minimum Value is 111");
        return;
      }

      approveAndBuyTokens(felyValue);
    }
  };

  const approveAndBuyTokens = async (amount: string) => {
    const spenderAddress = "0x6350637c20C62bD62091c8e2e08C414A863f10A4";

    try {
      if (!yourWalletAddress) {
        setTransactionStatus("Please connect your wallet first");
        return;
      }

      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const signer = await provider.getSigner();

      // ============ STEP 1: APPROVE USDT ============
      setTransactionStatus("Step 1/2: Approving USDT...");

      const usdtContract = new ethers.Contract(
        USDT_CONTRACT_ADDRESS,
        USDT_ABI,
        signer,
      );

      const amountInWei = ethers.parseUnits(amount, 6);

      console.log("Step 1: Approving USDT");
      const approveTx = await usdtContract.approve(spenderAddress, amountInWei);

      setTransactionStatus("Step 1/2: Confirming approval...");
      await approveTx.wait();

      console.log("✅ Approval confirmed:", approveTx.hash);

      // ============ STEP 2: TRANSFER USDT & BUY FELY ============
      setTransactionStatus("Step 2/2: Buying FELY tokens...");

      const icoContract = new ethers.Contract(ICO_CONTRACT, ICO_ABI, signer);

      // Get gas price with buffer
      const feeData = await provider.getFeeData();
      const networkGasPrice = feeData.gasPrice;

      if (!networkGasPrice) {
        throw new Error("Unable to fetch gas price");
      }

      const gasPrice = (networkGasPrice * BigInt(110)) / BigInt(100);

      console.log("Step 2: Transferring USDT");
      const transferTx = await icoContract.transferUSDT(amountInWei, {
        gasLimit: 200000,
        gasPrice: gasPrice,
      });

      setTransactionStatus("Step 2/2: Confirming purchase...");
      const receipt = await transferTx.wait();

      console.log("✅ Purchase confirmed:", transferTx.hash);
      setTransactionStatus("FELY tokens purchased successfully! 🎉");

      // Refresh balances
      setTimeout(() => {
        getUsdtBalance();
        setTransactionStatus(null);
      }, 3000);

      return { approveTx, transferTx: receipt };
    } catch (error: any) {
      console.error("Error in approve and buy:", error);

      if (error.code === "ACTION_REJECTED") {
        setTransactionStatus("Transaction rejected by user");
      } else if (error.code === "INSUFFICIENT_FUNDS") {
        setTransactionStatus("Insufficient funds for gas");
      } else if (error.reason) {
        setTransactionStatus(`Failed: ${error.reason}`);
      } else {
        setTransactionStatus("Transaction failed. Please try again!");
      }

      setTimeout(() => setTransactionStatus(null), 5000);
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
          getFelyBalance(accounts[0]);
        } else {
          setIsConnected(false);
          setWalletAddress(null);
          setYourWalletBalance("0");
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

  return (
    <div className="space-y-10">
      {/* Header Section */}
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

      {/* Buy Card */}
      <RevealAnimation delay={0.3}>
        <div className="bg-secondary dark:bg-background-8 rounded-[30px] p-6 md:p-10 border border-stroke-2 dark:border-stroke-6 overflow-hidden relative">
          {/* Background Glow - mimicking the style from Marketplace */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary-500/10 blur-[100px] pointer-events-none rounded-full"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
            {/* Left Side: Text */}
            <div className="space-y-6 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Buy FELY now ! <br />
                This price is available for a{" "}
                <span className="text-primary-500">limited time.</span>
              </h3>
            </div>

            {/* Right Side: Wallet Action */}
            <div className="flex flex-col items-center lg:items-end space-y-4">
              <div className="bg-[#13171E] rounded-2xl p-6 w-full max-w-md border border-[#2a333e]">
                {/* Top Info Section - Always Visible */}
                <div className="space-y-4 mb-6 pb-6 border-b border-[#2a333e]">
                  <p className="text-xs text-center text-gray-400">
                    (Only MetaMask, Coinbase Wallet, and Trust Wallet are
                    supported)
                  </p>
                  <p className="text-xs text-center text-gray-500">
                    Note: Uses Polygon network — POL is required for gas.
                  </p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Minimum Purchase:</span>
                    <span className="text-white font-medium">111 USDT</span>
                  </div>
                </div>

                {!isConnected ? (
                  <button
                    onClick={() => connectWallet()}
                    className="btn btn-primary btn-xl w-full"
                  >
                    CONNECT YOUR WALLET
                  </button>
                ) : (
                  <div className="space-y-4">
                    {/* Connected Wallet Info */}
                    <div className="bg-black/20 rounded-xl p-3 border border-[#2a333e]">
                      <p className="text-[10px] text-gray-400 mb-1">
                        Your Wallet Address
                      </p>
                      <p className="text-xs text-primary-500 font-mono break-all">
                        {yourWalletAddress}
                      </p>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">
                        Your Wallet Balance :
                      </span>
                      <span className="text-white font-medium">
                        {yourUsdttBalance} USDT
                      </span>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs text-gray-300">
                        Enter USDT Amount
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          ref={buyingFellyValue}
                          placeholder="Enter amount"
                          className="w-full bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 placeholder:text-sm"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs">
                          USDT
                        </span>
                      </div>
                    </div>

                    <button
                      className="btn btn-primary btn-lg w-full"
                      onClick={() => buyFelyToken()}
                    >
                      BUY FELY TOKEN
                    </button>

                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">
                        Progressing Status :
                      </span>
                      <span className="text-yellow-500 font-medium">
                        {transactionStatus}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">Price :</span>
                      <span className="text-white font-medium">0.3600 USD</span>
                    </div>

                    <div className="pt-3 border-t border-[#2a333e]">
                      <p className="text-xs text-gray-400 mb-2">
                        Token Address :
                      </p>
                      <div className="flex gap-2 items-center">
                        <code className="text-[10px] text-gray-300 bg-black/40 px-2 py-1 rounded flex-1 truncate font-mono">
                          0xEe997788f625809332BaABB3110BCf1BA7400824
                        </code>
                        <button
                          onClick={handleCopy}
                          className="text-primary-500 text-xs hover:text-primary-400 flex items-center gap-1 transition-colors"
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
    </div>
  );
};

export default BuyFelySection;
