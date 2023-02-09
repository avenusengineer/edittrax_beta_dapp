import React, { useState } from "react";
import DropDown from "../components/DropDown";
import ConnectWallet from "../components/ConnectWallet";

type modalProps = {
    onClose: () => void;
    show: boolean;
  }
  const Marketplaces = (props : modalProps) => {
    if (!props.show){
      return null 
    }
    return(
    <div className="modal" >
      <div className="modal-bg" onClick={props.onClose}/>
      <div className="modal-content rounded-md p-10">
        <div className="modal-header">
          <div className="text-2xl modal-title font-mathias flex justify-center">Advanced Mode</div>
        </div>
        <div className="modal-body p-10">
        EditTrax is an interactive music application that has the ability to run code within the safe environment of a sandboxed iframe. A token can potentially interact with your browser wallet and prompt you to connect. Do not interact with any requests that you did not initiate yourself. We recommend reading the &nbsp;&nbsp;
        <a href="https://opensea.io/blog/guides/non-fungible-tokens/" target='_blank' className="underline font-bold" rel="noreferrer">NFT BIBLE </a> if you are new to digital collectibles.<br></br><br></br>
        <div className="modal-footer m-auto flex justify-center gap-4">
          <button onClick={props.onClose} className="button bg-black rounded text-yellow-75 font-bold py-2 w-40 hover:text-gray-300">DROPDOWN</button>
        </div>
        </div>
      </div>
    </div>
    )
  }
  
  export default Marketplaces





