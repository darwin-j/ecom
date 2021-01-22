import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/shared/header/Header";
import Home from "./components/pages/Home/Home";
import Checkout from "./components/pages/checkout/Checkout";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
