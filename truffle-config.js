require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

const { MNEMONIC, PROJECT_ID } = process.env;

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 9545,
      network_id: '*',
    },
    blastTestnet: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://blast-sepolia.infura.io/v3/${PROJECT_ID}`
        ),
      network_id: 168587773, // blast sepolia network id
      confirmations: 2,
      timeoutBlocks: 200,
      pollingInterval: 1800000,
      disableConfirmationListener: true,
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: '0.8.20',
    },
  },
};
