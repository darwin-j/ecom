import React from "react";
import "./Checkout.scss";
import Subtotal from "./subTotal/Subtotal";
import { useStateValue } from "./../../../state providers/context api/StateProvider";
import CheckoutProduct from "./checkoutProduct/CheckoutProduct";
export default function Checkout() {
  const state = useStateValue();
  const basket = state[0].basket;

  return (
    <div className="checkout">
      <div className="checkout__left">
        <h2 className="checkout__title">Your cart</h2>
        {basket.map((product) => (
          <CheckoutProduct
            key={product.id}
            title={product.title}
            id={product.id}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}
