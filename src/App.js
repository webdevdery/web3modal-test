import React from "react";
import Web3Modal from "web3modal";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Fortmatic from "fortmatic";

let provider = null;
let web3 = null;
let accounts = null;

const providerOptions = {
  injected: {
    display: {
      name: "Injected",
      description: "Connect with the provider in your Browser",
    },
    package: null,
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        56: "https://bsc-dataseed.binance.org/",
        97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      },
      network: "binance",
      qrcodeModalOptions: {
        mobileLinks: ["metamask"],
      },
    },
  },
};

function App() {
  async function onConnect() {
    const web3Modal = new Web3Modal({
      cacheProvider: false, // optional
      providerOptions, // required
      disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
      theme: "dark",
    });
    provider = await web3Modal.connect();

    web3 = new Web3(provider);
  }
  return <button onClick={onConnect}>Connect wallet</button>;
}

export default App;
