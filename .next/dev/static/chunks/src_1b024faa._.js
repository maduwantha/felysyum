(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/contracts/usdtContract.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "USDT_ABI",
    ()=>USDT_ABI,
    "USDT_CONTRACT_ADDRESS",
    ()=>USDT_CONTRACT_ADDRESS
]);
const USDT_CONTRACT_ADDRESS = "0xc2132D05D31c914a87C6611C10748AEb04B58e8F";
const USDT_ABI = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }
        ],
        name: "Approval",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "userAddress",
                type: "address"
            },
            {
                indexed: false,
                internalType: "address payable",
                name: "relayerAddress",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "functionSignature",
                type: "bytes"
            }
        ],
        name: "MetaTransactionExecuted",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "previousAdminRole",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "newAdminRole",
                type: "bytes32"
            }
        ],
        name: "RoleAdminChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address"
            }
        ],
        name: "RoleGranted",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address"
            }
        ],
        name: "RoleRevoked",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }
        ],
        name: "Transfer",
        type: "event"
    },
    {
        inputs: [],
        name: "CHILD_CHAIN_ID",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "CHILD_CHAIN_ID_BYTES",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "DEFAULT_ADMIN_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "DEPOSITOR_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "ERC712_VERSION",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "ROOT_CHAIN_ID",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "ROOT_CHAIN_ID_BYTES",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "address",
                name: "spender",
                type: "address"
            }
        ],
        name: "allowance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "name_",
                type: "string"
            }
        ],
        name: "changeName",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256"
            }
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "depositData",
                type: "bytes"
            }
        ],
        name: "deposit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "userAddress",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "functionSignature",
                type: "bytes"
            },
            {
                internalType: "bytes32",
                name: "sigR",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "sigS",
                type: "bytes32"
            },
            {
                internalType: "uint8",
                name: "sigV",
                type: "uint8"
            }
        ],
        name: "executeMetaTransaction",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            }
        ],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [],
        name: "getChainId",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [],
        name: "getDomainSeperator",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address"
            }
        ],
        name: "getNonce",
        outputs: [
            {
                internalType: "uint256",
                name: "nonce",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32"
            }
        ],
        name: "getRoleAdmin",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32"
            },
            {
                internalType: "uint256",
                name: "index",
                type: "uint256"
            }
        ],
        name: "getRoleMember",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32"
            }
        ],
        name: "getRoleMemberCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "grantRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "hasRole",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256"
            }
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "name_",
                type: "string"
            },
            {
                internalType: "string",
                name: "symbol_",
                type: "string"
            },
            {
                internalType: "uint8",
                name: "decimals_",
                type: "uint8"
            },
            {
                internalType: "address",
                name: "childChainManager",
                type: "address"
            }
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "renounceRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "revokeRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "recipient",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address"
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/contracts/icoContract.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ICO_ABI",
    ()=>ICO_ABI,
    "ICO_CONTRACT",
    ()=>ICO_CONTRACT
]);
const ICO_CONTRACT = "0x6350637c20C62bD62091c8e2e08C414A863f10A4";
const ICO_ABI = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_usdtTokenAddress",
                type: "address"
            },
            {
                internalType: "contract IERC20",
                name: "_fellyToken",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_pricePerToken",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_saleStartTime",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_saleEndTime",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "_USDTDepositeAddress",
                type: "address"
            }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        inputs: [],
        name: "USDTDepositeAddress",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "adrs",
                type: "address"
            }
        ],
        name: "checkAllowance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "fellytoken",
        outputs: [
            {
                internalType: "contract IERC20",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getFellyBalance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getOwner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "pricePerToken",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "saleEndTime",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "saleStartTime",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "deposterAddress",
                type: "address"
            }
        ],
        name: "setDepositeAddress",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "endSaleEndTime",
                type: "uint256"
            }
        ],
        name: "setEndsaleData",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "newPrice",
                type: "uint256"
            }
        ],
        name: "setPrice",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "tokensSold",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }
        ],
        name: "transferUSDT",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "adrs",
                type: "address"
            }
        ],
        name: "usdtBalance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "usdtToken",
        outputs: [
            {
                internalType: "contract IERC20",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "withdrawTokens",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/buy/BuyFelySection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$RevealAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animation/RevealAnimation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contracts$2f$usdtContract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/contracts/usdtContract.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contracts$2f$icoContract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/contracts/icoContract.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const BuyFelySection = ()=>{
    _s();
    const buyingFellyValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const buyingUsdtValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // Added missing ref
    const POLYGON_CHAIN_ID = "0x89"; // 137 in decimal (Polygon Mainnet)
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCopied, setIsCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [yourWalletAddress, setWalletAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fellyPrice, setYourFellyPalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("0");
    const [yourUsdttBalance, setYourUsdttBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("0");
    const [transactionStatus, setTransactionStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuyFelySection.useEffect": ()=>{
            checkIfWalletIsConnected();
        }
    }["BuyFelySection.useEffect"], []);
    const handleCopy = ()=>{
        navigator.clipboard.writeText("0xEe997788f625809332BaABB3110BCf1BA7400824");
        setIsCopied(true);
        setTimeout(()=>setIsCopied(false), 2000);
    };
    // Handle USDT input change - calculate FELY
    const handleUsdtChange = (e)=>{
        const usdtValue = e.target.value;
        if (buyingUsdtValue.current && fellyPrice !== "0") {
            if (usdtValue === "" || parseFloat(usdtValue) === 0) {
                buyingUsdtValue.current.value = "";
                return;
            }
            const felyAmount = parseFloat(usdtValue) / parseFloat(fellyPrice);
            buyingUsdtValue.current.value = felyAmount.toFixed(6);
        }
    };
    // Handle FELY input change - calculate USDT
    const handleFelyChange = (e)=>{
        const felyValue = e.target.value;
        if (buyingFellyValue.current && fellyPrice !== "0") {
            if (felyValue === "" || parseFloat(felyValue) === 0) {
                buyingFellyValue.current.value = "";
                return;
            }
            const usdtAmount = parseFloat(felyValue) * parseFloat(fellyPrice);
            buyingFellyValue.current.value = usdtAmount.toFixed(6);
        }
    };
    // Check and switch to Polygon network
    const checkAndSwitchNetwork = async ()=>{
        try {
            const chainId = await window.ethereum.request({
                method: "eth_chainId"
            });
            console.log("Current Chain ID:", chainId);
            if (chainId !== POLYGON_CHAIN_ID) {
                setTransactionStatus("Switching to Polygon network...");
                try {
                    // Try to switch to Polygon
                    await window.ethereum.request({
                        method: "wallet_switchEthereumChain",
                        params: [
                            {
                                chainId: POLYGON_CHAIN_ID
                            }
                        ]
                    });
                    setTransactionStatus("Network switched successfully");
                    setTimeout(()=>setTransactionStatus(null), 3000);
                } catch (switchError) {
                    // If Polygon is not added, add it
                    if (switchError.code === 4902) {
                        setTransactionStatus("Adding Polygon network...");
                        await window.ethereum.request({
                            method: "wallet_addEthereumChain",
                            params: [
                                {
                                    chainId: POLYGON_CHAIN_ID,
                                    chainName: "Polygon Mainnet",
                                    nativeCurrency: {
                                        name: "POL",
                                        symbol: "POL",
                                        decimals: 18
                                    },
                                    rpcUrls: [
                                        "https://polygon-rpc.com/"
                                    ],
                                    blockExplorerUrls: [
                                        "https://polygonscan.com/"
                                    ]
                                }
                            ]
                        });
                        setTransactionStatus("Network added successfully");
                        setTimeout(()=>setTransactionStatus(null), 3000);
                    } else {
                        throw switchError;
                    }
                }
            }
        } catch (error) {
            console.error("Error switching network:", error);
            setTransactionStatus("Failed to switch network");
            setTimeout(()=>setTransactionStatus(null), 3000);
            throw error;
        }
    };
    const checkIfWalletIsConnected = async ()=>{
        try {
            // Check if MetaMask is installed
            if (!window.ethereum) {
                console.log("MetaMask is not installed");
                return;
            }
            // Check network first
            await checkAndSwitchNetwork();
            // Check if already connected (no popup)
            const accounts = await window.ethereum.request({
                method: "eth_accounts"
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
    const connectWallet = async ()=>{
        try {
            if (window.ethereum) {
                // First, check and switch to Polygon network
                await checkAndSwitchNetwork();
                // Then request accounts
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts"
                });
                setWalletAddress(accounts[0]);
                setIsConnected(true);
                await getUsdtBalance(accounts[0]);
            }
        } catch (error) {
            console.error("Error connecting wallet:", error);
            setTransactionStatus("Failed to connect wallet");
            setTimeout(()=>setTransactionStatus(null), 3000);
        }
    };
    //get usdt balance
    const getUsdtBalance = async (walletAddress)=>{
        try {
            // Check if address is valid
            if (!walletAddress) {
                console.log("No wallet address provided");
                return;
            }
            setTransactionStatus("Fetching USDT balance...");
            console.log("Fetching USDT balance...");
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(window.ethereum);
            const contract = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contracts$2f$usdtContract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USDT_CONTRACT_ADDRESS"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contracts$2f$usdtContract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USDT_ABI"], provider);
            const balance = await contract.balanceOf(walletAddress);
            const formattedBalance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].formatUnits(balance, 6);
            console.log("Raw balance:", balance.toString());
            setYourUsdttBalance(formattedBalance);
            setTransactionStatus(null);
        } catch (error) {
            console.error("Error fetching balance:", error);
            setTransactionStatus("Failed to fetch balance");
            setTimeout(()=>setTransactionStatus(null), 3000);
        }
        getFelyPrice();
    };
    //get fely Price
    const getFelyPrice = async (walletAddress)=>{
        try {
            setTransactionStatus("Fetching Price...");
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(window.ethereum);
            const contract = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contracts$2f$icoContract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICO_CONTRACT"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contracts$2f$icoContract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICO_ABI"], provider);
            const felyPrice = await contract.pricePerToken();
            const formattedfelyPrice = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].formatUnits(felyPrice, 6);
            console.error("Felly Price:" + formattedfelyPrice);
            setYourFellyPalance(formattedfelyPrice);
            setTransactionStatus(null);
        } catch (error) {
            console.error("Error fetching balance:", error);
            setTransactionStatus("Failed to fetch balance");
            setTimeout(()=>setTransactionStatus(null), 3000);
        }
    };
    // BUY FELLY TOKEN
    const buyFelyToken = async (walletAddress)=>{
        if (buyingFellyValue.current) {
            console.log(buyingFellyValue.current.value);
            setTransactionStatus("Buy In action");
            const felyValue = buyingFellyValue.current.value;
            if (!felyValue) {
                console.log("felly value canot be zero or null");
                setTransactionStatus("Felly Value canot be zero or null");
                return;
            }
            // if (parseInt(felyValue) < 111) {
            //   console.log("Minimum Value is 111");
            //   setTransactionStatus("Felly Minimum Value is 111");
            //   return;
            // }
            approveAndBuyTokens(felyValue);
        }
    };
    const approveAndBuyTokens = async (amount)=>{
        const spenderAddress = "0x6350637c20C62bD62091c8e2e08C414A863f10A4";
        try {
            if (!yourWalletAddress) {
                setTransactionStatus("Please connect your wallet first");
                return;
            }
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            // ============ STEP 1: APPROVE USDT ============
            setTransactionStatus("Step 1/2: Approving USDT...");
            const usdtContract = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contracts$2f$usdtContract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USDT_CONTRACT_ADDRESS"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contracts$2f$usdtContract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USDT_ABI"], signer);
            const amountInWei = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].parseUnits(amount, 6);
            console.log("Step 1: Approving USDT");
            const approveTx = await usdtContract.approve(spenderAddress, amountInWei);
            setTransactionStatus("Step 1/2: Confirming approval...");
            await approveTx.wait();
            console.log("✅ Approval confirmed:", approveTx.hash);
            // ============ STEP 2: TRANSFER USDT & BUY FELY ============
            setTransactionStatus("Step 2/2: Buying FELY tokens...");
            const icoContract = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contracts$2f$icoContract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICO_CONTRACT"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contracts$2f$icoContract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICO_ABI"], signer);
            // Get gas price with buffer
            const feeData = await provider.getFeeData();
            const networkGasPrice = feeData.gasPrice;
            if (!networkGasPrice) {
                throw new Error("Unable to fetch gas price");
            }
            const gasPrice = networkGasPrice * BigInt(110) / BigInt(100);
            console.log("Step 2: Transferring USDT");
            const transferTx = await icoContract.transferUSDT(amountInWei, {
                gasLimit: 200000,
                gasPrice: gasPrice
            });
            setTransactionStatus("Step 2/2: Confirming purchase...");
            const receipt = await transferTx.wait();
            console.log("✅ Purchase confirmed:", transferTx.hash);
            setTransactionStatus("FELY tokens purchased successfully! 🎉");
            // Refresh balances and reset input fields
            setTimeout(()=>{
                // Reset input fields
                if (buyingFellyValue.current) {
                    buyingFellyValue.current.value = "";
                }
                if (buyingUsdtValue.current) {
                    buyingUsdtValue.current.value = "";
                }
                // Refresh USDT balance
                getUsdtBalance(yourWalletAddress);
                setTransactionStatus(null);
            }, 3000);
            return {
                approveTx,
                transferTx: receipt
            };
        } catch (error) {
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
            setTimeout(()=>setTransactionStatus(null), 5000);
        }
    };
    // Listen for network changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuyFelySection.useEffect": ()=>{
            if (window.ethereum) {
                window.ethereum.on("chainChanged", {
                    "BuyFelySection.useEffect": (chainId)=>{
                        console.log("Network changed to:", chainId);
                        window.location.reload(); // Reload page on network change
                    }
                }["BuyFelySection.useEffect"]);
                window.ethereum.on("accountsChanged", {
                    "BuyFelySection.useEffect": (accounts)=>{
                        if (accounts.length > 0) {
                            setWalletAddress(accounts[0]);
                            setYourUsdttBalance(accounts[0]);
                        } else {
                            setIsConnected(false);
                            setWalletAddress(null);
                            setYourUsdttBalance("0");
                        }
                    }
                }["BuyFelySection.useEffect"]);
            }
            return ({
                "BuyFelySection.useEffect": ()=>{
                    if (window.ethereum) {
                        window.ethereum.removeAllListeners("chainChanged");
                        window.ethereum.removeAllListeners("accountsChanged");
                    }
                }
            })["BuyFelySection.useEffect"];
        }
    }["BuyFelySection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$RevealAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        delay: 0.1,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl md:text-3xl font-bold text-white leading-tight",
                            children: "Golden Opportunity Unveiled"
                        }, void 0, false, {
                            fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                            lineNumber: 375,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                        lineNumber: 374,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$RevealAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        delay: 0.2,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-accent/80 text-base md:text-lg max-w-3xl mx-auto",
                            children: "Your once-in-a-lifetime chance to get Felysyum at a never-before-seen price is here! The public sale is open for a limited period only. Act now to secure your stake and become an early pioneer of digital gold!"
                        }, void 0, false, {
                            fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                            lineNumber: 380,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                        lineNumber: 379,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                lineNumber: 373,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$RevealAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                delay: 0.3,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-secondary dark:bg-background-8 rounded-[30px] p-6 md:p-10 border border-stroke-2 dark:border-stroke-6 overflow-hidden relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 right-0 w-[300px] h-[300px] bg-primary-500/10 blur-[100px] pointer-events-none rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                            lineNumber: 393,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 text-center lg:text-left",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl md:text-3xl font-bold text-white leading-tight",
                                        children: [
                                            "Buy FELY now ! ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                lineNumber: 399,
                                                columnNumber: 32
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "This price is available for a",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-primary-500",
                                                children: "limited time."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                lineNumber: 401,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                        lineNumber: 398,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                    lineNumber: 397,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center lg:items-end space-y-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#13171E] rounded-2xl p-6 w-full max-w-md border border-[#2a333e]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4 mb-6 pb-6 border-b border-[#2a333e]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-center text-gray-400",
                                                        children: "(Only MetaMask, Coinbase Wallet, and Trust Wallet are supported)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-center text-gray-500",
                                                        children: "Note: Uses Polygon network — POL is required for gas."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                        lineNumber: 414,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    isConnected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-400",
                                                                children: "Price :"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                                lineNumber: 420,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white font-medium",
                                                                children: [
                                                                    fellyPrice,
                                                                    " USDT"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                                lineNumber: 421,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                        lineNumber: 419,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                lineNumber: 409,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            !isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>connectWallet(),
                                                className: "btn btn-primary btn-xl w-full",
                                                children: "CONNECT YOUR WALLET"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                lineNumber: 434,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-black/20 rounded-xl p-3 border border-[#2a333e]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-gray-400 mb-1",
                                                                children: "Your Wallet Address"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                                lineNumber: 444,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-primary-500 font-mono break-all",
                                                                children: yourWalletAddress
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                                lineNumber: 447,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-400",
                                                                children: "Your Wallet Balance :"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                                lineNumber: 453,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white font-medium",
                                                                children: [
                                                                    yourUsdttBalance,
                                                                    " USDT"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                                lineNumber: 456,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                        lineNumber: 452,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs text-gray-300",
                                                                children: "Enter USDT Amount"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                                lineNumber: 462,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        ref: buyingFellyValue,
                                                                        onChange: handleUsdtChange,
                                                                        placeholder: "Enter amount",
                                                                        className: "w-full bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 placeholder:text-sm"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                                        lineNumber: 466,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs",
                                                                        children: "USDT"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                                        lineNumber: 473,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                                lineNumber: 465,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                        lineNumber: 461,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs text-gray-300",
                                                                children: "Enter FELLY Amount"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                                lineNumber: 480,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        ref: buyingUsdtValue,
                                                                        onChange: handleFelyChange,
                                                                        placeholder: "Enter amount",
                                                                        className: "w-full bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 placeholder:text-sm"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                                        lineNumber: 484,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs",
                                                                        children: "FELLY"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                                        lineNumber: 491,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                                lineNumber: 483,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                        lineNumber: 479,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "btn btn-primary btn-lg w-full",
                                                        onClick: ()=>buyFelyToken(),
                                                        children: "BUY FELY TOKEN"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                        lineNumber: 497,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-400",
                                                                children: "Progressing Status :"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                                lineNumber: 505,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-yellow-500 font-medium",
                                                                children: transactionStatus
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                                lineNumber: 508,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                        lineNumber: 504,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-3 border-t border-[#2a333e]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-400 mb-2",
                                                                children: "Token Address :"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                                lineNumber: 514,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2 items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                        className: "text-[10px] text-gray-300 bg-black/40 px-2 py-1 rounded flex-1 truncate font-mono",
                                                                        children: "0xEe997788f625809332BaABB3110BCf1BA7400824"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                                        lineNumber: 518,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: handleCopy,
                                                                        className: "text-primary-500 text-xs hover:text-primary-400 flex items-center gap-1 transition-colors",
                                                                        children: isCopied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                    fill: "none",
                                                                                    viewBox: "0 0 24 24",
                                                                                    strokeWidth: 1.5,
                                                                                    stroke: "currentColor",
                                                                                    className: "size-4",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round",
                                                                                        d: "m4.5 12.75 6 6 9-13.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                                                        lineNumber: 535,
                                                                                        columnNumber: 33
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                                                    lineNumber: 527,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                "COPIED!"
                                                                            ]
                                                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                    fill: "none",
                                                                                    viewBox: "0 0 24 24",
                                                                                    strokeWidth: 1.5,
                                                                                    stroke: "currentColor",
                                                                                    className: "size-4",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round",
                                                                                        d: "M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                                                        lineNumber: 553,
                                                                                        columnNumber: 33
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                                                    lineNumber: 545,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                "COPY"
                                                                            ]
                                                                        }, void 0, true)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                                        lineNumber: 521,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                                lineNumber: 517,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                        lineNumber: 513,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                                lineNumber: 441,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                        lineNumber: 407,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                                    lineNumber: 406,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                            lineNumber: 395,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                    lineNumber: 391,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/buy/BuyFelySection.tsx",
                lineNumber: 390,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/buy/BuyFelySection.tsx",
        lineNumber: 371,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BuyFelySection, "fwd5jSql/9EWlRKggKdJEi3LSzs=");
_c = BuyFelySection;
const __TURBOPACK__default__export__ = BuyFelySection;
var _c;
__turbopack_context__.k.register(_c, "BuyFelySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1b024faa._.js.map