import React from "react";
import higherProfit from "../assets/higher-profits.svg";
import robust from "../assets/robust-scaling.svg";
import bestSelection from "../assets/best-selection.svg";
import "../styles/HomeTwo.css";

const Hometwo = () => {
  return (
    <div className="features-container">
      <div className="feature-item">
        <img src={higherProfit} alt="Higher Profits" className="feature-icon" />
        <h3>Higher Profits</h3>
        <p>
          We offer some of the lowest prices in the industry because print
          providers continuously compete to win your business.
        </p>
      </div>
      <div className="feature-item">
        <img
          src={robust}
          alt="Robust Scaling"
          className="feature-icon"
        />
        <h3>Robust Scaling</h3>
        <p>
          Easily handle peak holiday seasons, with our wide network of partners
          and automatic routing functionality.
        </p>
      </div>
      <div className="feature-item">
        <img
          src={bestSelection}
          alt="Best Selection"
          className="feature-icon"
        />
        <h3>Best Selection</h3>
        <p>
          With 900+ products and top quality brands, you can choose the best
          products for your business.
        </p>
      </div>
    </div>
  );
};

export default Hometwo;
