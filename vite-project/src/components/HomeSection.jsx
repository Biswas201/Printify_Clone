import React from "react";
import "../styles/HomeSection.css";
import shirtOne from "../assets/shirt1.png";

const HomeSection = () => {
  return (
    <div className="container">
      <div className="left-section">
        <h1 className="main-heading">Create and sell custom products</h1>
        <ul className="features">
          <li>
            <span className="checkmark">✔</span> 100% Free to use
          </li>
          <li>
            <span className="checkmark">✔</span> 99% High-Quality Products
          </li>
          <li>
            <span className="checkmark">✔</span> Largest global print network
          </li>
        </ul>
        <div className="button-group">
          <button className="primary-btn">Start for free</button>
          <button className="secondary-btn">
            <i className="fas fa-play"></i>How it works?
          </button>
        </div>
        <p className="trusted-text">
          Trusted by over 8M sellers around the world
        </p>
      </div>
      <div className="right-section">
        <div className="image-box">
          <img
            src={shirtOne}
            alt="Custom Product Image"
            className="custom-image"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
