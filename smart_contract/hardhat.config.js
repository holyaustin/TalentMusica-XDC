require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
   
    testnet: {
      url: "https://erpc.apothem.network", 
      // chainId: 51,
      accounts: [process.env.PRIVATE_KEY],
    },

    mainnet: {
      url: "https://erpc.xinfin.network", 
      // chainId: 50,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
