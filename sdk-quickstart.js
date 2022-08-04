import { Network, Alchemy } from 'alchemy-sdk';

// Optional Config object, defaults to demo api-key and eth-mainnet.
const settings = {
  // Replace with your Alchemy API Key to get 3x more test eth on faucets!
  apiKey: 'ZtMzxUMEPTw7nOu8NNWXBavf3R0ffSHF', 
  network: Network.ETH_MAINNET, // Replace with your network.
};

const alchemy = new Alchemy(settings);

// Access standard Ethers.js JSON-RPC node request
alchemy.core.getBlockNumber().then(console.log);

// Access Alchemy Enhanced API requests
alchemy.core.getTokenBalances("0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE").then(console.log);

// Access the Alchemy NFT API
alchemy.nft.getNftsForOwner('vitalik.eth').then(console.log);

// Access WebSockets and Alchemy-specific WS methods
alchemy.ws.on(
  {
    method: 'alchemy_pendingTransactions'
  },
  res => console.log(res)
);