// const PANCAKE_ROUTER_ADDRESS = "0x10ED43C718714eb63d5aA57B78B54704E256024E";
const PANCAKE_ROUTER_ADDRESS = "0x9ac64cc6e4415144c455bd8e4837fea55603e5c3"; //TESTNET
// const PANCAKE_FACTORY_ADDRESS = "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73";
const PANCAKE_FACTORY_ADDRESS = "0xB7926C0430Afb07AA7DEfDE6DA862aE0Bde767bc"; //TESTNET

const PANCAKE_FACTORY_ABI = [
  {
    inputs: [
      { internalType: "address", name: "_feeToSetter", type: "address" },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "pair",
        type: "address",
      },
      { indexed: false, internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "PairCreated",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "INIT_CODE_PAIR_HASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "allPairs",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "allPairsLength",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "tokenA", type: "address" },
      { internalType: "address", name: "tokenB", type: "address" },
    ],
    name: "createPair",
    outputs: [{ internalType: "address", name: "pair", type: "address" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "feeTo",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "feeToSetter",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "getPair",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "_feeTo", type: "address" }],
    name: "setFeeTo",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_feeToSetter", type: "address" },
    ],
    name: "setFeeToSetter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
const PANCAKE_POOL_ABI = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      { indexed: true, internalType: "address", name: "to", type: "address" },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      { indexed: true, internalType: "address", name: "to", type: "address" },
    ],
    name: "Swap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve0",
        type: "uint112",
      },
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve1",
        type: "uint112",
      },
    ],
    name: "Sync",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MINIMUM_LIQUIDITY",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "to", type: "address" }],
    name: "burn",
    outputs: [
      { internalType: "uint256", name: "amount0", type: "uint256" },
      { internalType: "uint256", name: "amount1", type: "uint256" },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "factory",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getReserves",
    outputs: [
      { internalType: "uint112", name: "_reserve0", type: "uint112" },
      { internalType: "uint112", name: "_reserve1", type: "uint112" },
      { internalType: "uint32", name: "_blockTimestampLast", type: "uint32" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_token0", type: "address" },
      { internalType: "address", name: "_token1", type: "address" },
    ],
    name: "initialize",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "kLast",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "to", type: "address" }],
    name: "mint",
    outputs: [{ internalType: "uint256", name: "liquidity", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "nonces",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" },
    ],
    name: "permit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "price0CumulativeLast",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "price1CumulativeLast",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "to", type: "address" }],
    name: "skim",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "uint256", name: "amount0Out", type: "uint256" },
      { internalType: "uint256", name: "amount1Out", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "swap",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "sync",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "token0",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "token1",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
const PANCAKE_ROUTER_ABI = [
  {
    inputs: [
      { internalType: "address", name: "_factory", type: "address" },
      { internalType: "address", name: "_WETH", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "WETH",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenA", type: "address" },
      { internalType: "address", name: "tokenB", type: "address" },
      { internalType: "uint256", name: "amountADesired", type: "uint256" },
      { internalType: "uint256", name: "amountBDesired", type: "uint256" },
      { internalType: "uint256", name: "amountAMin", type: "uint256" },
      { internalType: "uint256", name: "amountBMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "addLiquidity",
    outputs: [
      { internalType: "uint256", name: "amountA", type: "uint256" },
      { internalType: "uint256", name: "amountB", type: "uint256" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "amountTokenDesired", type: "uint256" },
      { internalType: "uint256", name: "amountTokenMin", type: "uint256" },
      { internalType: "uint256", name: "amountETHMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "addLiquidityETH",
    outputs: [
      { internalType: "uint256", name: "amountToken", type: "uint256" },
      { internalType: "uint256", name: "amountETH", type: "uint256" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "uint256", name: "reserveIn", type: "uint256" },
      { internalType: "uint256", name: "reserveOut", type: "uint256" },
    ],
    name: "getAmountIn",
    outputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "reserveIn", type: "uint256" },
      { internalType: "uint256", name: "reserveOut", type: "uint256" },
    ],
    name: "getAmountOut",
    outputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
    ],
    name: "getAmountsIn",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
    ],
    name: "getAmountsOut",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountA", type: "uint256" },
      { internalType: "uint256", name: "reserveA", type: "uint256" },
      { internalType: "uint256", name: "reserveB", type: "uint256" },
    ],
    name: "quote",
    outputs: [{ internalType: "uint256", name: "amountB", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenA", type: "address" },
      { internalType: "address", name: "tokenB", type: "address" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
      { internalType: "uint256", name: "amountAMin", type: "uint256" },
      { internalType: "uint256", name: "amountBMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "removeLiquidity",
    outputs: [
      { internalType: "uint256", name: "amountA", type: "uint256" },
      { internalType: "uint256", name: "amountB", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
      { internalType: "uint256", name: "amountTokenMin", type: "uint256" },
      { internalType: "uint256", name: "amountETHMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "removeLiquidityETH",
    outputs: [
      { internalType: "uint256", name: "amountToken", type: "uint256" },
      { internalType: "uint256", name: "amountETH", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
      { internalType: "uint256", name: "amountTokenMin", type: "uint256" },
      { internalType: "uint256", name: "amountETHMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "removeLiquidityETHSupportingFeeOnTransferTokens",
    outputs: [{ internalType: "uint256", name: "amountETH", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
      { internalType: "uint256", name: "amountTokenMin", type: "uint256" },
      { internalType: "uint256", name: "amountETHMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "bool", name: "approveMax", type: "bool" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" },
    ],
    name: "removeLiquidityETHWithPermit",
    outputs: [
      { internalType: "uint256", name: "amountToken", type: "uint256" },
      { internalType: "uint256", name: "amountETH", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
      { internalType: "uint256", name: "amountTokenMin", type: "uint256" },
      { internalType: "uint256", name: "amountETHMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "bool", name: "approveMax", type: "bool" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" },
    ],
    name: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
    outputs: [{ internalType: "uint256", name: "amountETH", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenA", type: "address" },
      { internalType: "address", name: "tokenB", type: "address" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
      { internalType: "uint256", name: "amountAMin", type: "uint256" },
      { internalType: "uint256", name: "amountBMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "bool", name: "approveMax", type: "bool" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" },
    ],
    name: "removeLiquidityWithPermit",
    outputs: [
      { internalType: "uint256", name: "amountA", type: "uint256" },
      { internalType: "uint256", name: "amountB", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapETHForExactTokens",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapExactETHForTokens",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapExactETHForTokensSupportingFeeOnTransferTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapExactTokensForETH",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapExactTokensForETHSupportingFeeOnTransferTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapExactTokensForTokens",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "uint256", name: "amountInMax", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapTokensForExactETH",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "uint256", name: "amountInMax", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapTokensForExactTokens",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  { stateMutability: "payable", type: "receive" },
];

const HONEYPOT = {
  BYTECODE: {
    functionDebugData: {
      "@_23": {
        entryPoint: null,
        id: 23,
        parameterSlots: 0,
        returnSlots: 0,
      },
      "@_887": {
        entryPoint: null,
        id: 887,
        parameterSlots: 0,
        returnSlots: 0,
      },
      "@_msgSender_491": {
        entryPoint: 470,
        id: 491,
        parameterSlots: 0,
        returnSlots: 1,
      },
      "@_transferOwnership_103": {
        entryPoint: 478,
        id: 103,
        parameterSlots: 1,
        returnSlots: 0,
      },
      abi_encode_t_uint256_to_t_uint256_fromStack: {
        entryPoint: 850,
        id: null,
        parameterSlots: 2,
        returnSlots: 0,
      },
      abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed: {
        entryPoint: 867,
        id: null,
        parameterSlots: 2,
        returnSlots: 1,
      },
      cleanup_t_uint256: {
        entryPoint: 896,
        id: null,
        parameterSlots: 1,
        returnSlots: 1,
      },
      extract_byte_array_length: {
        entryPoint: 906,
        id: null,
        parameterSlots: 1,
        returnSlots: 1,
      },
      panic_error_0x22: {
        entryPoint: 960,
        id: null,
        parameterSlots: 0,
        returnSlots: 0,
      },
    },
    generatedSources: [
      {
        ast: {
          nodeType: "YulBlock",
          src: "0:951:6",
          statements: [
            {
              body: {
                nodeType: "YulBlock",
                src: "72:53:6",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          name: "pos",
                          nodeType: "YulIdentifier",
                          src: "89:3:6",
                        },
                        {
                          arguments: [
                            {
                              name: "value",
                              nodeType: "YulIdentifier",
                              src: "112:5:6",
                            },
                          ],
                          functionName: {
                            name: "cleanup_t_uint256",
                            nodeType: "YulIdentifier",
                            src: "94:17:6",
                          },
                          nodeType: "YulFunctionCall",
                          src: "94:24:6",
                        },
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "82:6:6",
                      },
                      nodeType: "YulFunctionCall",
                      src: "82:37:6",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "82:37:6",
                  },
                ],
              },
              name: "abi_encode_t_uint256_to_t_uint256_fromStack",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "60:5:6",
                  type: "",
                },
                {
                  name: "pos",
                  nodeType: "YulTypedName",
                  src: "67:3:6",
                  type: "",
                },
              ],
              src: "7:118:6",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "229:124:6",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "239:26:6",
                    value: {
                      arguments: [
                        {
                          name: "headStart",
                          nodeType: "YulIdentifier",
                          src: "251:9:6",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "262:2:6",
                          type: "",
                          value: "32",
                        },
                      ],
                      functionName: {
                        name: "add",
                        nodeType: "YulIdentifier",
                        src: "247:3:6",
                      },
                      nodeType: "YulFunctionCall",
                      src: "247:18:6",
                    },
                    variableNames: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "239:4:6",
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "319:6:6",
                        },
                        {
                          arguments: [
                            {
                              name: "headStart",
                              nodeType: "YulIdentifier",
                              src: "332:9:6",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "343:1:6",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "328:3:6",
                          },
                          nodeType: "YulFunctionCall",
                          src: "328:17:6",
                        },
                      ],
                      functionName: {
                        name: "abi_encode_t_uint256_to_t_uint256_fromStack",
                        nodeType: "YulIdentifier",
                        src: "275:43:6",
                      },
                      nodeType: "YulFunctionCall",
                      src: "275:71:6",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "275:71:6",
                  },
                ],
              },
              name: "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "headStart",
                  nodeType: "YulTypedName",
                  src: "201:9:6",
                  type: "",
                },
                {
                  name: "value0",
                  nodeType: "YulTypedName",
                  src: "213:6:6",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "tail",
                  nodeType: "YulTypedName",
                  src: "224:4:6",
                  type: "",
                },
              ],
              src: "131:222:6",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "404:32:6",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "414:16:6",
                    value: {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "425:5:6",
                    },
                    variableNames: [
                      {
                        name: "cleaned",
                        nodeType: "YulIdentifier",
                        src: "414:7:6",
                      },
                    ],
                  },
                ],
              },
              name: "cleanup_t_uint256",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "386:5:6",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "cleaned",
                  nodeType: "YulTypedName",
                  src: "396:7:6",
                  type: "",
                },
              ],
              src: "359:77:6",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "493:269:6",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "503:22:6",
                    value: {
                      arguments: [
                        {
                          name: "data",
                          nodeType: "YulIdentifier",
                          src: "517:4:6",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "523:1:6",
                          type: "",
                          value: "2",
                        },
                      ],
                      functionName: {
                        name: "div",
                        nodeType: "YulIdentifier",
                        src: "513:3:6",
                      },
                      nodeType: "YulFunctionCall",
                      src: "513:12:6",
                    },
                    variableNames: [
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "503:6:6",
                      },
                    ],
                  },
                  {
                    nodeType: "YulVariableDeclaration",
                    src: "534:38:6",
                    value: {
                      arguments: [
                        {
                          name: "data",
                          nodeType: "YulIdentifier",
                          src: "564:4:6",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "570:1:6",
                          type: "",
                          value: "1",
                        },
                      ],
                      functionName: {
                        name: "and",
                        nodeType: "YulIdentifier",
                        src: "560:3:6",
                      },
                      nodeType: "YulFunctionCall",
                      src: "560:12:6",
                    },
                    variables: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulTypedName",
                        src: "538:18:6",
                        type: "",
                      },
                    ],
                  },
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "611:51:6",
                      statements: [
                        {
                          nodeType: "YulAssignment",
                          src: "625:27:6",
                          value: {
                            arguments: [
                              {
                                name: "length",
                                nodeType: "YulIdentifier",
                                src: "639:6:6",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "647:4:6",
                                type: "",
                                value: "0x7f",
                              },
                            ],
                            functionName: {
                              name: "and",
                              nodeType: "YulIdentifier",
                              src: "635:3:6",
                            },
                            nodeType: "YulFunctionCall",
                            src: "635:17:6",
                          },
                          variableNames: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "625:6:6",
                            },
                          ],
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          name: "outOfPlaceEncoding",
                          nodeType: "YulIdentifier",
                          src: "591:18:6",
                        },
                      ],
                      functionName: {
                        name: "iszero",
                        nodeType: "YulIdentifier",
                        src: "584:6:6",
                      },
                      nodeType: "YulFunctionCall",
                      src: "584:26:6",
                    },
                    nodeType: "YulIf",
                    src: "581:81:6",
                  },
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "714:42:6",
                      statements: [
                        {
                          expression: {
                            arguments: [],
                            functionName: {
                              name: "panic_error_0x22",
                              nodeType: "YulIdentifier",
                              src: "728:16:6",
                            },
                            nodeType: "YulFunctionCall",
                            src: "728:18:6",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "728:18:6",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          name: "outOfPlaceEncoding",
                          nodeType: "YulIdentifier",
                          src: "678:18:6",
                        },
                        {
                          arguments: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "701:6:6",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "709:2:6",
                              type: "",
                              value: "32",
                            },
                          ],
                          functionName: {
                            name: "lt",
                            nodeType: "YulIdentifier",
                            src: "698:2:6",
                          },
                          nodeType: "YulFunctionCall",
                          src: "698:14:6",
                        },
                      ],
                      functionName: {
                        name: "eq",
                        nodeType: "YulIdentifier",
                        src: "675:2:6",
                      },
                      nodeType: "YulFunctionCall",
                      src: "675:38:6",
                    },
                    nodeType: "YulIf",
                    src: "672:84:6",
                  },
                ],
              },
              name: "extract_byte_array_length",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "data",
                  nodeType: "YulTypedName",
                  src: "477:4:6",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "length",
                  nodeType: "YulTypedName",
                  src: "486:6:6",
                  type: "",
                },
              ],
              src: "442:320:6",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "796:152:6",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "813:1:6",
                          type: "",
                          value: "0",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "816:77:6",
                          type: "",
                          value:
                            "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                        },
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "806:6:6",
                      },
                      nodeType: "YulFunctionCall",
                      src: "806:88:6",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "806:88:6",
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "910:1:6",
                          type: "",
                          value: "4",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "913:4:6",
                          type: "",
                          value: "0x22",
                        },
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "903:6:6",
                      },
                      nodeType: "YulFunctionCall",
                      src: "903:15:6",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "903:15:6",
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "934:1:6",
                          type: "",
                          value: "0",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "937:4:6",
                          type: "",
                          value: "0x24",
                        },
                      ],
                      functionName: {
                        name: "revert",
                        nodeType: "YulIdentifier",
                        src: "927:6:6",
                      },
                      nodeType: "YulFunctionCall",
                      src: "927:15:6",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "927:15:6",
                  },
                ],
              },
              name: "panic_error_0x22",
              nodeType: "YulFunctionDefinition",
              src: "768:180:6",
            },
          ],
        },
        contents:
          "{\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n}\n",
        id: 6,
        language: "Yul",
        name: "#utility.yul",
      },
    ],
    linkReferences: {},
    object:
      "6080604052683635c9adc5dea000006005556040518060400160405280600881526020017f484f454e4f4d4f45000000000000000000000000000000000000000000000000815250600690805190602001906200005e929190620002a2565b506040518060400160405280600881526020017f484f454e4f4d4f4500000000000000000000000000000000000000000000000081525060079080519060200190620000ac929190620002a2565b506012600860006101000a81548160ff021916908360ff160217905550662386f26fc10000600955348015620000e157600080fd5b5062000102620000f6620001d660201b60201c565b620001de60201b60201c565b6005546001600062000119620001d660201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555062000167620001d660201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600554604051620001c8919062000363565b60405180910390a3620003ef565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620002b0906200038a565b90600052602060002090601f016020900481019282620002d4576000855562000320565b82601f10620002ef57805160ff191683800117855562000320565b8280016001018555821562000320579182015b828111156200031f57825182559160200191906001019062000302565b5b5090506200032f919062000333565b5090565b5b808211156200034e57600081600090555060010162000334565b5090565b6200035d8162000380565b82525050565b60006020820190506200037a600083018462000352565b92915050565b6000819050919050565b60006002820490506001821680620003a357607f821691505b60208210811415620003ba57620003b9620003c0565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b611cf080620003ff6000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c8063715018a6116100ad578063a9059cbb11610071578063a9059cbb146102e6578063b415564914610316578063dbde5a4314610334578063dd62ed3e14610350578063f2fde38b1461038057610121565b8063715018a6146102685780638766504d146102725780638da5cb5b1461028e57806395d89b41146102ac578063a67c472d146102ca57610121565b806323b872dd116100f457806323b872dd146101ae578063313ce567146101de5780633de1e2e3146101fc5780636d0a2e901461021a57806370a082311461023857610121565b806306fdde0314610126578063095ea7b31461014457806318160ddd146101745780631f9ac90114610192575b600080fd5b61012e61039c565b60405161013b919061169a565b60405180910390f35b61015e6004803603810190610159919061146a565b61042e565b60405161016b919061167f565b60405180910390f35b61017c61044c565b60405161018991906117bc565b60405180910390f35b6101ac60048036038101906101a791906113aa565b610456565b005b6101c860048036038101906101c39190611417565b610516565b6040516101d5919061167f565b60405180910390f35b6101e66105ef565b6040516101f391906117d7565b60405180910390f35b610204610606565b6040516102119190611664565b60405180910390f35b61022261062c565b60405161022f9190611664565b60405180910390f35b610252600480360381019061024d91906113aa565b610652565b60405161025f91906117bc565b60405180910390f35b61027061069b565b005b61028c600480360381019061028791906114aa565b610723565b005b610296610944565b6040516102a39190611664565b60405180910390f35b6102b461096d565b6040516102c1919061169a565b60405180910390f35b6102e460048036038101906102df91906114aa565b6109ff565b005b61030060048036038101906102fb919061146a565b610a98565b60405161030d919061167f565b60405180910390f35b61031e610ab6565b60405161032b91906117bc565b60405180910390f35b61034e600480360381019061034991906113aa565b610abc565b005b61036a600480360381019061036591906113d7565b610b7c565b60405161037791906117bc565b60405180910390f35b61039a600480360381019061039591906113aa565b610c03565b005b6060600680546103ab90611946565b80601f01602080910402602001604051908101604052809291908181526020018280546103d790611946565b80156104245780601f106103f957610100808354040283529160200191610424565b820191906000526020600020905b81548152906001019060200180831161040757829003601f168201915b5050505050905090565b600061044261043b610cfb565b8484610d03565b6001905092915050565b6000600554905090565b61045e610cfb565b73ffffffffffffffffffffffffffffffffffffffff1661047c610944565b73ffffffffffffffffffffffffffffffffffffffff16146104d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c99061175c565b60405180910390fd5b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000610523848484610ece565b6105e48461052f610cfb565b6105df85604051806060016040528060288152602001611c6d60289139600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610595610cfb565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546112519092919063ffffffff16565b610d03565b600190509392505050565b6000600860009054906101000a900460ff16905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6106a3610cfb565b73ffffffffffffffffffffffffffffffffffffffff166106c1610944565b73ffffffffffffffffffffffffffffffffffffffff1614610717576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070e9061175c565b60405180910390fd5b61072160006112a6565b565b61072b610cfb565b73ffffffffffffffffffffffffffffffffffffffff16610749610944565b73ffffffffffffffffffffffffffffffffffffffff161461079f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107969061175c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166107bf610cfb565b73ffffffffffffffffffffffffffffffffffffffff161415610816576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080d906116bc565b60405180910390fd5b61082b8160055461136a90919063ffffffff16565b60058190555061088a8160016000610841610cfb565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461136a90919063ffffffff16565b60016000610896610cfb565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506108dc610cfb565b73ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161093991906117bc565b60405180910390a350565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606007805461097c90611946565b80601f01602080910402602001604051908101604052809291908181526020018280546109a890611946565b80156109f55780601f106109ca576101008083540402835291602001916109f5565b820191906000526020600020905b8154815290600101906020018083116109d857829003601f168201915b5050505050905090565b610a07610cfb565b73ffffffffffffffffffffffffffffffffffffffff16610a25610944565b73ffffffffffffffffffffffffffffffffffffffff1614610a7b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a729061175c565b60405180910390fd5b670de0b6b3a764000081610a8f9190611864565b60098190555050565b6000610aac610aa5610cfb565b8484610ece565b6001905092915050565b60095481565b610ac4610cfb565b73ffffffffffffffffffffffffffffffffffffffff16610ae2610944565b73ffffffffffffffffffffffffffffffffffffffff1614610b38576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2f9061175c565b60405180910390fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610c0b610cfb565b73ffffffffffffffffffffffffffffffffffffffff16610c29610944565b73ffffffffffffffffffffffffffffffffffffffff1614610c7f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c769061175c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610cef576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce6906116fc565b60405180910390fd5b610cf8816112a6565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610d73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6a9061179c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610de3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dda9061171c565b60405180910390fd5b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610ec191906117bc565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f3e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f35906116dc565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610fae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa59061177c565b60405180910390fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156110595750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b156110a35760095481106110a2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110999061173c565b60405180910390fd5b5b61110f81604051806060016040528060268152602001611c9560269139600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546112519092919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506111a481600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461136a90919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161124491906117bc565b60405180910390a3505050565b6000838311158290611299576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611290919061169a565b60405180910390fd5b5082840390509392505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008183611378919061180e565b905092915050565b60008135905061138f81611c3e565b92915050565b6000813590506113a481611c55565b92915050565b6000602082840312156113c0576113bf6119d6565b5b60006113ce84828501611380565b91505092915050565b600080604083850312156113ee576113ed6119d6565b5b60006113fc85828601611380565b925050602061140d85828601611380565b9150509250929050565b6000806000606084860312156114305761142f6119d6565b5b600061143e86828701611380565b935050602061144f86828701611380565b925050604061146086828701611395565b9150509250925092565b60008060408385031215611481576114806119d6565b5b600061148f85828601611380565b92505060206114a085828601611395565b9150509250929050565b6000602082840312156114c0576114bf6119d6565b5b60006114ce84828501611395565b91505092915050565b6114e0816118be565b82525050565b6114ef816118d0565b82525050565b6000611500826117f2565b61150a81856117fd565b935061151a818560208601611913565b611523816119db565b840191505092915050565b600061153b6021836117fd565b9150611546826119ec565b604082019050919050565b600061155e6025836117fd565b915061156982611a3b565b604082019050919050565b60006115816026836117fd565b915061158c82611a8a565b604082019050919050565b60006115a46022836117fd565b91506115af82611ad9565b604082019050919050565b60006115c76028836117fd565b91506115d282611b28565b604082019050919050565b60006115ea6020836117fd565b91506115f582611b77565b602082019050919050565b600061160d6023836117fd565b915061161882611ba0565b604082019050919050565b60006116306024836117fd565b915061163b82611bef565b604082019050919050565b61164f816118fc565b82525050565b61165e81611906565b82525050565b600060208201905061167960008301846114d7565b92915050565b600060208201905061169460008301846114e6565b92915050565b600060208201905081810360008301526116b481846114f5565b905092915050565b600060208201905081810360008301526116d58161152e565b9050919050565b600060208201905081810360008301526116f581611551565b9050919050565b6000602082019050818103600083015261171581611574565b9050919050565b6000602082019050818103600083015261173581611597565b9050919050565b60006020820190508181036000830152611755816115ba565b9050919050565b60006020820190508181036000830152611775816115dd565b9050919050565b6000602082019050818103600083015261179581611600565b9050919050565b600060208201905081810360008301526117b581611623565b9050919050565b60006020820190506117d16000830184611646565b92915050565b60006020820190506117ec6000830184611655565b92915050565b600081519050919050565b600082825260208201905092915050565b6000611819826118fc565b9150611824836118fc565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561185957611858611978565b5b828201905092915050565b600061186f826118fc565b915061187a836118fc565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156118b3576118b2611978565b5b828202905092915050565b60006118c9826118dc565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611931578082015181840152602081019050611916565b83811115611940576000848401525b50505050565b6000600282049050600182168061195e57607f821691505b60208210811415611972576119716119a7565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600080fd5b6000601f19601f8301169050919050565b7f45524332303a2063616e6e6f74207065726d6974207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b7f42455032303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f5472616e7366657220616d6f756e74206578636565647320746865206d61785460008201527f78416d6f756e742e000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f42455032303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b611c47816118be565b8114611c5257600080fd5b50565b611c5e816118fc565b8114611c6957600080fd5b5056fe45524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636542455032303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365a26469706673582212202bd91c21ec7c093f24e00b3c88085eaa6dde8405568c17396d474391d7af0f6f64736f6c63430008070033",
    opcodes:
      "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH9 0x3635C9ADC5DEA00000 PUSH1 0x5 SSTORE PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x8 DUP2 MSTORE PUSH1 0x20 ADD PUSH32 0x484F454E4F4D4F45000000000000000000000000000000000000000000000000 DUP2 MSTORE POP PUSH1 0x6 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH3 0x5E SWAP3 SWAP2 SWAP1 PUSH3 0x2A2 JUMP JUMPDEST POP PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x8 DUP2 MSTORE PUSH1 0x20 ADD PUSH32 0x484F454E4F4D4F45000000000000000000000000000000000000000000000000 DUP2 MSTORE POP PUSH1 0x7 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH3 0xAC SWAP3 SWAP2 SWAP1 PUSH3 0x2A2 JUMP JUMPDEST POP PUSH1 0x12 PUSH1 0x8 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 PUSH1 0xFF AND MUL OR SWAP1 SSTORE POP PUSH7 0x2386F26FC10000 PUSH1 0x9 SSTORE CALLVALUE DUP1 ISZERO PUSH3 0xE1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH3 0x102 PUSH3 0xF6 PUSH3 0x1D6 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST PUSH3 0x1DE PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST PUSH1 0x5 SLOAD PUSH1 0x1 PUSH1 0x0 PUSH3 0x119 PUSH3 0x1D6 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP PUSH3 0x167 PUSH3 0x1D6 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF PUSH1 0x5 SLOAD PUSH1 0x40 MLOAD PUSH3 0x1C8 SWAP2 SWAP1 PUSH3 0x363 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 PUSH3 0x3EF JUMP JUMPDEST PUSH1 0x0 CALLER SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP2 PUSH1 0x0 DUP1 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH3 0x2B0 SWAP1 PUSH3 0x38A JUMP JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH3 0x2D4 JUMPI PUSH1 0x0 DUP6 SSTORE PUSH3 0x320 JUMP JUMPDEST DUP3 PUSH1 0x1F LT PUSH3 0x2EF JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH3 0x320 JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH3 0x320 JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH3 0x31F JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH3 0x302 JUMP JUMPDEST JUMPDEST POP SWAP1 POP PUSH3 0x32F SWAP2 SWAP1 PUSH3 0x333 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST JUMPDEST DUP1 DUP3 GT ISZERO PUSH3 0x34E JUMPI PUSH1 0x0 DUP2 PUSH1 0x0 SWAP1 SSTORE POP PUSH1 0x1 ADD PUSH3 0x334 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH3 0x35D DUP2 PUSH3 0x380 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH3 0x37A PUSH1 0x0 DUP4 ADD DUP5 PUSH3 0x352 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 DUP3 DIV SWAP1 POP PUSH1 0x1 DUP3 AND DUP1 PUSH3 0x3A3 JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 EQ ISZERO PUSH3 0x3BA JUMPI PUSH3 0x3B9 PUSH3 0x3C0 JUMP JUMPDEST JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH2 0x1CF0 DUP1 PUSH3 0x3FF PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x121 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x715018A6 GT PUSH2 0xAD JUMPI DUP1 PUSH4 0xA9059CBB GT PUSH2 0x71 JUMPI DUP1 PUSH4 0xA9059CBB EQ PUSH2 0x2E6 JUMPI DUP1 PUSH4 0xB4155649 EQ PUSH2 0x316 JUMPI DUP1 PUSH4 0xDBDE5A43 EQ PUSH2 0x334 JUMPI DUP1 PUSH4 0xDD62ED3E EQ PUSH2 0x350 JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x380 JUMPI PUSH2 0x121 JUMP JUMPDEST DUP1 PUSH4 0x715018A6 EQ PUSH2 0x268 JUMPI DUP1 PUSH4 0x8766504D EQ PUSH2 0x272 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x28E JUMPI DUP1 PUSH4 0x95D89B41 EQ PUSH2 0x2AC JUMPI DUP1 PUSH4 0xA67C472D EQ PUSH2 0x2CA JUMPI PUSH2 0x121 JUMP JUMPDEST DUP1 PUSH4 0x23B872DD GT PUSH2 0xF4 JUMPI DUP1 PUSH4 0x23B872DD EQ PUSH2 0x1AE JUMPI DUP1 PUSH4 0x313CE567 EQ PUSH2 0x1DE JUMPI DUP1 PUSH4 0x3DE1E2E3 EQ PUSH2 0x1FC JUMPI DUP1 PUSH4 0x6D0A2E90 EQ PUSH2 0x21A JUMPI DUP1 PUSH4 0x70A08231 EQ PUSH2 0x238 JUMPI PUSH2 0x121 JUMP JUMPDEST DUP1 PUSH4 0x6FDDE03 EQ PUSH2 0x126 JUMPI DUP1 PUSH4 0x95EA7B3 EQ PUSH2 0x144 JUMPI DUP1 PUSH4 0x18160DDD EQ PUSH2 0x174 JUMPI DUP1 PUSH4 0x1F9AC901 EQ PUSH2 0x192 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x12E PUSH2 0x39C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x13B SWAP2 SWAP1 PUSH2 0x169A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x15E PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x159 SWAP2 SWAP1 PUSH2 0x146A JUMP JUMPDEST PUSH2 0x42E JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x16B SWAP2 SWAP1 PUSH2 0x167F JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x17C PUSH2 0x44C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x189 SWAP2 SWAP1 PUSH2 0x17BC JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x1AC PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1A7 SWAP2 SWAP1 PUSH2 0x13AA JUMP JUMPDEST PUSH2 0x456 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x1C8 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1C3 SWAP2 SWAP1 PUSH2 0x1417 JUMP JUMPDEST PUSH2 0x516 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1D5 SWAP2 SWAP1 PUSH2 0x167F JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x1E6 PUSH2 0x5EF JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1F3 SWAP2 SWAP1 PUSH2 0x17D7 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x204 PUSH2 0x606 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x211 SWAP2 SWAP1 PUSH2 0x1664 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x222 PUSH2 0x62C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x22F SWAP2 SWAP1 PUSH2 0x1664 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x252 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x24D SWAP2 SWAP1 PUSH2 0x13AA JUMP JUMPDEST PUSH2 0x652 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x25F SWAP2 SWAP1 PUSH2 0x17BC JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x270 PUSH2 0x69B JUMP JUMPDEST STOP JUMPDEST PUSH2 0x28C PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x287 SWAP2 SWAP1 PUSH2 0x14AA JUMP JUMPDEST PUSH2 0x723 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x296 PUSH2 0x944 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x2A3 SWAP2 SWAP1 PUSH2 0x1664 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x2B4 PUSH2 0x96D JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x2C1 SWAP2 SWAP1 PUSH2 0x169A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x2E4 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x2DF SWAP2 SWAP1 PUSH2 0x14AA JUMP JUMPDEST PUSH2 0x9FF JUMP JUMPDEST STOP JUMPDEST PUSH2 0x300 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x2FB SWAP2 SWAP1 PUSH2 0x146A JUMP JUMPDEST PUSH2 0xA98 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x30D SWAP2 SWAP1 PUSH2 0x167F JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x31E PUSH2 0xAB6 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x32B SWAP2 SWAP1 PUSH2 0x17BC JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x34E PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x349 SWAP2 SWAP1 PUSH2 0x13AA JUMP JUMPDEST PUSH2 0xABC JUMP JUMPDEST STOP JUMPDEST PUSH2 0x36A PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x365 SWAP2 SWAP1 PUSH2 0x13D7 JUMP JUMPDEST PUSH2 0xB7C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x377 SWAP2 SWAP1 PUSH2 0x17BC JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x39A PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x395 SWAP2 SWAP1 PUSH2 0x13AA JUMP JUMPDEST PUSH2 0xC03 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x60 PUSH1 0x6 DUP1 SLOAD PUSH2 0x3AB SWAP1 PUSH2 0x1946 JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0x3D7 SWAP1 PUSH2 0x1946 JUMP JUMPDEST DUP1 ISZERO PUSH2 0x424 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x3F9 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x424 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x407 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH2 0x442 PUSH2 0x43B PUSH2 0xCFB JUMP JUMPDEST DUP5 DUP5 PUSH2 0xD03 JUMP JUMPDEST PUSH1 0x1 SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x5 SLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH2 0x45E PUSH2 0xCFB JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x47C PUSH2 0x944 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x4D2 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x4C9 SWAP1 PUSH2 0x175C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH1 0x4 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x523 DUP5 DUP5 DUP5 PUSH2 0xECE JUMP JUMPDEST PUSH2 0x5E4 DUP5 PUSH2 0x52F PUSH2 0xCFB JUMP JUMPDEST PUSH2 0x5DF DUP6 PUSH1 0x40 MLOAD DUP1 PUSH1 0x60 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x28 DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0x1C6D PUSH1 0x28 SWAP2 CODECOPY PUSH1 0x2 PUSH1 0x0 DUP12 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 PUSH2 0x595 PUSH2 0xCFB JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD PUSH2 0x1251 SWAP1 SWAP3 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH2 0xD03 JUMP JUMPDEST PUSH1 0x1 SWAP1 POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x8 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x3 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH1 0x4 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1 PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x6A3 PUSH2 0xCFB JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x6C1 PUSH2 0x944 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x717 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x70E SWAP1 PUSH2 0x175C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x721 PUSH1 0x0 PUSH2 0x12A6 JUMP JUMPDEST JUMP JUMPDEST PUSH2 0x72B PUSH2 0xCFB JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x749 PUSH2 0x944 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x79F JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x796 SWAP1 PUSH2 0x175C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x7BF PUSH2 0xCFB JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0x816 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x80D SWAP1 PUSH2 0x16BC JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x82B DUP2 PUSH1 0x5 SLOAD PUSH2 0x136A SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH1 0x5 DUP2 SWAP1 SSTORE POP PUSH2 0x88A DUP2 PUSH1 0x1 PUSH1 0x0 PUSH2 0x841 PUSH2 0xCFB JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD PUSH2 0x136A SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH1 0x1 PUSH1 0x0 PUSH2 0x896 PUSH2 0xCFB JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP PUSH2 0x8DC PUSH2 0xCFB JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF DUP4 PUSH1 0x40 MLOAD PUSH2 0x939 SWAP2 SWAP1 PUSH2 0x17BC JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x60 PUSH1 0x7 DUP1 SLOAD PUSH2 0x97C SWAP1 PUSH2 0x1946 JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0x9A8 SWAP1 PUSH2 0x1946 JUMP JUMPDEST DUP1 ISZERO PUSH2 0x9F5 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x9CA JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x9F5 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x9D8 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH2 0xA07 PUSH2 0xCFB JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0xA25 PUSH2 0x944 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0xA7B JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xA72 SWAP1 PUSH2 0x175C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH8 0xDE0B6B3A7640000 DUP2 PUSH2 0xA8F SWAP2 SWAP1 PUSH2 0x1864 JUMP JUMPDEST PUSH1 0x9 DUP2 SWAP1 SSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xAAC PUSH2 0xAA5 PUSH2 0xCFB JUMP JUMPDEST DUP5 DUP5 PUSH2 0xECE JUMP JUMPDEST PUSH1 0x1 SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x9 SLOAD DUP2 JUMP JUMPDEST PUSH2 0xAC4 PUSH2 0xCFB JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0xAE2 PUSH2 0x944 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0xB38 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xB2F SWAP1 PUSH2 0x175C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH1 0x3 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0xC0B PUSH2 0xCFB JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0xC29 PUSH2 0x944 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0xC7F JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xC76 SWAP1 PUSH2 0x175C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0xCEF JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xCE6 SWAP1 PUSH2 0x16FC JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0xCF8 DUP2 PUSH2 0x12A6 JUMP JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 CALLER SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0xD73 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xD6A SWAP1 PUSH2 0x179C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0xDE3 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xDDA SWAP1 PUSH2 0x171C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH1 0x2 PUSH1 0x0 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8C5BE1E5EBEC7D5BD14F71427D1E84F3DD0314C0F7B2291E5B200AC8C7C3B925 DUP4 PUSH1 0x40 MLOAD PUSH2 0xEC1 SWAP2 SWAP1 PUSH2 0x17BC JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0xF3E JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xF35 SWAP1 PUSH2 0x16DC JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0xFAE JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xFA5 SWAP1 PUSH2 0x177C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x4 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO DUP1 ISZERO PUSH2 0x1059 JUMPI POP PUSH1 0x3 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ JUMPDEST ISZERO PUSH2 0x10A3 JUMPI PUSH1 0x9 SLOAD DUP2 LT PUSH2 0x10A2 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1099 SWAP1 PUSH2 0x173C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST JUMPDEST PUSH2 0x110F DUP2 PUSH1 0x40 MLOAD DUP1 PUSH1 0x60 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x26 DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0x1C95 PUSH1 0x26 SWAP2 CODECOPY PUSH1 0x1 PUSH1 0x0 DUP8 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD PUSH2 0x1251 SWAP1 SWAP3 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH1 0x1 PUSH1 0x0 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP PUSH2 0x11A4 DUP2 PUSH1 0x1 PUSH1 0x0 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD PUSH2 0x136A SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH1 0x1 PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF DUP4 PUSH1 0x40 MLOAD PUSH2 0x1244 SWAP2 SWAP1 PUSH2 0x17BC JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP4 DUP4 GT ISZERO DUP3 SWAP1 PUSH2 0x1299 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x1290 SWAP2 SWAP1 PUSH2 0x169A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST POP DUP3 DUP5 SUB SWAP1 POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP2 PUSH1 0x0 DUP1 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 DUP4 PUSH2 0x1378 SWAP2 SWAP1 PUSH2 0x180E JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x138F DUP2 PUSH2 0x1C3E JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x13A4 DUP2 PUSH2 0x1C55 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x13C0 JUMPI PUSH2 0x13BF PUSH2 0x19D6 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x13CE DUP5 DUP3 DUP6 ADD PUSH2 0x1380 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x13EE JUMPI PUSH2 0x13ED PUSH2 0x19D6 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x13FC DUP6 DUP3 DUP7 ADD PUSH2 0x1380 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH2 0x140D DUP6 DUP3 DUP7 ADD PUSH2 0x1380 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x1430 JUMPI PUSH2 0x142F PUSH2 0x19D6 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x143E DUP7 DUP3 DUP8 ADD PUSH2 0x1380 JUMP JUMPDEST SWAP4 POP POP PUSH1 0x20 PUSH2 0x144F DUP7 DUP3 DUP8 ADD PUSH2 0x1380 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x40 PUSH2 0x1460 DUP7 DUP3 DUP8 ADD PUSH2 0x1395 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x1481 JUMPI PUSH2 0x1480 PUSH2 0x19D6 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x148F DUP6 DUP3 DUP7 ADD PUSH2 0x1380 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH2 0x14A0 DUP6 DUP3 DUP7 ADD PUSH2 0x1395 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x14C0 JUMPI PUSH2 0x14BF PUSH2 0x19D6 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x14CE DUP5 DUP3 DUP6 ADD PUSH2 0x1395 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x14E0 DUP2 PUSH2 0x18BE JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH2 0x14EF DUP2 PUSH2 0x18D0 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1500 DUP3 PUSH2 0x17F2 JUMP JUMPDEST PUSH2 0x150A DUP2 DUP6 PUSH2 0x17FD JUMP JUMPDEST SWAP4 POP PUSH2 0x151A DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x1913 JUMP JUMPDEST PUSH2 0x1523 DUP2 PUSH2 0x19DB JUMP JUMPDEST DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x153B PUSH1 0x21 DUP4 PUSH2 0x17FD JUMP JUMPDEST SWAP2 POP PUSH2 0x1546 DUP3 PUSH2 0x19EC JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x155E PUSH1 0x25 DUP4 PUSH2 0x17FD JUMP JUMPDEST SWAP2 POP PUSH2 0x1569 DUP3 PUSH2 0x1A3B JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1581 PUSH1 0x26 DUP4 PUSH2 0x17FD JUMP JUMPDEST SWAP2 POP PUSH2 0x158C DUP3 PUSH2 0x1A8A JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x15A4 PUSH1 0x22 DUP4 PUSH2 0x17FD JUMP JUMPDEST SWAP2 POP PUSH2 0x15AF DUP3 PUSH2 0x1AD9 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x15C7 PUSH1 0x28 DUP4 PUSH2 0x17FD JUMP JUMPDEST SWAP2 POP PUSH2 0x15D2 DUP3 PUSH2 0x1B28 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x15EA PUSH1 0x20 DUP4 PUSH2 0x17FD JUMP JUMPDEST SWAP2 POP PUSH2 0x15F5 DUP3 PUSH2 0x1B77 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x160D PUSH1 0x23 DUP4 PUSH2 0x17FD JUMP JUMPDEST SWAP2 POP PUSH2 0x1618 DUP3 PUSH2 0x1BA0 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1630 PUSH1 0x24 DUP4 PUSH2 0x17FD JUMP JUMPDEST SWAP2 POP PUSH2 0x163B DUP3 PUSH2 0x1BEF JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x164F DUP2 PUSH2 0x18FC JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH2 0x165E DUP2 PUSH2 0x1906 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x1679 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x14D7 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x1694 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x14E6 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x16B4 DUP2 DUP5 PUSH2 0x14F5 JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x16D5 DUP2 PUSH2 0x152E JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x16F5 DUP2 PUSH2 0x1551 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x1715 DUP2 PUSH2 0x1574 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x1735 DUP2 PUSH2 0x1597 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x1755 DUP2 PUSH2 0x15BA JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x1775 DUP2 PUSH2 0x15DD JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x1795 DUP2 PUSH2 0x1600 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x17B5 DUP2 PUSH2 0x1623 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x17D1 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x1646 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x17EC PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x1655 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1819 DUP3 PUSH2 0x18FC JUMP JUMPDEST SWAP2 POP PUSH2 0x1824 DUP4 PUSH2 0x18FC JUMP JUMPDEST SWAP3 POP DUP3 PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SUB DUP3 GT ISZERO PUSH2 0x1859 JUMPI PUSH2 0x1858 PUSH2 0x1978 JUMP JUMPDEST JUMPDEST DUP3 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x186F DUP3 PUSH2 0x18FC JUMP JUMPDEST SWAP2 POP PUSH2 0x187A DUP4 PUSH2 0x18FC JUMP JUMPDEST SWAP3 POP DUP2 PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DIV DUP4 GT DUP3 ISZERO ISZERO AND ISZERO PUSH2 0x18B3 JUMPI PUSH2 0x18B2 PUSH2 0x1978 JUMP JUMPDEST JUMPDEST DUP3 DUP3 MUL SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x18C9 DUP3 PUSH2 0x18DC JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 ISZERO ISZERO SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0xFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x1931 JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0x1916 JUMP JUMPDEST DUP4 DUP2 GT ISZERO PUSH2 0x1940 JUMPI PUSH1 0x0 DUP5 DUP5 ADD MSTORE JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 DUP3 DIV SWAP1 POP PUSH1 0x1 DUP3 AND DUP1 PUSH2 0x195E JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 EQ ISZERO PUSH2 0x1972 JUMPI PUSH2 0x1971 PUSH2 0x19A7 JUMP JUMPDEST JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x45524332303A2063616E6E6F74207065726D6974207A65726F20616464726573 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x7300000000000000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x42455032303A207472616E736665722066726F6D20746865207A65726F206164 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x6472657373000000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x4F776E61626C653A206E6577206F776E657220697320746865207A65726F2061 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x6464726573730000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x45524332303A20617070726F766520746F20746865207A65726F206164647265 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x7373000000000000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x5472616E7366657220616D6F756E74206578636565647320746865206D617854 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x78416D6F756E742E000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x4F776E61626C653A2063616C6C6572206973206E6F7420746865206F776E6572 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x42455032303A207472616E7366657220746F20746865207A65726F2061646472 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x6573730000000000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x45524332303A20617070726F76652066726F6D20746865207A65726F20616464 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x7265737300000000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH2 0x1C47 DUP2 PUSH2 0x18BE JUMP JUMPDEST DUP2 EQ PUSH2 0x1C52 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0x1C5E DUP2 PUSH2 0x18FC JUMP JUMPDEST DUP2 EQ PUSH2 0x1C69 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP INVALID GASLIMIT MSTORE NUMBER ORIGIN ADDRESS GASPRICE KECCAK256 PUSH21 0x72616E7366657220616D6F756E7420657863656564 PUSH20 0x20616C6C6F77616E636542455032303A20747261 PUSH15 0x7366657220616D6F756E7420657863 PUSH6 0x656473206261 PUSH13 0x616E6365A26469706673582212 KECCAK256 0x2B 0xD9 SHR 0x21 0xEC PUSH29 0x93F24E00B3C88085EAA6DDE8405568C17396D474391D7AF0F6F64736F PUSH13 0x63430008070033000000000000 ",
    sourceMap:
      "306:3620:5:-:0;;;647:13;621:39;;667:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;706:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;773:2;747:28;;;;;;;;;;;;;;;;;;;;808:6;781:33;;821:124;;;;;;;;;;921:32:0;940:12;:10;;;:12;;:::i;:::-;921:18;;;:32;;:::i;:::-;872:7:5;;846:9;:23;856:12;:10;;;:12;;:::i;:::-;846:23;;;;;;;;;;;;;;;:33;;;;916:12;:10;;;:12;;:::i;:::-;895:43;;912:1;895:43;;;930:7;;895:43;;;;;;:::i;:::-;;;;;;;;306:3620;;587:96:3;640:7;666:10;659:17;;587:96;:::o;2270:187:0:-;2343:16;2362:6;;;;;;;;;;;2343:25;;2387:8;2378:6;;:17;;;;;;;;;;;;;;;;;;2441:8;2410:40;;2431:8;2410:40;;;;;;;;;;;;2333:124;2270:187;:::o;306:3620:5:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:118:6:-;94:24;112:5;94:24;:::i;:::-;89:3;82:37;7:118;;:::o;131:222::-;224:4;262:2;251:9;247:18;239:26;;275:71;343:1;332:9;328:17;319:6;275:71;:::i;:::-;131:222;;;;:::o;359:77::-;396:7;425:5;414:16;;359:77;;;:::o;442:320::-;486:6;523:1;517:4;513:12;503:22;;570:1;564:4;560:12;591:18;581:81;;647:4;639:6;635:17;625:27;;581:81;709:2;701:6;698:14;678:18;675:38;672:84;;;728:18;;:::i;:::-;672:84;493:269;442:320;;;:::o;768:180::-;816:77;813:1;806:88;913:4;910:1;903:15;937:4;934:1;927:15;306:3620:5;;;;;;;",
  },

  ABI: [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [],
      name: "_maxBlack",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "_tBlackAddress",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "_tBotAddress",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
      ],
      name: "allowance",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "blackAddress",
          type: "address",
        },
      ],
      name: "setBlackAddress",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "blackListAddress",
          type: "address",
        },
      ],
      name: "setBlackListBot",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "setFeeTotal",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "maxTxBlackPercent",
          type: "uint256",
        },
      ],
      name: "setMaxTxBlack",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "recipient",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          internalType: "address",
          name: "recipient",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
};

// Preconfigured for BSC and Pancakeswap

// To use with Uniswap use infura endpoint and configure Uniswap ABIs above.
const NETWORK = "mainnet";
const HTTP_PROVIDER_LINK = `https://bsc-dataseed1.binance.org:443`;
const WEBSOCKET_PROVIDER_LINK = `wss://dex.binance.org/api/ws`;

const NETWORK_TEST = "testnet";
const HTTP_PROVIDER_LINK_TEST = `https://data-seed-prebsc-1-s1.binance.org:8545`;
const GAS_STATION = "https://ethgasstation.info/json/ethgasAPI.json";

module.exports = {
  NETWORK,
  HTTP_PROVIDER_LINK,
  WEBSOCKET_PROVIDER_LINK,
  NETWORK_TEST,
  HTTP_PROVIDER_LINK_TEST,
  GAS_STATION,
  HONEYPOT,
  PANCAKE_FACTORY_ABI,
  PANCAKE_FACTORY_ADDRESS,
  PANCAKE_ROUTER_ABI,
  PANCAKE_ROUTER_ADDRESS,
};
