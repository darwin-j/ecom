import React from "react";
import banner from "./../../../images/banner.jpg";
import "./Home.scss";
export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__banner" src={banner} alt="banner" />
      </div>
      <div className="home__row"></div>
      <div className="home__row"></div>
      <div className="home__row"></div>
    </div>
  );
}
