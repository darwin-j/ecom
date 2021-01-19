import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <h3>ecom</h3>
      <div className="header__search">
        <input className="header__search--input" />
        <SearchIcon className="header__search--icon" />
      </div>
      <div className="header__nav">
        <div className="header__nav--option">signIn</div>
        <div className="header__nav--option">orders</div>
        <div className="header__nav--option-cart">
          <ShoppingCartIcon className="header__nav--option-cart-icon" />
          <span className="header__nav--option-cart-number">0</span>
        </div>
      </div>
    </div>
  );
}
