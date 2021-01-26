import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./../../../state providers/context api/StateProvider";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Header.scss";
import { auth } from "./../../../firebase";

export default function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const signOut = () => {
    if (user) {
      auth.signOut();
    }
  };

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
        <Link to={user ? "" : "/login"}>
          <div onClick={signOut} className="header__nav--option">
            {user ? "signOut" : "signIn"}
          </div>
        </Link>
        <div className="header__nav--option">orders</div>
        <Link to="/checkout">
          <div className="header__nav--option-cart">
            <ShoppingCartIcon className="header__nav--option-cart-icon" />

            <span className="header__nav--option-cart-number">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
