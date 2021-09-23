import React from "react";
import Web3Modal from "web3modal";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";

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
  return (
    <>
      <h1 className="bg-dark md:mt-5 mx-auto max-w-md  md:max-w-2xl">
        Hi, There
      </h1>
      <div className="max-w-md mx-auto my-auto bg-dark md:mt-5  md:h-full lg:h-full rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/walletConnectIcon.svg"
              alt="Man looking at item at a store"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              WalletConnect Test project
            </div>
            <button
              onClick={onConnect}
              className=" shadow-md px-5 py-3 bg-dark  font-semibold  dark:bg-gray-800"
            >
              Connect wallet
            </button>
            <p className="mt-2 text-gray-500">
              Please test walletconnect with mobile
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
