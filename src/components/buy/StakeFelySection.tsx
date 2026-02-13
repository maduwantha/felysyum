"use client";
import RevealAnimation from "../animation/RevealAnimation";
import arrowUpRight from "@public/images/icons/arrow-up-right.svg"; // Assuming this exists, else will just use text or generic icon
import Image from "next/image";
import { format } from "date-fns";
import { serverPostRequest } from "@/app/serverServices/serverCalls";
import { serverGetWithBare } from "@/app/serverServices/serverCalls";

import { useEffect, useRef, useState } from "react";
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

import { ethers } from "ethers";

const StakeFelySection = () => {
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

  const [StakePlan, setStakePlan] = useState("");
  const [loockUpStakePlan, setLoockUpStakePlan] = useState("");
  const [ClameInterstPlan, SetClameInterstPlan] = useState("");
  const [WithDrwaCapitalPlan, SetWithdrawCapitalPlan] = useState("");

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
    status: String;
  };
  const [stakeData, setStakeData] = useState<StakeRow[]>([]);

  // Mock Data for the Table
  // const stakeData = [
  //   {
  //     orderNo: "7399",
  //     capital: "2816.90",
  //     interest: "422.54",
  //     stakeId: "0",
  //     tx: "",
  //     status: "Locked",
  //     date: "2025-12-08",
  //   },
  //   {
  //     orderNo: "7429",
  //     capital: "2817.00",
  //     interest: "422.55",
  //     stakeId: "0",
  //     tx: "",
  //     status: "Locked",
  //     date: "2025-12-08",
  //   },
  //   {
  //     orderNo: "8080",
  //     capital: "68147.00",
  //     interest: "23851.45",
  //     stakeId: "279",
  //     tx: "0xbf81dccedb345a6d8217c4c03beee6480cd5a2fd8f501010fd6fa2f12a6db86f",
  //     status: "Locked",
  //     date: "2025-12-30",
  //   },
  // ];

  useEffect(() => {
    checkIfWalletIsConnected();
    setLockUpState(" No active stakes found");
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
        const nonce = await getNonce(accounts[0]);

        if (nonce.success) {
          // Create a message to sign
          const message = `Sign this message to authenticate with your wallet:  ${nonce.data.nonce}`;
          // Request signature
          const signature = await (window as any).ethereum.request({
            method: "personal_sign",
            params: [message, accounts[0]], // message first, then address
          });

          const loginRowData = {
            wallet_address: accounts[0],
            signature: signature,
            nonce: nonce.data.nonce,
          };
          console.log(loginRowData);
          const loginReturnData = await serverPostRequest(
            loginRowData,
            "/auth/login",
          );
          console.log("loginReturnData");
          console.log(loginReturnData);
          setIsConnected(true);
          setTransactionStatus("connected");
          getmyStaking(loginReturnData.data.token);
        } else {
          const tim = new Date().toISOString();
          const message = `Sign this message to authenticate with your wallet. Wallet: ${accounts[0]}. Timestamp: ${tim}`;
          // Request signature
          const signature = await (window as any).ethereum.request({
            method: "personal_sign",
            params: [message, accounts[0]], // message first, then address
          });

          const regdata = {
            wallet_address: accounts[0],
            sponsor_code: "LAUNCH2024",
            signature: signature,
            message: message,
            timestamp: tim,
          };
          const regResoince = await serverPostRequest(
            regdata,
            "/auth/register",
          );
          console.log(regResoince);
          if (regResoince.success) {
            console.log("OK Registerd");
            setIsConnected(true);
            setTransactionStatus("connected");
          } else {
            console.log("NOT Registerd");
          }
        }
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
      setTransactionStatus("Failed to connect wallet");
      setTimeout(() => setTransactionStatus(null), 3000);
    }
  };

  const getNonce = async (wallet: any) => {
    try {
      const obj = {
        wallet_address: wallet,
      };
      return await serverPostRequest(obj, "/auth/nonce");
    } catch (error) {
      console.error("Failed to get nonce:", error);
    }
  };

  const getmyStaking = async (Bearer: any) => {
    try {
      const MyStakingData = await serverGetWithBare(
        "",
        "/staking/my-stakings",
        Bearer,
      );
      console.log(MyStakingData);
      setStakeData(MyStakingData.data.stakings);
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
  ``;

  const lockupStakes = async () => {
    setLockUpState("Wait..");
    try {
      // Check if address is valid
      if (!yourWalletAddress) {
        setLockUpState("No wallet address provided");
        return;
      }
      console.log(loockUpStakePlan);
      if (!loockUpStakePlan) {
        alert("No Plan Selected");
        setLockUpState("No Plan Selected");
        return;
      }

      setLockUpState("Locking for Stake ID's");

      const contract: ethers.Contract = await returnContract(
        parseInt(loockUpStakePlan),
      );

      const stakeIds = await contract.getStakeIdsByAccount(yourWalletAddress);

      if (stakeIds == "" || stakeIds == null) {
        setLockUpState("Stake ID not found");
        return;
      }
      const formatted = stakeIds.map((id: bigint) => id.toString()).join(",");

      console.log(formatted);
      setLockUpState(formatted);
    } catch (error) {
      setLockUpState("No active stakes found");
      setTimeout(() => setTransactionStatus(null), 3000);
    }
  };

  // Add proper return type annotation
  const returnContract = async (plan: number): Promise<ethers.Contract> => {
    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const signer = await provider.getSigner();

    if (plan == 5) {
      return new ethers.Contract(STAKE5DAYS_CONTRACT, STAKE5DAYS_ABI, signer);
    } else if (plan == 3) {
      return new ethers.Contract(STAKE3MONTH_CONTRACT, STAKE3MONTH_ABI, signer);
    } else if (plan == 6) {
      return new ethers.Contract(STAKE6MONTH_CONTRACT, STAKE6MONTH_ABI, signer);
    } else {
      return new ethers.Contract(
        STAKE12MONTH_CONTRACT,
        STAKE12MONTH_ABI,
        signer,
      );
    }
  };

  const stakePlan = async () => {
    setStakeState("Wait....");
    if (!StakePlan) {
      setStakeState("select USDT Stake Plan");
      return;
    }

    if (!stakeUsdtAmount) {
      setStakeState("Enter USDT Amoutn for Stake");
      return;
    }
  };

  const claimInterest = async () => {
    setClameUpState("Wait....");
    if (!yourWalletAddress) {
      setClameUpState("No wallet address provided");
      return;
    }

    if (!ClameInterstPlan) {
      setClameUpState("No Plan Selected");
      alert("No Plan Selected");
      return;
    }

    if (!stakeIdForInterst) {
      setClameUpState("No Stake ID Inserted");
      alert("No Stake ID Inserted");
      return;
    }

    try {
      setClameUpState("Preparing transaction...");

      // Explicitly type the contract variable
      const contract: ethers.Contract = await returnContract(
        parseInt(ClameInterstPlan),
      );

      setClameUpState("Requesting signature...");
      const tx = await contract.claimInterest(stakeIdForInterst);

      setClameUpState("Transaction submitted. Waiting for confirmation...");
      const receipt = await tx.wait();

      setClameUpState("Success!");
      alert("Interest claimed successfully!");
      console.log("Transaction receipt:", receipt);
    } catch (error: any) {
      console.error("Error claiming interest:", error);
      setClameUpState("Transaction failed");
      //alert(error?.message || "Transaction failed");
    }
  };

  const withdrawCapital = async () => {
    setWithdrawState("Wait....");
    if (!yourWalletAddress) {
      setWithdrawState("No wallet address provided");
      return;
    }

    if (!WithDrwaCapitalPlan) {
      setWithdrawState("No Plan Selected");
      alert("No Plan Selected");
      return;
    }

    if (!stakeIdForWithdraw) {
      setWithdrawState("No Stake ID Inserted");
      alert("No Stake ID Inserted");
      return;
    }

    try {
      setWithdrawState("Preparing transaction...");

      // Add await and explicit type
      const contract: ethers.Contract = await returnContract(
        parseInt(WithDrwaCapitalPlan),
      );

      setWithdrawState("Requesting signature...");
      const tx = await contract.withdrawCapital(stakeIdForWithdraw);

      setWithdrawState("Transaction submitted. Waiting for confirmation...");
      const receipt = await tx.wait();

      setWithdrawState("Success!");
      alert("Capital withdrawn successfully!");
      console.log("Transaction receipt:", receipt);
    } catch (error: any) {
      console.error("Error withdrawing capital:", error);
      setWithdrawState("Transaction failed");
      //alert(error?.message || "Transaction failed");
      setTimeout(() => setWithdrawState(null), 3000);
    }
  };

  const setStakePlanWhenChange = async (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setStakePlan(e.target.value);
    console.log(e.target.value);
  };

  const setPlanWhenChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLoockUpStakePlan(e.target.value);
    console.log(e.target.value);
  };

  const setClamWhenChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    SetClameInterstPlan(e.target.value);
    console.log(e.target.value);
  };

  const setWithdrawWhenChange = async (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    SetWithdrawCapitalPlan(e.target.value);
    console.log(e.target.value);
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
                          className="w-full bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 appearance-none pr-10"
                          onChange={setStakePlanWhenChange}
                        >
                          <option value="" disabled selected>
                            Select Plan
                          </option>
                          <option value="5">5 Days - 1% APY</option>
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
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400"></div>
                        <div>{stakeState}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => stakePlan()}
                      className="btn btn-primary btn-lg w-full shadow-lg shadow-primary-500/20 mt-2"
                    >
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
                    {/* <div className="flex-1 flex flex-col space-y-2 w-full">
                      <label className="text-xs text-gray-300 ml-1">
                        Wallet Address
                      </label>
                      <input
                        type="text"
                        ref={walletAd}
                        placeholder="Enter Wallet Address"
                        className="w-full bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 min-w-0 placeholder:text-sm"
                      />
                    </div> */}
                    <div className="flex flex-col space-y-2 w-full md:w-auto">
                      <label className="text-xs text-gray-300 ml-1">Plan</label>
                      <div className="relative">
                        <select
                          onChange={setPlanWhenChange}
                          className="bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 appearance-none min-w-[120px] w-full pr-10"
                        >
                          <option value="" disabled selected>
                            Select Plan
                          </option>
                          <option value="5">5 Days - 1% APY</option>
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
                      <button
                        onClick={() => lockupStakes()}
                        className="btn btn-primary btn-sm whitespace-nowrap min-w-[100px] w-full md:w-auto px-6 h-[46px]"
                      >
                        SEARCH
                      </button>
                    </div>
                  </div>

                  <div className="pl-1">
                    <p className="text-gray-400 text-sm">
                      Results:{" "}
                      <span className="text-gray-500 italic ml-2">
                        {lockUpState}
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
                <h5>{ClameUpState}</h5>
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
                        onChange={setClamWhenChange}
                        className="bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 appearance-none min-w-[120px] w-full pr-10"
                      >
                        <option value="" disabled selected>
                          Select Plan
                        </option>
                        <option value="5">5 Days - 1% APY</option>
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
                    <button
                      onClick={claimInterest}
                      className="btn btn-primary btn-sm whitespace-nowrap min-w-[100px] w-full md:w-auto px-6 h-[46px]"
                    >
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
                <h5>{WithdrawState}</h5>
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
                        onChange={setWithdrawWhenChange}
                        className="bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 appearance-none min-w-[120px] w-full pr-10"
                      >
                        <option value="" disabled selected>
                          Select Plan
                        </option>
                        <option value="5">5 Days - 1% APY</option>
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
                    <button
                      onClick={withdrawCapital}
                      className="btn btn-secondary text-white border border-[#2a333e] hover:bg-[#2a333e] btn-sm whitespace-nowrap min-w-[100px] w-full md:w-auto px-6 h-[46px]"
                    >
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
                    Plan
                  </th>
                  <th className="p-4 text-white font-semibold whitespace-nowrap">
                    USDT
                  </th>
                  <th className="p-4 text-white font-semibold whitespace-nowrap">
                    Fely Amount
                  </th>
                  <th className="p-4 text-white font-semibold whitespace-nowrap">
                    Bonus %
                  </th>
                  <th className="p-4 text-white font-semibold whitespace-nowrap">
                    Bonus Fely
                  </th>
                  <th className="p-4 text-white font-semibold whitespace-nowrap">
                    Date
                  </th>
                  <th className="p-4 text-white font-semibold whitespace-nowrap">
                    End Date
                  </th>
                  <th className="p-4 text-white font-semibold whitespace-nowrap">
                    Stauts
                  </th>
                </tr>
              </thead>
              <tbody>
                {stakeData.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-[#2a333e] last:border-0 hover:bg-[#13171E]/50 transition-colors"
                  >
                    <td className="p-4 text-gray-300">{row.id}</td>
                    <td className="p-4 text-gray-300">{row.month}</td>
                    <td className="p-4 text-gray-300">{row.usdt_amount}</td>
                    <td className="p-4 text-gray-300">{row.fely_amount}</td>
                    <td className="p-4 text-gray-300">
                      {row.bonus_percentage}
                    </td>
                    <td className="p-4 text-gray-300">
                      {row.fely_bonus_amount}
                    </td>
                    <td className="p-4 text-gray-300">
                      {format(new Date(String(row.staked_at)), "dd/MM/yyyy")}
                    </td>
                    <td className="p-4 text-gray-300">
                      {format(
                        new Date(String(row.maturity_date)),
                        "dd/MM/yyyy",
                      )}
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
        </RevealAnimation>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default StakeFelySection;
