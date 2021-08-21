import React from "react";
import "./contact.scss";
import Map from "../../img/map.png";
import Phone from "../../img/phone.png";
import Send from "../../img/send.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <div className="left">
          <div className="contact-title">
            Questions? <br /> Let's Get In Touch
          </div>
          <form action="" className="contact-form">
            <div className="form-left">
              <input
                type="text"
                name=""
                placeholder="Your Name"
                id=""
                className="input"
              />
              <input
                type="text"
                name=""
                placeholder="Your Email"
                id=""
                className="input"
              />
              <input
                type="text"
                name=""
                placeholder="Subject"
                id=""
                className="input"
              />
              <textarea
                name=""
                rows="7"
                className="big-input"
                placeholder="Your Message"
              />
              <button className="btn-form">Send</button>
            </div>
            <div className="form-right"></div>
          </form>
        </div>
        <div className="right">
          <div className="wrapper-bottom">
            <span className="address">
              <img src={Map} alt="" className="icon" />
              123 Park Avenue St., New York, USA
            </span>
            <span className="phone">
              <img src={Phone} alt="" className="icon" />
              +1 631 1234 5678 +1 326 1234 5678
            </span>
            <span className="email">
              <img src={Send} alt="" className="icon" />
              foryo22@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
