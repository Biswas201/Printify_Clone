import React from "react";
import "../styles/HomeThree.css";
import shirt from "../assets/shirt.webp";
import customProduct from "../assets/your-products.webp";
import fullFill from "../assets/fullfillment.webp";

const HomeThree = () => {
  return (
    <div className="features-con">
      <div className="item">
        <img src={shirt} alt="Custom Products" className="icon" />
        <h3 className="feature-heading">CREATE</h3>
        <h4>custom products</h4>
        <p>
          Easily add your designs to a wide range of products using our free
          tools.
        </p>
      </div>
      <div className="item">
        <img
          src={customProduct}
          alt="Sell on Your Terms"
          className="icon"
        />
        <h3 className="heading">SELL</h3>
        <h4>on your terms</h4>
        <p>You choose the products, sale price, and where to sell.</p>
      </div>
      <div className="item">
        <img
          src={fullFill}
          alt="Handle Fulfillment"
          className="icon"
        />
        <h3 className="heading">WE HANDLE</h3>
        <h4>fulfillment</h4>
        <p>
          Once an order is placed, we automatically handle all the printing and
          delivery logistics.
        </p>
      </div>
    </div>
  );
};

export default HomeThree;
