import React from "react";
import "./CheckoutProduct.scss";
import { useStateValue } from "./../../../../state providers/context api/StateProvider";

export default function CheckoutProduct({ id, title, image, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "removeFromBasket",
      id: id,
    });
  };

  return (
    <div key={id} id={id} className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="product pic" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <button onClick={removeFromCart}>Remove from cart</button>
      </div>
    </div>
  );
}
