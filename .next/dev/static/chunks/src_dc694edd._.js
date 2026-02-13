(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/utils/generateMetaData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BASE_URL",
    ()=>BASE_URL,
    "DEFAULT_DESCRIPTION",
    ()=>DEFAULT_DESCRIPTION,
    "DEFAULT_IMAGE_URL",
    ()=>DEFAULT_IMAGE_URL,
    "DEFAULT_TITLE",
    ()=>DEFAULT_TITLE,
    "DEFAULT_URL",
    ()=>DEFAULT_URL,
    "defaultMetadata",
    ()=>defaultMetadata,
    "generateMetadata",
    ()=>generateMetadata
]);
const DEFAULT_URL = "https://next-saas-next.vercel.app/";
const DEFAULT_TITLE = "NextSaaS - Software, SaaS & Startup Tailwind Template";
const DEFAULT_DESCRIPTION = "NextSaaS - the ultimate collection of 38+ premium HTML templates for SaaS businesses and startups. Built with Tailwind CSS, featuring responsive design, authentication flows, pricing pages, and modern UI components. Perfect for web applications and digital products.";
const DEFAULT_IMAGE_URL = "https://images.prismic.io/staticmania/aPD-K55xUNkB2D2X_og-image.jpg";
const BASE_URL = "https://felysyum.cloud/api";
const defaultMetadata = {
    metadataBase: new URL(DEFAULT_URL),
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    openGraph: {
        type: "website",
        siteName: "NextSaaS",
        url: DEFAULT_URL,
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        images: [
            {
                url: DEFAULT_IMAGE_URL,
                width: 1200,
                height: 630
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        images: [
            DEFAULT_IMAGE_URL
        ]
    }
};
const generateMetadata = (title, description, canonicaUrl, imageUrl)=>{
    return {
        ...defaultMetadata,
        title: title ?? defaultMetadata.title,
        description: description ?? defaultMetadata.description,
        alternates: {
            canonical: canonicaUrl
        },
        openGraph: {
            ...defaultMetadata.openGraph,
            title: title ?? defaultMetadata.openGraph?.title,
            description: description ?? defaultMetadata.openGraph?.description,
            url: canonicaUrl ?? defaultMetadata.openGraph?.url,
            images: imageUrl ? [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630
                }
            ] : defaultMetadata.openGraph?.images
        },
        twitter: {
            ...defaultMetadata.twitter,
            title: title ?? defaultMetadata.twitter?.title,
            description: description ?? defaultMetadata.twitter?.description,
            images: imageUrl ? [
                imageUrl
            ] : defaultMetadata.twitter?.images
        }
    };
};
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/serverServices/serverCalls.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serverGetWithBare",
    ()=>serverGetWithBare,
    "serverPostRequest",
    ()=>serverPostRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generateMetaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/generateMetaData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
;
const serverPostRequest = async (object, classPath)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generateMetaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_URL"] + classPath, object, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log("Response:", JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};
const serverGetWithBare = async (params, classPath, token)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generateMetaData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_URL"] + classPath, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            params: params
        });
        console.log("Response:", JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/contracts/stake12months.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STAKE12MONTH_ABI",
    ()=>STAKE12MONTH_ABI,
    "STAKE12MONTH_CONTRACT",
    ()=>STAKE12MONTH_CONTRACT
]);
const STAKE12MONTH_CONTRACT = "0x5EfF66487f9D33465BAf1eBd4Cfa991f0B8cd963";
const STAKE12MONTH_ABI = [
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "_token",
                type: "address"
            }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            }
        ],
        name: "OwnableInvalidOwner",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "OwnableUnauthorizedAccount",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address"
            }
        ],
        name: "SafeERC20FailedOperation",
        type: "error"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint16",
                name: "daysClaimed",
                type: "uint16"
            }
        ],
        name: "InterestClaimed",
        type: "event"
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
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "capital",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "totalInterest",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "startAt",
                type: "uint256"
            }
        ],
        name: "StakeAssigned",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "capitalWithdrawn",
        type: "event"
    },
    {
        inputs: [],
        name: "DAY",
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
        name: "INTEREST_PERIOD",
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
        name: "LOCK_DURATION",
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
        name: "TOTAL_DAYS",
        outputs: [
            {
                internalType: "uint16",
                name: "",
                type: "uint16"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "capital",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "totalInterest",
                type: "uint256"
            }
        ],
        name: "assignStake",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            }
        ],
        name: "claimInterest",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            }
        ],
        name: "getClaimableInterest",
        outputs: [
            {
                internalType: "uint256",
                name: "claimableAmount",
                type: "uint256"
            },
            {
                internalType: "uint16",
                name: "claimableDays",
                type: "uint16"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            }
        ],
        name: "getEndDate",
        outputs: [
            {
                internalType: "uint256",
                name: "endDate",
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
                name: "stakeId",
                type: "uint256"
            }
        ],
        name: "getStake",
        outputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "capital",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "totalInterest",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "startAt",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "capitalWithdrawnAt",
                type: "uint256"
            },
            {
                internalType: "uint16",
                name: "daysClaimed",
                type: "uint16"
            }
        ],
        stateMutability: "view",
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
        name: "getStakeIdsByAccount",
        outputs: [
            {
                internalType: "uint256[]",
                name: "stakeIds",
                type: "uint256[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            }
        ],
        name: "getStakeInfo",
        outputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "capital",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "totalInterest",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "startDate",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "endDate",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "capitalWithdrawnAt",
                type: "uint256"
            },
            {
                internalType: "uint16",
                name: "daysClaimed",
                type: "uint16"
            },
            {
                internalType: "uint256",
                name: "daysRemaining",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
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
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "rescueToken",
                type: "address"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            }
        ],
        name: "rescueERC20",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        name: "stakes",
        outputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "capital",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "totalInterest",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "startAt",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "capitalWithdrawnAt",
                type: "uint256"
            },
            {
                internalType: "uint16",
                name: "daysClaimed",
                type: "uint16"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "token",
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
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            }
        ],
        name: "withdrawCapital",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/contracts/stake6months.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STAKE6MONTH_ABI",
    ()=>STAKE6MONTH_ABI,
    "STAKE6MONTH_CONTRACT",
    ()=>STAKE6MONTH_CONTRACT
]);
const STAKE6MONTH_CONTRACT = "0xe4410D26224d4728846722309fF386495Cc1E490";
const STAKE6MONTH_ABI = [
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "_token",
                type: "address"
            }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            }
        ],
        name: "OwnableInvalidOwner",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "OwnableUnauthorizedAccount",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address"
            }
        ],
        name: "SafeERC20FailedOperation",
        type: "error"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint16",
                name: "daysClaimed",
                type: "uint16"
            }
        ],
        name: "InterestClaimed",
        type: "event"
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
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "capital",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "totalInterest",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "startAt",
                type: "uint256"
            }
        ],
        name: "StakeAssigned",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "capitalWithdrawn",
        type: "event"
    },
    {
        inputs: [],
        name: "DAY",
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
        name: "INTEREST_PERIOD",
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
        name: "LOCK_DURATION",
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
        name: "TOTAL_DAYS",
        outputs: [
            {
                internalType: "uint16",
                name: "",
                type: "uint16"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "capital",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "totalInterest",
                type: "uint256"
            }
        ],
        name: "assignStake",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            }
        ],
        name: "claimInterest",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            }
        ],
        name: "getClaimableInterest",
        outputs: [
            {
                internalType: "uint256",
                name: "claimableAmount",
                type: "uint256"
            },
            {
                internalType: "uint16",
                name: "claimableDays",
                type: "uint16"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            }
        ],
        name: "getEndDate",
        outputs: [
            {
                internalType: "uint256",
                name: "endDate",
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
                name: "stakeId",
                type: "uint256"
            }
        ],
        name: "getStake",
        outputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "capital",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "totalInterest",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "startAt",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "capitalWithdrawnAt",
                type: "uint256"
            },
            {
                internalType: "uint16",
                name: "daysClaimed",
                type: "uint16"
            }
        ],
        stateMutability: "view",
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
        name: "getStakeIdsByAccount",
        outputs: [
            {
                internalType: "uint256[]",
                name: "stakeIds",
                type: "uint256[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            }
        ],
        name: "getStakeInfo",
        outputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "capital",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "totalInterest",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "startDate",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "endDate",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "capitalWithdrawnAt",
                type: "uint256"
            },
            {
                internalType: "uint16",
                name: "daysClaimed",
                type: "uint16"
            },
            {
                internalType: "uint256",
                name: "daysRemaining",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
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
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "rescueToken",
                type: "address"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            }
        ],
        name: "rescueERC20",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        name: "stakes",
        outputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "capital",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "totalInterest",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "startAt",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "capitalWithdrawnAt",
                type: "uint256"
            },
            {
                internalType: "uint16",
                name: "daysClaimed",
                type: "uint16"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "token",
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
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            }
        ],
        name: "withdrawCapital",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/contracts/stake3months.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STAKE3MONTH_ABI",
    ()=>STAKE3MONTH_ABI,
    "STAKE3MONTH_CONTRACT",
    ()=>STAKE3MONTH_CONTRACT
]);
const STAKE3MONTH_CONTRACT = "0x66BAf11521Ee8B3eF84bd459F7062916b6218D68";
const STAKE3MONTH_ABI = [
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "_token",
                type: "address"
            }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            }
        ],
        name: "OwnableInvalidOwner",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "OwnableUnauthorizedAccount",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address"
            }
        ],
        name: "SafeERC20FailedOperation",
        type: "error"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint16",
                name: "daysClaimed",
                type: "uint16"
            }
        ],
        name: "InterestClaimed",
        type: "event"
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
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "capital",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "totalInterest",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "startAt",
                type: "uint256"
            }
        ],
        name: "StakeAssigned",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "capitalWithdrawn",
        type: "event"
    },
    {
        inputs: [],
        name: "DAY",
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
        name: "INTEREST_PERIOD",
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
        name: "LOCK_DURATION",
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
        name: "TOTAL_DAYS",
        outputs: [
            {
                internalType: "uint16",
                name: "",
                type: "uint16"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "capital",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "totalInterest",
                type: "uint256"
            }
        ],
        name: "assignStake",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            }
        ],
        name: "claimInterest",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            }
        ],
        name: "getClaimableInterest",
        outputs: [
            {
                internalType: "uint256",
                name: "claimableAmount",
                type: "uint256"
            },
            {
                internalType: "uint16",
                name: "claimableDays",
                type: "uint16"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            }
        ],
        name: "getEndDate",
        outputs: [
            {
                internalType: "uint256",
                name: "endDate",
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
                name: "stakeId",
                type: "uint256"
            }
        ],
        name: "getStake",
        outputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "capital",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "totalInterest",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "startAt",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "capitalWithdrawnAt",
                type: "uint256"
            },
            {
                internalType: "uint16",
                name: "daysClaimed",
                type: "uint16"
            }
        ],
        stateMutability: "view",
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
        name: "getStakeIdsByAccount",
        outputs: [
            {
                internalType: "uint256[]",
                name: "stakeIds",
                type: "uint256[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            }
        ],
        name: "getStakeInfo",
        outputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "capital",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "totalInterest",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "startDate",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "endDate",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "capitalWithdrawnAt",
                type: "uint256"
            },
            {
                internalType: "uint16",
                name: "daysClaimed",
                type: "uint16"
            },
            {
                internalType: "uint256",
                name: "daysRemaining",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
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
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "rescueToken",
                type: "address"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            }
        ],
        name: "rescueERC20",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        name: "stakes",
        outputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "capital",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "totalInterest",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "startAt",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "capitalWithdrawnAt",
                type: "uint256"
            },
            {
                internalType: "uint16",
                name: "daysClaimed",
                type: "uint16"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "token",
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
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            }
        ],
        name: "withdrawCapital",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/contracts/stake5days.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STAKE5DAYS_ABI",
    ()=>STAKE5DAYS_ABI,
    "STAKE5DAYS_CONTRACT",
    ()=>STAKE5DAYS_CONTRACT
]);
const STAKE5DAYS_CONTRACT = "0xb0B62e987dA7a3CfBB7b0e92EcebcFF446b315d2";
const STAKE5DAYS_ABI = [
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "_token",
                type: "address"
            }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            }
        ],
        name: "OwnableInvalidOwner",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "OwnableUnauthorizedAccount",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address"
            }
        ],
        name: "SafeERC20FailedOperation",
        type: "error"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint16",
                name: "daysClaimed",
                type: "uint16"
            }
        ],
        name: "InterestClaimed",
        type: "event"
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
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "capital",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "totalInterest",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "startAt",
                type: "uint256"
            }
        ],
        name: "StakeAssigned",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "capitalWithdrawn",
        type: "event"
    },
    {
        inputs: [],
        name: "DAY",
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
        name: "INTEREST_PERIOD",
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
        name: "LOCK_DURATION",
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
        name: "TOTAL_DAYS",
        outputs: [
            {
                internalType: "uint16",
                name: "",
                type: "uint16"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "capital",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "totalInterest",
                type: "uint256"
            }
        ],
        name: "assignStake",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            }
        ],
        name: "claimInterest",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            }
        ],
        name: "getClaimableInterest",
        outputs: [
            {
                internalType: "uint256",
                name: "claimableAmount",
                type: "uint256"
            },
            {
                internalType: "uint16",
                name: "claimableDays",
                type: "uint16"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            }
        ],
        name: "getEndDate",
        outputs: [
            {
                internalType: "uint256",
                name: "endDate",
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
                name: "stakeId",
                type: "uint256"
            }
        ],
        name: "getStake",
        outputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "capital",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "totalInterest",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "startAt",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "capitalWithdrawnAt",
                type: "uint256"
            },
            {
                internalType: "uint16",
                name: "daysClaimed",
                type: "uint16"
            }
        ],
        stateMutability: "view",
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
        name: "getStakeIdsByAccount",
        outputs: [
            {
                internalType: "uint256[]",
                name: "stakeIds",
                type: "uint256[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            }
        ],
        name: "getStakeInfo",
        outputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "capital",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "totalInterest",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "startDate",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "endDate",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "capitalWithdrawnAt",
                type: "uint256"
            },
            {
                internalType: "uint16",
                name: "daysClaimed",
                type: "uint16"
            },
            {
                internalType: "uint256",
                name: "daysRemaining",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
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
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "rescueToken",
                type: "address"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            }
        ],
        name: "rescueERC20",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        name: "stakes",
        outputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "capital",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "totalInterest",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "startAt",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "capitalWithdrawnAt",
                type: "uint256"
            },
            {
                internalType: "uint16",
                name: "daysClaimed",
                type: "uint16"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "token",
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
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "stakeId",
                type: "uint256"
            }
        ],
        name: "withdrawCapital",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/buy/StakeFelySection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$RevealAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animation/RevealAnimation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$serverServices$2f$serverCalls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/serverServices/serverCalls.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contracts$2f$stake12months$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/contracts/stake12months.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contracts$2f$stake6months$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/contracts/stake6months.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contracts$2f$stake3months$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/contracts/stake3months.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contracts$2f$stake5days$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/contracts/stake5days.ts [app-client] (ecmascript)");
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
;
;
;
;
const StakeFelySection = ()=>{
    _s();
    const [stakeUsdtAmount, setStakeUsdtAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [stakeIdForInterst, setStakeIdForInterst] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [stakeIdForWithdraw, setStakeIdForWithdraw] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const POLYGON_CHAIN_ID = "0x89";
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [yourWalletAddress, setWalletAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [transactionStatus, setTransactionStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [stakeState, setStakeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lockUpState, setLockUpState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [ClameUpState, setClameUpState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [WithdrawState, setWithdrawState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [StakePlan, setStakePlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loockUpStakePlan, setLoockUpStakePlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ClameInterstPlan, SetClameInterstPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [WithDrwaCapitalPlan, SetWithdrawCapitalPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [stakeData, setStakeData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StakeFelySection.useEffect": ()=>{
            checkIfWalletIsConnected();
            setLockUpState(" No active stakes found");
        }
    }["StakeFelySection.useEffect"], []);
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
    const connectWallet = async ()=>{
        try {
            if (window.ethereum) {
                setTransactionStatus("Connecting Wallect");
                // First, check and switch to Polygon network
                await checkAndSwitchNetwork();
                // Then request accounts
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts"
                });
                const nonce = await getNonce(accounts[0]);
                if (nonce.success) {
                    // Create a message to sign
                    const message = `Sign this message to authenticate with your wallet:  ${nonce.data.nonce}`;
                    // Request signature
                    const signature = await window.ethereum.request({
                        method: "personal_sign",
                        params: [
                            message,
                            accounts[0]
                        ]
                    });
                    const loginRowData = {
                        wallet_address: accounts[0],
                        signature: signature,
                        nonce: nonce.data.nonce
                    };
                    console.log(loginRowData);
                    const loginReturnData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$serverServices$2f$serverCalls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverPostRequest"])(loginRowData, "/auth/login");
                    console.log("loginReturnData");
                    console.log(loginReturnData);
                    setIsConnected(true);
                    setTransactionStatus("connected");
                    getmyStaking(loginReturnData.data.token);
                } else {
                    const tim = new Date().toISOString();
                    const message = `Sign this message to authenticate with your wallet. Wallet: ${accounts[0]}. Timestamp: ${tim}`;
                    // Request signature
                    const signature = await window.ethereum.request({
                        method: "personal_sign",
                        params: [
                            message,
                            accounts[0]
                        ]
                    });
                    const regdata = {
                        wallet_address: accounts[0],
                        sponsor_code: "LAUNCH2024",
                        signature: signature,
                        message: message,
                        timestamp: tim
                    };
                    const regResoince = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$serverServices$2f$serverCalls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverPostRequest"])(regdata, "/auth/register");
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
            setTimeout(()=>setTransactionStatus(null), 3000);
        }
    };
    const getNonce = async (wallet)=>{
        try {
            const obj = {
                wallet_address: wallet
            };
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$serverServices$2f$serverCalls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverPostRequest"])(obj, "/auth/nonce");
        } catch (error) {
            console.error("Failed to get nonce:", error);
        }
    };
    const getmyStaking = async (Bearer)=>{
        try {
            const MyStakingData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$serverServices$2f$serverCalls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverGetWithBare"])("", "/staking/my-stakings", Bearer);
            console.log(MyStakingData);
            setStakeData(MyStakingData.data.stakings);
        } catch (error) {
            console.error("Error connecting wallet:", error);
            setTransactionStatus("Failed to connect wallet");
            setTimeout(()=>setTransactionStatus(null), 3000);
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
    // Listen for network changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StakeFelySection.useEffect": ()=>{
            if (window.ethereum) {
                window.ethereum.on("chainChanged", {
                    "StakeFelySection.useEffect": (chainId)=>{
                        console.log("Network changed to:", chainId);
                        window.location.reload(); // Reload page on network change
                    }
                }["StakeFelySection.useEffect"]);
                window.ethereum.on("accountsChanged", {
                    "StakeFelySection.useEffect": (accounts)=>{
                        if (accounts.length > 0) {
                            setWalletAddress(accounts[0]);
                        } else {
                            setIsConnected(false);
                            setWalletAddress(null);
                        }
                    }
                }["StakeFelySection.useEffect"]);
            }
            return ({
                "StakeFelySection.useEffect": ()=>{
                    if (window.ethereum) {
                        window.ethereum.removeAllListeners("chainChanged");
                        window.ethereum.removeAllListeners("accountsChanged");
                    }
                }
            })["StakeFelySection.useEffect"];
        }
    }["StakeFelySection.useEffect"], []);
    ``;
    const lockupStakes = async ()=>{
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
            const contract = await returnContract(parseInt(loockUpStakePlan));
            const stakeIds = await contract.getStakeIdsByAccount(yourWalletAddress);
            if (stakeIds == "" || stakeIds == null) {
                setLockUpState("Stake ID not found");
                return;
            }
            const formatted = stakeIds.map((id)=>id.toString()).join(",");
            console.log(formatted);
            setLockUpState(formatted);
        } catch (error) {
            setLockUpState("No active stakes found");
            setTimeout(()=>setTransactionStatus(null), 3000);
        }
    };
    // Add proper return type annotation
    const returnContract = async (plan)=>{
        const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        if (plan == 5) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contracts$2f$stake5days$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAKE5DAYS_CONTRACT"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contracts$2f$stake5days$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAKE5DAYS_ABI"], signer);
        } else if (plan == 3) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contracts$2f$stake3months$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAKE3MONTH_CONTRACT"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contracts$2f$stake3months$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAKE3MONTH_ABI"], signer);
        } else if (plan == 6) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contracts$2f$stake6months$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAKE6MONTH_CONTRACT"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contracts$2f$stake6months$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAKE6MONTH_ABI"], signer);
        } else {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contracts$2f$stake12months$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAKE12MONTH_CONTRACT"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$contracts$2f$stake12months$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAKE12MONTH_ABI"], signer);
        }
    };
    const stakePlan = async ()=>{
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
    const claimInterest = async ()=>{
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
            const contract = await returnContract(parseInt(ClameInterstPlan));
            setClameUpState("Requesting signature...");
            const tx = await contract.claimInterest(stakeIdForInterst);
            setClameUpState("Transaction submitted. Waiting for confirmation...");
            const receipt = await tx.wait();
            setClameUpState("Success!");
            alert("Interest claimed successfully!");
            console.log("Transaction receipt:", receipt);
        } catch (error) {
            console.error("Error claiming interest:", error);
            setClameUpState("Transaction failed");
        //alert(error?.message || "Transaction failed");
        }
    };
    const withdrawCapital = async ()=>{
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
            const contract = await returnContract(parseInt(WithDrwaCapitalPlan));
            setWithdrawState("Requesting signature...");
            const tx = await contract.withdrawCapital(stakeIdForWithdraw);
            setWithdrawState("Transaction submitted. Waiting for confirmation...");
            const receipt = await tx.wait();
            setWithdrawState("Success!");
            alert("Capital withdrawn successfully!");
            console.log("Transaction receipt:", receipt);
        } catch (error) {
            console.error("Error withdrawing capital:", error);
            setWithdrawState("Transaction failed");
            //alert(error?.message || "Transaction failed");
            setTimeout(()=>setWithdrawState(null), 3000);
        }
    };
    const setStakePlanWhenChange = async (e)=>{
        setStakePlan(e.target.value);
        console.log(e.target.value);
    };
    const setPlanWhenChange = async (e)=>{
        setLoockUpStakePlan(e.target.value);
        console.log(e.target.value);
    };
    const setClamWhenChange = async (e)=>{
        SetClameInterstPlan(e.target.value);
        console.log(e.target.value);
    };
    const setWithdrawWhenChange = async (e)=>{
        SetWithdrawCapitalPlan(e.target.value);
        console.log(e.target.value);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$RevealAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    delay: 0.2,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-accent/80 text-base md:text-lg max-w-3xl mx-auto",
                        children: "Maximize your holdings by staking FELY. Earn rewards while contributing to the ecosystem stability."
                    }, void 0, false, {
                        fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                        lineNumber: 506,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                    lineNumber: 505,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                lineNumber: 504,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$RevealAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            delay: 0.3,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-secondary dark:bg-background-8 rounded-[30px] p-6 border border-stroke-2 dark:border-stroke-6 overflow-hidden relative h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-left",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-white mb-1",
                                                children: "Wallet Connection & Staking Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                lineNumber: 522,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                            lineNumber: 521,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#13171E] rounded-xl p-4 border border-[#2a333e] space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-white text-sm font-medium",
                                                    children: "Connection Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn btn-primary btn-sm w-auto px-6",
                                                    onClick: ()=>connectWallet(),
                                                    children: "CONNECT WALLET"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                    lineNumber: 534,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: "Wallet Address:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                    lineNumber: 543,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-primary-500 font-medium font-mono",
                                                                    children: yourWalletAddress
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                    lineNumber: 544,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                            lineNumber: 542,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: "Transaction Status:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                    lineNumber: 550,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-primary-500 font-medium font-mono",
                                                                    children: transactionStatus
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                    lineNumber: 553,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                            lineNumber: 549,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                    lineNumber: 541,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                    lineNumber: 559,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                            lineNumber: 529,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs text-gray-300",
                                                            children: "USDT Amount"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                            lineNumber: 567,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: stakeUsdtAmount,
                                                                    onChange: (e)=>setStakeUsdtAmount(e.target.value),
                                                                    type: "number",
                                                                    placeholder: "Enter amount",
                                                                    className: "w-full bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 placeholder:text-sm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                    lineNumber: 571,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs",
                                                                    children: "USDT"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                    lineNumber: 578,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                            lineNumber: 570,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                    lineNumber: 566,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs text-gray-300",
                                                            children: "Plan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                            lineNumber: 584,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    className: "w-full bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 appearance-none pr-10",
                                                                    onChange: setStakePlanWhenChange,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            disabled: true,
                                                                            selected: true,
                                                                            children: "Select Plan"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                            lineNumber: 590,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "5",
                                                                            children: "5 Days - 1% APY"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                            lineNumber: 593,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "3",
                                                                            children: "3 Months - 2.5% APY"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                            lineNumber: 594,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "6",
                                                                            children: "6 Months - 8% APY"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                            lineNumber: 595,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "12",
                                                                            children: "12 Months - 12.5% APY"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                            lineNumber: 596,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                    lineNumber: 586,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "h-4 w-4",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: "2",
                                                                            d: "M19 9l-7 7-7-7"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                            lineNumber: 605,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                        lineNumber: 599,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                    lineNumber: 598,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                    lineNumber: 613,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: stakeState
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                    lineNumber: 614,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                            lineNumber: 585,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                    lineNumber: 583,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>stakePlan(),
                                                    className: "btn btn-primary btn-lg w-full shadow-lg shadow-primary-500/20 mt-2",
                                                    children: "STAKE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                    lineNumber: 617,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                            lineNumber: 565,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                            lineNumber: 625,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                    lineNumber: 520,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                lineNumber: 519,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                            lineNumber: 518,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                        lineNumber: 516,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$RevealAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                delay: 0.3,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-secondary dark:bg-background-8 rounded-[30px] p-6 border border-stroke-2 dark:border-stroke-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-white",
                                                children: "Lookup Stake IDs"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                lineNumber: 639,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col md:flex-row gap-3 md:items-end",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col space-y-2 w-full md:w-auto",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs text-gray-300 ml-1",
                                                                children: "Plan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                lineNumber: 655,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        onChange: setPlanWhenChange,
                                                                        className: "bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 appearance-none min-w-[120px] w-full pr-10",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                disabled: true,
                                                                                selected: true,
                                                                                children: "Select Plan"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                                lineNumber: 661,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "5",
                                                                                children: "5 Days - 1% APY"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                                lineNumber: 664,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "3",
                                                                                children: "Silver (3 Months)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                                lineNumber: 665,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "6",
                                                                                children: "Gold (6 Months)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                                lineNumber: 666,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "12",
                                                                                children: "Platinum (12 Months)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                                lineNumber: 667,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                        lineNumber: 657,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "h-4 w-4",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: "2",
                                                                                d: "M19 9l-7 7-7-7"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                                lineNumber: 676,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                            lineNumber: 670,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                        lineNumber: 669,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                lineNumber: 656,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                        lineNumber: 654,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col space-y-2 w-full md:w-auto",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs text-transparent select-none hidden md:block",
                                                                children: "Action"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                lineNumber: 687,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>lockupStakes(),
                                                                className: "btn btn-primary btn-sm whitespace-nowrap min-w-[100px] w-full md:w-auto px-6 h-[46px]",
                                                                children: "SEARCH"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                lineNumber: 690,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                        lineNumber: 686,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                lineNumber: 642,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pl-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-400 text-sm",
                                                    children: [
                                                        "Results:",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-500 italic ml-2",
                                                            children: lockUpState
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                            lineNumber: 702,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                    lineNumber: 700,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                lineNumber: 699,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                        lineNumber: 638,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                    lineNumber: 637,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                lineNumber: 636,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$RevealAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                delay: 0.4,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-secondary dark:bg-background-8 rounded-[30px] p-6 border border-stroke-2 dark:border-stroke-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-white mb-4",
                                            children: "% Claim Interest"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                            lineNumber: 714,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            children: ClameUpState
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                            lineNumber: 717,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col md:flex-row gap-3 md:items-end",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 flex flex-col space-y-2 w-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs text-gray-300 ml-1",
                                                            children: "Stake ID"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                            lineNumber: 720,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: stakeIdForInterst,
                                                            onChange: (e)=>setStakeIdForInterst(e.target.value),
                                                            placeholder: "Enter Stake ID",
                                                            className: "w-full bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 min-w-0 placeholder:text-sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                            lineNumber: 723,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                    lineNumber: 719,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col space-y-2 w-full md:w-auto",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs text-gray-300 ml-1",
                                                            children: "Plan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                            lineNumber: 732,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    onChange: setClamWhenChange,
                                                                    className: "bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 appearance-none min-w-[120px] w-full pr-10",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            disabled: true,
                                                                            selected: true,
                                                                            children: "Select Plan"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                            lineNumber: 738,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "5",
                                                                            children: "5 Days - 1% APY"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                            lineNumber: 741,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "3",
                                                                            children: "Silver (3 Months)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                            lineNumber: 742,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "6",
                                                                            children: "Gold (6 Months)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                            lineNumber: 743,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "12",
                                                                            children: "Platinum (12 Months)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                            lineNumber: 744,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                    lineNumber: 734,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "h-4 w-4",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: "2",
                                                                            d: "M19 9l-7 7-7-7"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                            lineNumber: 753,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                        lineNumber: 747,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                    lineNumber: 746,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                            lineNumber: 733,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                    lineNumber: 731,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col space-y-2 w-full md:w-auto",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs text-transparent select-none hidden md:block",
                                                            children: "Action"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                            lineNumber: 764,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: claimInterest,
                                                            className: "btn btn-primary btn-sm whitespace-nowrap min-w-[100px] w-full md:w-auto px-6 h-[46px]",
                                                            children: "CLAIM"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                            lineNumber: 767,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                    lineNumber: 763,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                            lineNumber: 718,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                    lineNumber: 713,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                lineNumber: 712,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$RevealAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                delay: 0.5,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-secondary dark:bg-background-8 rounded-[30px] p-6 border border-stroke-2 dark:border-stroke-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-white mb-4",
                                            children: "⎋ Withdraw Capital"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                            lineNumber: 781,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            children: WithdrawState
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                            lineNumber: 784,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col md:flex-row gap-3 md:items-end",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 flex flex-col space-y-2 w-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs text-gray-300 ml-1",
                                                            children: "Stake ID"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                            lineNumber: 787,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: stakeIdForWithdraw,
                                                            onChange: (e)=>setStakeIdForWithdraw(e.target.value),
                                                            placeholder: "Enter Stake ID",
                                                            className: "w-full bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 min-w-0 placeholder:text-sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                            lineNumber: 790,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                    lineNumber: 786,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col space-y-2 w-full md:w-auto",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs text-gray-300 ml-1",
                                                            children: "Plan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                            lineNumber: 799,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    onChange: setWithdrawWhenChange,
                                                                    className: "bg-[#13171E] border border-[#2a333e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-500 appearance-none min-w-[120px] w-full pr-10",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            disabled: true,
                                                                            selected: true,
                                                                            children: "Select Plan"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                            lineNumber: 805,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "5",
                                                                            children: "5 Days - 1% APY"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                            lineNumber: 808,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "3",
                                                                            children: "Silver (3 Months)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                            lineNumber: 809,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "6",
                                                                            children: "Gold (6 Months)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                            lineNumber: 810,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "12",
                                                                            children: "Platinum (12 Months)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                            lineNumber: 811,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                    lineNumber: 801,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "h-4 w-4",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: "2",
                                                                            d: "M19 9l-7 7-7-7"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                            lineNumber: 820,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                        lineNumber: 814,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                                    lineNumber: 813,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                            lineNumber: 800,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                    lineNumber: 798,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col space-y-2 w-full md:w-auto",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs text-transparent select-none hidden md:block",
                                                            children: "Action"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                            lineNumber: 831,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: withdrawCapital,
                                                            className: "btn btn-secondary text-white border border-[#2a333e] hover:bg-[#2a333e] btn-sm whitespace-nowrap min-w-[100px] w-full md:w-auto px-6 h-[46px]",
                                                            children: "WITHDRAW"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                            lineNumber: 834,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                    lineNumber: 830,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                            lineNumber: 785,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                    lineNumber: 780,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                lineNumber: 779,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                        lineNumber: 634,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                        fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                        lineNumber: 846,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                lineNumber: 514,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$RevealAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                delay: 0.6,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-secondary dark:bg-background-8 rounded-[30px] p-6 border border-stroke-2 dark:border-stroke-6 overflow-x-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full text-left border-collapse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b border-[#2a333e]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-4 text-white font-semibold whitespace-nowrap",
                                            children: "Order No"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                            lineNumber: 857,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-4 text-white font-semibold whitespace-nowrap",
                                            children: "Plan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                            lineNumber: 860,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-4 text-white font-semibold whitespace-nowrap",
                                            children: "USDT"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                            lineNumber: 863,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-4 text-white font-semibold whitespace-nowrap",
                                            children: "Fely Amount"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                            lineNumber: 866,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-4 text-white font-semibold whitespace-nowrap",
                                            children: "Bonus %"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                            lineNumber: 869,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-4 text-white font-semibold whitespace-nowrap",
                                            children: "Bonus Fely"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                            lineNumber: 872,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-4 text-white font-semibold whitespace-nowrap",
                                            children: "Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                            lineNumber: 875,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-4 text-white font-semibold whitespace-nowrap",
                                            children: "End Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                            lineNumber: 878,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-4 text-white font-semibold whitespace-nowrap",
                                            children: "Stauts"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                            lineNumber: 881,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                    lineNumber: 856,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                lineNumber: 855,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: stakeData.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-b border-[#2a333e] last:border-0 hover:bg-[#13171E]/50 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4 text-gray-300",
                                                children: row.id
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                lineNumber: 892,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4 text-gray-300",
                                                children: row.month
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                lineNumber: 893,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4 text-gray-300",
                                                children: row.usdt_amount
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                lineNumber: 894,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4 text-gray-300",
                                                children: row.fely_amount
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                lineNumber: 895,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4 text-gray-300",
                                                children: row.bonus_percentage
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                lineNumber: 896,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4 text-gray-300",
                                                children: row.fely_bonus_amount
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                lineNumber: 899,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4 text-gray-300",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(String(row.staked_at)), "dd/MM/yyyy")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                lineNumber: 902,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4 text-gray-300",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(String(row.maturity_date)), "dd/MM/yyyy")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                lineNumber: 905,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-block px-2 py-1 bg-primary-500/20 text-primary-500 text-xs rounded-md",
                                                    children: row.status
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                    lineNumber: 912,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                                lineNumber: 911,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                        lineNumber: 888,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                                lineNumber: 886,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                        lineNumber: 854,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                    lineNumber: 853,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                lineNumber: 852,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                fileName: "[project]/src/components/buy/StakeFelySection.tsx",
                lineNumber: 923,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/buy/StakeFelySection.tsx",
        lineNumber: 502,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StakeFelySection, "HVvGuyUOJwp+REMQLDqaWzJwV5w=");
_c = StakeFelySection;
const __TURBOPACK__default__export__ = StakeFelySection;
var _c;
__turbopack_context__.k.register(_c, "StakeFelySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_dc694edd._.js.map