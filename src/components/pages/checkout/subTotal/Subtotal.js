import React from "react";
import "./Subtotal.scss";
import { useStateValue } from "./../../../../state providers/context api/StateProvider";
import CurrencyFormat from "react-currency-format";

export default function SubTotal() {
  const state = useStateValue();
  const basket = state[0].basket;
  let total = 0;
  if (basket.length >= 1) {
    let priceArr = [];
    basket.map((item) => priceArr.push(item.price));
    priceArr.map((price) => (total = Number(price) + total));
  }

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={() => (
          <>
            <p>
              Subtotal({basket.length} items):
              <strong>{total ? total : "0"}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              this order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}
