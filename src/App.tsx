import "./App.css";
import React, { useRef, useState, useEffect, useContext } from "react";
import { TezosToolkit } from '@taquito/taquito';
import Dashboard from './views/Dashboard';
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

import { loadStripe } from "@stripe/stripe-js";

const App = () => {

  const stripePromise = loadStripe("pk_test_51MYhN4G8mpfIqU4dEnjnGeWh6gBnydCFoAu8Kf0JPjT08v2JeP7DWZaITmYw1JDvefYje2qksFUWv1YQZ6pmQfmp00rfRc0eAR");
  async function handlePayment(amount: number) {
  const stripe = await stripePromise;

  const response = await stripe.redirectToCheckout({
    items: [{ plan: "plan_123", quantity: 1 }],
    successUrl: `http://localhost:3000/success`,
    cancelUrl: `http://localhost:3000/cancel`,
  });

  function PaymentButton() {
    return (
      <button onClick={() => handlePayment(100)}>
        Pay with Stripe
      </button>
    );
  }

  async function handleSuccessfulPayment(response: any) {
    const firestore = firebase.firestore();
    await firestore.collection("payments").add({
      amount: response.amount,
      created: firebase.firestore.Timestamp.fromDate(new Date()),
  });
}

  // The response from the checkout is returned in the `response` object
}

  // The response from the checkout is returned in the `response` object
}


  // The response from the checkout is returned in the `response` object
}

  // The response from the checkout is returned in the `response` object
}


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
