const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require("fs");
const secrets = JSON.parse(fs.readFileSync(".secrets.json").toString().trim());


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777",
    },
    kovan: {
      networkCheckTimeout: 10000,
      provider: () => {
        return new HDWalletProvider(
          secrets.mnemonic,`wss://kovan.infura.io/ws/v3/${secrets.projectId}`
      );
   },
   
   gas: 12500000,
   gasPrice: 50000000,
   network_id: "42",
   timeoutBlocks: 4000,
   setTimeout: 5000000000,
   skipDryRun: true,
   deploymentPollingInterval: 8000,
},
  },

compilers: {
    solc: {
      version: "0.6.2",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },
  db: {
    enabled: false
  }
};
