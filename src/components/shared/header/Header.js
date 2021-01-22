import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./../../../state providers/context api/StateProvider";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Header.scss";

export default function Header() {
  const state = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <h3>ecom</h3>
      </Link>
      <div className="header__search">
        <input className="header__search--input" />
        <SearchIcon className="header__search--icon" />
      </div>
      <div className="header__nav">
        <div className="header__nav--option">signIn</div>
        <div className="header__nav--option">orders</div>
        <Link to="/checkout">
          <div className="header__nav--option-cart">
            <ShoppingCartIcon className="header__nav--option-cart-icon" />

            <span className="header__nav--option-cart-number">
              {state[0].basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
