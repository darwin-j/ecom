import React from "react";
import "./Product.scss";
import { useStateValue } from "./../../../state providers/context api/StateProvider";

export default function Product({ id, title, image, price }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "addToBasket",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <img src={image} alt="img" />
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <button onClick={addToBasket}>add to basket</button>
    </div>
  );
}
