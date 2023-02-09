import { ExternalProvider, JsonRpcFetchFunc, Web3Provider } from "@ethersproject/providers";
import { InjectedConnector } from "@web3-react/injected-connector";

export const MetaMaskconnector = new InjectedConnector({ supportedChainIds: [1] });

export const getLibrary = (provider: ExternalProvider | JsonRpcFetchFunc) => {
  return new Web3Provider(provider);
}