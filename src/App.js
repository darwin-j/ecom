import React from "react";
import Header from "./components/shared/header/Header";
import Home from "./components/pages/Home/Home";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
