
import React, { useState } from 'react';
import { ethers } from "ethers";

declare global {
    interface Window{
        ethereum: any
    }
}
  
const ConnectWallet = (props: any) => {
    let signer;
    const connect = async () => {
        console.log('inside connect wallet');
        try {
            const { ethereum } = window;
            if (!ethereum) {
                alert('download metamask to connect wallet');
                return;
            }
            else {
                let chainId = await ethereum.request({ method: 'eth_chainId' });
                const goerliChainId = "0x5";
                if (chainId !== goerliChainId) {
                  alert("You are not connected to the Goerli Test Network!");
                }
                const accounts = await ethereum.request({ method: "eth_requestAccounts" });
                console.log("accounts", accounts);
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                // contract instance should be stored in backend and fetched with API call
                // props.pullWalletUp(wallet);
                console.log('inside connect wallet else block');
            }   
    
        }
        catch (e) {
            console.log('error', e);
        }
    }

    return (
        <div>
            <button type="button" className="btn btn-success btn-lg px-4 gap-3" onClick={connect}>Connect</button>
        </div>
    )
}


export default ConnectWallet;