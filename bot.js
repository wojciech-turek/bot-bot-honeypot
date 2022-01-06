const Web3 = require("web3");
const abiDecoder = require("abi-decoder");
const axios = require("axios");
const BigNumber = require("big-number");

const honey = require("./artifacts/honeyPot_metadata.json");

const {
  NETWORK,
  PANCAKE_ROUTER_ADDRESS,
  PANCAKE_FACTORY_ADDRESS,
  PANCAKE_ROUTER_ABI,
  PANCAKE_FACTORY_ABI,
  HTTP_PROVIDER_LINK,
  WEBSOCKET_PROVIDER_LINK,
  HTTP_PROVIDER_LINK_TEST,
  GAS_STATION,
  HONEYPOT,
} = require("./constants.js");

const { PRIVATE_KEY } = require("./env.js");

const WBNB_TOKEN_ADDRESS = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";

let web3;
let web3Ws;
let pancakeRouter;
let pancakeFactory;
let contract;
let tokenAddress;
let contractInstance;
let account;

async function createWeb3() {
  try {
    web3 = new Web3(new Web3.providers.HttpProvider(HTTP_PROVIDER_LINK_TEST));
    web3Ws = new Web3(
      new Web3.providers.WebsocketProvider(WEBSOCKET_PROVIDER_LINK)
    );
    pancakeRouter = new web3.eth.Contract(
      PANCAKE_ROUTER_ABI,
      PANCAKE_ROUTER_ADDRESS
    );
    pancakeFactory = new web3.eth.Contract(
      PANCAKE_FACTORY_ABI,
      PANCAKE_FACTORY_ADDRESS
    );
    abiDecoder.addABI(PANCAKE_ROUTER_ABI);
    return true;
  } catch (error) {
    console.log("Error creating web3Provider");
    return false;
  }
}

const createPool = async () => {
  try {
    const max_amount =
      "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
    await contractInstance.methods
      .approve(PANCAKE_ROUTER_ADDRESS, max_amount)
      .send({
        from: account.address,
        gas: 50000,
      });
    await contractInstance.methods
      .approve(PANCAKE_FACTORY_ADDRESS, max_amount)
      .send({
        from: account.address,
        gas: 50000,
      });
  } catch (err) {
    console.log("Approving failed");
    console.log(err);
  }
  try {
    let pool_address = await pancakeRouter.methods
      .addLiquidityETH(
        tokenAddress,
        1000000000000000000000n, //1000 * 10**18
        1000000000000000000000n,
        10000000000000000n,
        10000000000000000n, // 0.01BNB
        account.address,
        1641459505n
      )
      .send({
        from: account.address,
        gas: 5000000,
      });
    console.log(pool_address);
  } catch (err) {
    console.log("Providing liquidity error");
    console.log(err);
  }
};

async function main() {
  try {
    if ((await createWeb3()) == false) {
      console.log("Web3 Create Error");
      process.exit();
    }

    let user_wallet;
    try {
      user_wallet = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);
    } catch (error) {
      console.log(
        "\x1b[31m%s\x1b[0m",
        "Your private key is invalid. Update env.js with correct PRIVATE_KEY"
      );
      throw error;
    }
    try {
      account = await web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);
      web3.eth.accounts.wallet.add(account);
      try {
        contract = await new web3.eth.Contract(HONEYPOT.ABI)
          .deploy({
            data: HONEYPOT.BYTECODE.object,
          })
          .send({ from: account.address, gas: 3000000 });
        tokenAddress = contract._address;
      } catch (err) {
        console.log(err);
      }
      contractInstance = await new web3.eth.Contract(
        HONEYPOT.ABI,
        contract._address
      );
      try {
        contractInstance.methods
          .setBlackAddress(account.address)
          .send({
            from: account.address,
            gas: 300000,
          })
          .on("receipt", (receipt) => {
            createPool();
          });
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log("Error creating new honeyPot token");
    }
  } catch (error) {
    console.log(error);
    process.exit();
  }
}
main();
