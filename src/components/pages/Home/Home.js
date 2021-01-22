import React from "react";
import Product from "./../../shared/product/Product";
import banner from "./../../../images/banner.jpg";
import product from "./../../../images/product.jpg";
import "./Home.scss";
export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__banner" src={banner} alt="banner" />
      </div>
      <div className="home__row">
        <Product id="1" title="product title" image={product} price="2000" />
      </div>
      <div className="home__row"></div>
      <div className="home__row"></div>
    </div>
  );
}
