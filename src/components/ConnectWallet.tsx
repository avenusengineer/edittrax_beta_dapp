import React, { useEffect } from "react";
import {
  Tezos,
  TEZOS_COLLECT_NETWORK,
  TEZOS_COLLECT_WALLET,
} from "utils/constants";

import { useTezosCollectStore } from "store";

const ConnectWallet = () => {
  const { activeAddress } = useTezosCollectStore();
  const setActiveAddress = useTezosCollectStore(
    (store) => store.setActiveAddress
  );

  const onConnectWallet = async () => {
    await TEZOS_COLLECT_WALLET.requestPermissions({
      network: TEZOS_COLLECT_NETWORK,
    });
    const _activeAddress = await TEZOS_COLLECT_WALLET.getPKH();
    setActiveAddress(_activeAddress);
  };

  const onDisconnectWallet = async () => {
    setActiveAddress("");
    await TEZOS_COLLECT_WALLET.clearActiveAccount();
  };

  useEffect(() => {
    const getActiveAccounts = async () => {
      const _activeAddress =
        await TEZOS_COLLECT_WALLET.client.getActiveAccount();
      if (_activeAddress?.address) {
        // If defined, the user is connected to a wallet.
        // You can now do an operation request, sign request, or send another permission request to switch wallet
        // console.log("Already connected:", _activeAddress?.address);

        // You probably want to show the address in your UI somewhere.
        setActiveAddress(_activeAddress?.address);
        // console.log(activeAddress);
      }
      Tezos.setWalletProvider(TEZOS_COLLECT_WALLET);
    };
    getActiveAccounts();
  }, []);

  return activeAddress.length === 0 ? (
    <button className="outline_button_all font-mathias lg:text-4xl xl:text-4xl  w-34 text-center w-full py-4 px-4 text-3xl lg:text-4xl text-yellow-75 rounded-md hover:opacity-50 shadow-2xl bg-red-900" onClick={onConnectWallet}>
      CONNECT
    </button>
  ) : (
  <button className="outline_button_all font-mathias lg:text-4xl xl:text-4xl w-34 text-center w-full py-4 px-4 text-3xl lg:text-4xl text-yellow-75 rounded-md hover:opacity-50 shadow-2xl bg-green-900 " onClick={onDisconnectWallet}>
    {/* <div>{`${activeAddress.slice(0, -28)}...${activeAddress.substring(30)}`}</div> */}
    <div>CONNECTED</div>
  </button>
  );
};

export default ConnectWallet;
