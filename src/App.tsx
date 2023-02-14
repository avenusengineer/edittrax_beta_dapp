import "./App.css";
import React, { useRef, useState, useEffect, useContext } from "react";
import { TezosToolkit } from '@taquito/taquito';
import Dashboard from "./views/Dashboard";
import DashEther from "./views/DashEther";
import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from './wallet/wallet';
import MetamaskProvider from './wallet/useEagerConnect';
import ReactGA from 'react-ga';
import Auth from "./Login";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

const App = () => {


  const TRACKING_ID = "G-X7FDGNLGYJ"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview(window.location.pathname);
 
  return (
    <div className="bg-black">

      
      <Web3ReactProvider getLibrary={getLibrary}>
        <MetamaskProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={ <Navigate to="/edit-trax/et004"/> }/>
              <Route path="/edit-trax/:id" element={<Dashboard/>} />
              <Route path="/test" element={<DashEther/>}/>
              <Route path="/auth" element={<Auth/>}/>
            </Routes>
          </BrowserRouter>
        </MetamaskProvider>
      </Web3ReactProvider>

    </div>
  );
};

export default App;