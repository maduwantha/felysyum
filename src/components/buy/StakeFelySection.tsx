"use client";
import RevealAnimation from "../animation/RevealAnimation";
import arrowUpRight from "@public/images/icons/arrow-up-right.svg"; // Assuming this exists, else will just use text or generic icon
import Image from "next/image";
import { format } from "date-fns";
import { serverPostRequest } from "@/app/serverServices/serverCalls";
import { serverGetWithBareGet } from "@/app/serverServices/serverCalls";
import { serverGetWithBarePost } from "@/app/serverServices/serverCalls";

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

import { USDT_CONTRACT_ADDRESS, USDT_ABI } from "@/app/contracts/usdtContract";

import { ethers } from "ethers";
import { log } from "console";
import { Cossette_Texte } from "next/font/google";
import { useSearchParams } from "next/navigation";

const StakeFelySection = () => {
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref"); // get param for new user
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

  type WithdrawHistory = {
    id: number;
    usdt_amount: string;
    fely_amount: string;
    withdrawal_date: string;
    status: {
      code: number;
      text: string;
    };
    created_at: string;
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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        ),
      );
    };
    console.log("ref" + ref);
    checkMobile();
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

        setTransactionStatus("connected");
        regProgress();
      } else {
        // Not connected
        setIsConnected(false);
        console.log("Not connected");
      }
    } catch (error) {
      console.error("Error checking wallet connection:", error);
    }
  };

  const regProgress = async () => {
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
      setUsedSignature(signature);

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
      setBareToken(loginReturnData.data.token);
      getmyStaking(loginReturnData.data.token);
      setReferalCode(loginReturnData.data.referral.url);
      UserWithdrawalsHistory(loginReturnData.data.token);
      getWithdrwalBalance(loginReturnData.data.token);
      getReferalBonus(loginReturnData.data.token);
    } else {
      const tim = new Date().toISOString();
      const message = `Sign this message to authenticate with your wallet. Wallet: ${accounts[0]}. Timestamp: ${tim}`;
      // Request signature
      const signature = await (window as any).ethereum.request({
        method: "personal_sign",
        params: [message, accounts[0]], // message first, then address
      });
      setUsedSignature(signature);

      console.log(ref);
      const regdata = {
        wallet_address: accounts[0],
        signature: signature,
        message: message,
        timestamp: tim,
        referral_code: ref || null,
      };
      const regResoince = await serverPostRequest(regdata, "/auth/register");
      console.log(regResoince);
      if (regResoince.success) {
        console.log("OK Registerd");
        setIsConnected(true);
        setTransactionStatus("connected");
        setBareToken(regResoince.data.token);
        setReferalCode(regResoince.data.referral.url);
        UserWithdrawalsHistory(regResoince.data.token);
        getWithdrwalBalance(regResoince.data.token);
        getReferalBonus(regResoince.data.token);
      } else {
        console.log("NOT Registerd");
        setIsConnected(false);
      }
    }
  };

  const connectWallet = async () => {
    // Mobile detection and deep linking
    if (isMobile && !(window as any).ethereum) {
      const dappUrl = window.location.href.replace(/^https?:\/\//, "");
      const metamaskDeepLink = `https://metamask.app.link/dapp/${dappUrl}`;

      setTransactionStatus("Opening MetaMask app...");
      window.open(metamaskDeepLink, "_blank");
      return;
    }

    try {
      if ((window as any).ethereum) {
        setTransactionStatus("Connecting Wallect");
        // First, check and switch to Polygon network
        await checkAndSwitchNetwork();
        regProgress();
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
      const MyStakingData = await serverGetWithBareGet(
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

    if (plan == 100) {
      return new ethers.Contract(USDT_CONTRACT_ADDRESS, USDT_ABI, signer);
    }

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
      setStakeState("Enter USDT Amount for Stake");
      return;
    }

    try {
      // Get USDT contract instance
      const usdtContract = await returnContract(parseInt("100")); // Make sure this returns USDT contract

      // Convert USDT amount to proper format (USDT has 6 decimals on Polygon)
      const amountInWei = ethers.parseUnits(stakeUsdtAmount, 6);
      // Recipient address (make sure this is checksummed)
      const recipient = "0xB9191FF35722dc165C13ECd9B280808B0b59e749";

      setStakeState("Approving transaction...");

      // Call transfer function (correct capitalization)
      const txn = await usdtContract.transfer(recipient, amountInWei);

      setStakeState("Transaction submitted. Waiting for confirmation...");
      console.log("Transaction hash:", txn.hash);

      // Wait for transaction to be mined
      const receipt = await txn.wait();

      console.log("Transaction confirmed:", receipt);
      setStakeState("Transaction successful!");

      // ✅ DO MORE ACTIONS AFTER TRANSACTION COMPLETES
      if (receipt.status === 1) {
        console.log("Additional actions completed");
        createstakePlan(receipt.hash);
      } else {
        setStakeState("Transaction failed!");
      }
    } catch (error: any) {
      console.error("Error:", error);

      // Handle specific errors
      if (error.code === 4001) {
        setStakeState("Transaction rejected by user");
      } else if (error.code === -32603) {
        setStakeState("Insufficient balance or allowance");
      } else {
        setStakeState("Transaction failed: " + error.message);
      }
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

      console.log(obj);
      console.log(bareToken);

      const returndata = await serverGetWithBarePost(
        obj,
        "/staking/create",
        bareToken,
      );

      setStakeState(returndata.message);
      await getmyStaking(bareToken);

      console.log(returndata);
    } catch (error) {
      console.log(error);
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

  const UserWithdrawalsHistory = async (Bearer: any) => {
    try {
      const userWithdrawHistry = await serverGetWithBareGet(
        "",
        "/withdrawal/history?limit=50",
        Bearer,
      );
      console.log(userWithdrawHistry);
      setWithdrawData(userWithdrawHistry.data.withdrawals);
    } catch (error) {
      console.error("Error connecting wallet:", error);
      setTransactionStatus("Failed to connect wallet");
      setTimeout(() => setTransactionStatus(null), 3000);
    }
  };

  const getReferalBonus = async (Bearer: any) => {
    try {
      const ReferalBonus = await serverGetWithBareGet(
        "",
        "/staking/my-bonus-history", //?bonus_level=1&staking_month=12
        Bearer,
      );
      console.log(ReferalBonus);

      const bonuses = ReferalBonus.data.bonuses.map((item: any) => ({
        id: item.id,
        bonus_level: item.bonus_level,
        bonus_percentage: item.bonus_percentage,
        bonus_amount: item.bonus_amount,
        earned_at: item.earned_at,
      }));

      setBonusData(bonuses);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const getWithdrwalBalance = async (Bearer: any) => {
    try {
      const getWithdrwalBalance = await serverGetWithBareGet(
        "",
        "/withdrawal/balance",
        Bearer,
      );
      console.log(getWithdrwalBalance);
      if (getWithdrwalBalance.success) {
        setwithdrawableFelyFix(getWithdrwalBalance.data.fely_balance);
        setWithdrawableFely(getWithdrwalBalance.data.fely_balance);
        setWithdrawableUsdt(getWithdrwalBalance.data.usdt_equivalent);
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const createWithdrawalRequest = async (Bearer: any, amount: any) => {
    try {
      const obj = {
        fely_amount: amount,
        signature: usedSignature,
        timestamp: Date.now().toString(),
      };
      const getWithdrwalBalance = await serverGetWithBarePost(
        obj,
        "/withdrawal/request",
        Bearer,
      );
      UserWithdrawalsHistory(Bearer);
      console.log(getWithdrwalBalance);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
    getWithdrwalBalance(Bearer);
  };

  return (
    <div className="space-y-10">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <RevealAnimation delay={0.2}>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-accent/80 text-base md:text-lg max-w-3xl mx-auto">
              Maximize your holdings by staking FELY. Earn rewards while
              contributing to the ecosystem stability.
            </p>

            <div className="flex flex-col items-center gap-4 w-full max-w-md mt-2">
              {/* <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-full font-medium text-sm md:text-base transition-colors shadow-[0_0_15px_rgba(228,145,39,0.2)]">
                Create Referral Link
              </button> */}

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
                    const inputElement = document.getElementById(
                      "static-referral-input",
                    ) as HTMLInputElement;
                    if (inputElement) {
                      navigator.clipboard.writeText(inputElement.value);
                      const msgElement = document.getElementById("copy-msg");
                      if (msgElement) {
                        msgElement.style.display = "block";
                        setTimeout(() => {
                          msgElement.style.display = "none";
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
          <div>
            <div className="bg-secondary dark:bg-background-8 rounded-[30px] p-6 border border-stroke-2 dark:border-stroke-6 overflow-x-auto">
              <h3 className="text-xl font-bold text-white mb-4">My Stakes</h3>
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
                      Status
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
                          : "Pending"}
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

            <div className="bg-secondary dark:bg-background-8 rounded-[30px] p-6 border border-stroke-2 dark:border-stroke-6 overflow-x-auto">
              <h3 className="text-xl font-bold text-white mb-4">
                Referal Bonus
              </h3>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#2a333e]">
                    <th className="p-4 text-white font-semibold whitespace-nowrap">
                      Earned At
                    </th>
                    <th className="p-4 text-white font-semibold whitespace-nowrap">
                      Bonus Level
                    </th>
                    <th className="p-4 text-white font-semibold whitespace-nowrap">
                      Bonus Percentage
                    </th>
                    <th className="p-4 text-white font-semibold whitespace-nowrap">
                      Bonus Amount
                    </th>
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

            <div className="bg-secondary dark:bg-background-8 rounded-[30px] p-6 border border-stroke-2 dark:border-stroke-6 mt-8">
              <div className="flex flex-col gap-4 mb-6">
                <h3 className="text-xl font-bold text-white">
                  Total Bonus Balance{" "}
                  {parseFloat(withdrawableFelyFix).toFixed(2)} (
                  {parseFloat(withdrawableUsdt).toFixed(2)})
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
                    {/* <input
                      type="number"
                      value={parseFloat(withdrawableFely).toFixed(2) || ""}
                      placeholder="Amount to withdraw"
                      className="w-full sm:w-[250px] bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-primary-500 placeholder:text-sm"
                    /> */}
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
                      <th className="p-4 text-white font-semibold whitespace-nowrap">
                        Date
                      </th>
                      <th className="p-4 text-white font-semibold whitespace-nowrap">
                        USDT Amount
                      </th>
                      <th className="p-4 text-white font-semibold whitespace-nowrap">
                        FELY Amount
                      </th>
                      <th className="p-4 text-white font-semibold whitespace-nowrap">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {withdrawData.map((rows, i) => (
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
                          {rows.status.text}
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
        <div></div>
      )}
    </div>
  );
};

export default StakeFelySection;
