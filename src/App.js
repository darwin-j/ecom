import React, { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./state providers/context api/StateProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/shared/header/Header";
import Home from "./components/pages/Home/Home";
import Checkout from "./components/pages/checkout/Checkout";

import LogIn from "./components/authentication/logIn/LogIn";

import Payment from "./components/pages/payment/Payment";
import "./App.scss";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51IDkuEKw0d5FGzOVyQWElMLjqjS9lmLxTCUNdU8FIfcoLdYsdsijXIN8BKuDs4F35fWha1e1FIh6PVHrsI0P5cPE00OZTxEyjM"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: "setUser",
          user: user,
        });
      } else {
        dispatch({
          type: "setUser",
          user: null,
        });
      }
    });
  }, [dispatch]);

  console.log(user);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={LogIn} />
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
