import React from "react";
import "./navbar.scss";

// const Container = styled.div`
//   background-color: white;
//   height: 3em;
// `;

// const Wrapper = styled.div`
//   padding: 1em 2em;
//   display: flex;
//   justify-content: space-between;
// `;

// const Left = styled.div`
//   width: 60%;
// `;

// const Logo = styled.h1``;

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <span className="left">
          <span className="title">Agency</span>
          <ul className="menu">
            <li className="menuItem">Home</li>
            <li className="menuItem">Features</li>
            <li className="menuItem">Services</li>
            <li className="menuItem">Pricing</li>
            <li className="menuItem">Contact</li>
          </ul>
        </span>
        <span className="btn">JOIN TODAY</span>
      </div>
    </div>
  );
};

export default Navbar;
