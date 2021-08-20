import React from "react";
import "./intro.scss";
import Man from "../../img/man.png";
import AnimatedShapes from "../animatedShapes/AnimatedShapes";

const Intro = () => {
  return (
    <div className="intro">
      <div className="left">
        <h1>Adventures in creative age</h1>
        <p>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.
        </p>
        <div className="info">
          <button>START A PROJECT</button>
          <div className="contact-intro">
            <div className="phone">(+63) Call us at 09761050239</div>
            <div className="text">For any questions and concern</div>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={Man} alt="" />
      </div>
      <AnimatedShapes />
    </div>
  );
};

export default Intro;
