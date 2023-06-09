import React from "react";
import Image from 'next/image'
import { useEffect, useState } from "react";
import {
  helloWorldContract,
  connectWallet,
  updateMessage,
  loadCurrentMessage,
  getCurrentWalletConnected,
} from "../util/interact.js";

import alchemylogo from "../public/alchemylogo.svg";

export default function Home() {
  //state variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("No connection to the network."); //default message
  const [newMessage, setNewMessage] = useState("");

  function addSmartContractListener() { //TODO: implement
    
  }

  function addWalletListener() { //TODO: implement
    
  }

  const connectWalletPressed = async () => { //TODO: implement
    
  };

  const onUpdatePressed = async () => { //TODO: implement
    
  };

  //the UI of our component
  return (
    <div id="container">
      <Image id="logo" alt="alchemy" src={alchemylogo}></Image>
      <button id="walletButton" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>

      <h2 style={{ paddingTop: "50px" }}>Current Message:</h2>
      <p>{message}</p>

      <h2 style={{ paddingTop: "18px" }}>New Message:</h2>

      <div>
        <input
          type="text"
          placeholder="Update the message in your smart contract."
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <p id="status">{status}</p>

        <button id="publish" onClick={onUpdatePressed}>
          Update
        </button>
      </div>
    </div>
  );
}
