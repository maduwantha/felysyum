"use client";
import RevealAnimation from "../animation/RevealAnimation";
import arrowUpRight from "@public/images/icons/arrow-up-right.svg"; // Assuming this exists, else will just use text or generic icon
import Image from "next/image";

import { useEffect, useState } from "react";

const StakeFelySection = () => {
  const POLYGON_CHAIN_ID = "0x89";
  const [isConnected, setIsConnected] = useState(false);
  const [yourWalletAddress, setWalletAddress] = useState<string | null>(null);
  const [transactionStatus, setTransactionStatus] = useState<string | null>(
    null,
  );

  // Mock Data for the Table
  const stakeData = [
    {
      orderNo: "7399",
      capital: "2816.90",
      interest: "422.54",
      stakeId: "0",
      tx: "",
      status: "Locked",
      date: "2025-12-08",
    },
    {
      orderNo: "7429",
      capital: "2817.00",
      interest: "422.55",
      stakeId: "0",
      tx: "",
      status: "Locked",
      date: "2025-12-08",
    },
    {
      orderNo: "8080",
      capital: "68147.00",
      interest: "23851.45",
      stakeId: "279",
      tx: "0xbf81dccedb345a6d8217c4c03beee6480cd5a2fd8f501010fd6fa2f12a6db86f",
      status: "Locked",
      date: "2025-12-30",
    },
  ];

  useEffect(() => {
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
        setWalletAddress(accounts[0]);
        setIsConnected(true);
        setTransactionStatus("connected");
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
        setTransactionStatus("Connecting Wallect");
        // First, check and switch to Polygon network
        await checkAndSwitchNetwork();

        // Then request accounts
        const accounts = await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });

        setWalletAddress(accounts[0]);
        setIsConnected(true);
        setTransactionStatus("connected");
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
      setTransactionStatus("Failed to connect wallet");
      setTimeout(() => setTransactionStatus(null), 3000);
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

  return (
    <div className="space-y-10">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <RevealAnimation delay={0.2}>
          <p className="text-accent/80 text-base md:text-lg max-w-3xl mx-auto">
            Maximize your holdings by staking FELY. Earn rewards while
            contributing to the ecosystem stability.
          </p>
        </RevealAnimation>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT COLUMN: Main Staking Card */}
        <div className="space-y-8">
          {/* 1. Stake Card */}
          <RevealAnimation delay={0.3}>
            <div className="bg-secondary dark:bg-background-8 rounded-[30px] p-6 border border-stroke-2 dark:border-stroke-6 overflow-hidden relative h-full">
              <div className="relative z-10 space-y-6">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white mb-1">
                    Wallet Connection & Staking Actions
                  </h3>
                </div>

                {/* Connect Status */}

                <div className="bg-[#13171E] rounded-xl p-4 border border-[#2a333e] space-y-3">
                  <h4 className="text-white text-sm font-medium">
                    Connection Status
                  </h4>
                  <button
                    className="btn btn-primary btn-sm w-auto px-6"
                    onClick={() => connectWallet()}
                  >
                    CONNECT WALLET
                  </button>
                  {isConnected ? (
                    <div>
                      <div>
                        <p className="text-xs text-gray-500">Wallet Address:</p>
                        <p className="text-xs text-primary-500 font-medium font-mono">
                          {yourWalletAddress}
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
                  ) : (
                    <div></div>
                  )}
                </div>

                {/* Stake Form */}
                {isConnected ? (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs text-gray-300">
                        USDT Amount
                      </label>
                      <div className="relative">
                        <input
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
                        <select className="w-full bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 appearance-none pr-10">
                          <option value="3">3 Months - 2.5% APY</option>
                          <option value="6">6 Months - 8% APY</option>
                          <option value="12">12 Months - 12.5% APY</option>
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
                    <button className="btn btn-primary btn-lg w-full shadow-lg shadow-primary-500/20 mt-2">
                      STAKE
                    </button>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </RevealAnimation>
        </div>

        {/* RIGHT COLUMN: Lookups & Secondary Actions */}
        {isConnected ? (
          <div className="space-y-8">
            {/* 2. Lookup Stake IDs */}
            <RevealAnimation delay={0.3}>
              <div className="bg-secondary dark:bg-background-8 rounded-[30px] p-6 border border-stroke-2 dark:border-stroke-6">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white">
                    Lookup Stake IDs
                  </h3>
                  <div className="flex flex-col md:flex-row gap-3 md:items-end">
                    <div className="flex-1 flex flex-col space-y-2 w-full">
                      <label className="text-xs text-gray-300 ml-1">Wallet Address</label>
                      <input
                        type="text"
                        placeholder="Enter Wallet Address"
                        className="w-full bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 min-w-0 placeholder:text-sm"
                      />
                    </div>
                    <div className="flex flex-col space-y-2 w-full md:w-auto">
                      <label className="text-xs text-gray-300 ml-1">Plan</label>
                      <div className="relative">
                        <select className="bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 appearance-none min-w-[120px] w-full pr-10">
                          <option value="" disabled selected>
                            Select Plan
                          </option>
                          <option value="3">Silver (3 Months)</option>
                          <option value="6">Gold (6 Months)</option>
                          <option value="12">Platinum (12 Months)</option>
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
                      <button className="btn btn-primary btn-sm whitespace-nowrap min-w-[100px] w-full md:w-auto px-6 h-[46px]">
                        SEARCH
                      </button>
                    </div>
                  </div>

                  <div className="pl-1">
                    <p className="text-gray-400 text-sm">
                      Results:{" "}
                      <span className="text-gray-500 italic ml-2">
                        No active stakes found
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </RevealAnimation>

            {/* 3. Claim Interest */}
            <RevealAnimation delay={0.4}>
              <div className="bg-secondary dark:bg-background-8 rounded-[30px] p-6 border border-stroke-2 dark:border-stroke-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  % Claim Interest
                </h3>
                <div className="flex flex-col md:flex-row gap-3 md:items-end">
                  <div className="flex-1 flex flex-col space-y-2 w-full">
                    <label className="text-xs text-gray-300 ml-1">Stake ID</label>
                    <input
                      type="text"
                      placeholder="Enter Stake ID"
                      className="w-full bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 min-w-0 placeholder:text-sm"
                    />
                  </div>
                  <div className="flex flex-col space-y-2 w-full md:w-auto">
                    <label className="text-xs text-gray-300 ml-1">Plan</label>
                    <div className="relative">
                      <select className="bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 appearance-none min-w-[120px] w-full pr-10">
                        <option value="" disabled selected>
                          Select Plan
                        </option>
                        <option value="3">Silver (3 Months)</option>
                        <option value="6">Gold (6 Months)</option>
                        <option value="12">Platinum (12 Months)</option>
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
                    <button className="btn btn-primary btn-sm whitespace-nowrap min-w-[100px] w-full md:w-auto px-6 h-[46px]">
                      CLAIM
                    </button>
                  </div>
                </div>
              </div>
            </RevealAnimation>

            {/* 4. Withdraw Capital */}
            <RevealAnimation delay={0.5}>
              <div className="bg-secondary dark:bg-background-8 rounded-[30px] p-6 border border-stroke-2 dark:border-stroke-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  ⎋ Withdraw Capital
                </h3>
                <div className="flex flex-col md:flex-row gap-3 md:items-end">
                  <div className="flex-1 flex flex-col space-y-2 w-full">
                    <label className="text-xs text-gray-300 ml-1">Stake ID</label>
                    <input
                      type="text"
                      placeholder="Enter Stake ID"
                      className="w-full bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 min-w-0 placeholder:text-sm"
                    />
                  </div>
                  <div className="flex flex-col space-y-2 w-full md:w-auto">
                    <label className="text-xs text-gray-300 ml-1">Plan</label>
                    <div className="relative">
                      <select className="bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 appearance-none min-w-[120px] w-full pr-10">
                        <option value="" disabled selected>
                          Select Plan
                        </option>
                        <option value="3">Silver (3 Months)</option>
                        <option value="6">Gold (6 Months)</option>
                        <option value="12">Platinum (12 Months)</option>
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
                    <button className="btn btn-secondary text-white border border-[#2a333e] hover:bg-[#2a333e] btn-sm whitespace-nowrap min-w-[100px] w-full md:w-auto px-6 h-[46px]">
                      WITHDRAW
                    </button>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      {/* 5. Data Table (Full Width) */}
      {isConnected ? (
        <RevealAnimation delay={0.6}>
          <div className="bg-secondary dark:bg-background-8 rounded-[30px] p-6 border border-stroke-2 dark:border-stroke-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#2a333e]">
                  <th className="p-4 text-white font-semibold whitespace-nowrap">
                    Order No
                  </th>
                  <th className="p-4 text-white font-semibold whitespace-nowrap">
                    Capital
                  </th>
                  <th className="p-4 text-white font-semibold whitespace-nowrap">
                    Interest
                  </th>
                  <th className="p-4 text-white font-semibold whitespace-nowrap">
                    Stake ID
                  </th>
                  <th className="p-4 text-white font-semibold whitespace-nowrap">
                    Transaction #
                  </th>
                  <th className="p-4 text-white font-semibold whitespace-nowrap">
                    Status
                  </th>
                  <th className="p-4 text-white font-semibold whitespace-nowrap">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {stakeData.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-[#2a333e] last:border-0 hover:bg-[#13171E]/50 transition-colors"
                  >
                    <td className="p-4 text-gray-300">{row.orderNo}</td>
                    <td className="p-4 text-gray-300">{row.capital}</td>
                    <td className="p-4 text-gray-300">{row.interest}</td>
                    <td className="p-4 text-gray-300">{row.stakeId}</td>
                    <td
                      className="p-4 text-gray-300 truncate max-w-[200px]"
                      title={row.tx}
                    >
                      {row.tx || "-"}
                    </td>
                    <td className="p-4">
                      <span className="inline-block px-2 py-1 bg-primary-500/20 text-primary-500 text-xs rounded-md">
                        {row.status}
                      </span>
                    </td>
                    <td className="p-4 text-gray-300">{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </RevealAnimation>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default StakeFelySection;
