import React from "react";
import PriceCard from "../priceCard/PriceCard";
import "./price.scss";

const Price = () => {
  return (
    <div className="price">
      <PriceCard price="10" plan="Basic" />
      <PriceCard price="20" plan="Premium" />
      <PriceCard price="30" plan="Advanced" />
    </div>
  );
};

export default Price;
