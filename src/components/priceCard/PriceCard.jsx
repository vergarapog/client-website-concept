import React from "react";
import "./pricecard.scss";

const PriceCard = ({ price, plan }) => {
  return (
    <div className="priceCard">
      <div className="container">
        <span className="price-banner">
          $<span className="bigNum">{price}</span>
          /month
        </span>
        <button className="price-btn">{plan} Plan</button>
        <ul className="desc-list">
          <li>200 Hand-Crafted Templates</li>
          <li>Exclusive Support</li>
          <li>50+ PreBuilt Websites</li>
          <li>Premium Plugins</li>
        </ul>
        <button className="join-btn">Join Now</button>
      </div>
    </div>
  );
};

export default PriceCard;
