import React, { useState } from "react";
import "./service.scss";
import Woman from "../../img/woman.png";
import MiniCard from "../minicard/MiniCard";
import Play from "../../img/play.png";

const Service = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="service">
      <div className="left">
        <img src={Woman} alt="" className={open ? "hide" : "service-img"} />
        <video
          src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
          autoPlay
          loop
          controls
          className={open ? "video" : "hide"}
        ></video>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Simple process to start</h1>
          <p className="serviceText">
            We provide digital services to startups and small businesses to look
            for a partner of their digital media, design & development, lead
            generation and communications requirements.
          </p>
          <div className="cardContainer">
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </div>
          <button className="btn" onClick={() => setOpen(!open)}>
            {" "}
            <img src={Play} alt="" className="icon" />
            How it works
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
