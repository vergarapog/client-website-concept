import React from "react";
import App from "../../img/app.png";
import "./featured.scss";
import AnimatedShapes from "../animatedShapes/AnimatedShapes";

const Featured = () => {
  return (
    <div className="featured">
      <div className="left">
        <img src={App} alt="" />
      </div>
      <div className="right">
        <span className="title">
          <b>Good</b> design <br />
          <b>Good</b> business
        </span>
        <span className="subtitle">
          We know that good design means good business.
        </span>
        <p className="desc">
          We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieveing
          marketing goals, and look fantastic.
        </p>
        <p className="desc">
          We car for your business and guarantee you to achieve marketing goals
        </p>
        <button>Learn More</button>
      </div>
      <AnimatedShapes />
    </div>
  );
};

export default Featured;
