import React from "react";
import "./minicard.scss";
import Search from "../../img/search.png";

const MiniCard = () => {
  return (
    <div className="miniCard">
      <img src={Search} alt="" />
      <p className="cardText">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default MiniCard;
