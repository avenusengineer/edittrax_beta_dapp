import { useEffect, useState } from "react";
import { MetaMaskconnector } from "./wallet";
import { useWeb3React } from "@web3-react/core";

function MetamaskProvider({ children }: any) {
  const {
    active: networkActive,
    error: networkError,
    activate: activateNetwork,
  } = useWeb3React();
  const [loaded, setLoaded] = useState(false);
  const shouldEagerConnect = localStorage.getItem("shouldEagerConnect");
  useEffect(() => {
    if (shouldEagerConnect === "true") {
      MetaMaskconnector.isAuthorized()
        .then((isAuthorized:any) => {
          setLoaded(true);
          if (isAuthorized && !networkActive && !networkError) {
            activateNetwork(MetaMaskconnector);
          }
        })
        .catch(() => {
          setLoaded(true);
        });
    }
  }, [shouldEagerConnect]);

  return children;
}

export default MetamaskProvider;