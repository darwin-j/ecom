import React, { useState } from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./../../pages/checkout/checkoutProduct/CheckoutProduct";
import { useStateValue } from "./../../../state providers/context api/StateProvider";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export default function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [disable, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessins] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = (e) => {};

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  let total = 0;
  if (basket.length >= 1) {
    let priceArr = [];
    basket.map((item) => priceArr.push(item.price));
    priceArr.map((price) => (total = Number(price) + total));
  }

  return (
    <div className="payment">
      <h2>
        Checkout (<Link to="/checkout">{basket?.length} items</Link>)
      </h2>
      <div className="payment__container">
        <div className="payment__section">
          <div className="payment__title">
            <h1>Delivery Address</h1>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
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
          <button disabled={processing || disable || succeeded}>
            <span>{processing ? <p>Processing</p> : "Buy now"}</span>
          </button>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form>
              <CardElement />
              <div className="payment__price">order total :{total}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
