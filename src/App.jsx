import styled, { css } from "styled-components";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import "./app.scss";
import Featured from "./components/featured/Featured";
import Service from "./components/service/Service";
import Price from "./components/price/Price";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Intro />
        <div className="shapeIntro"></div>
      </div>
      <div className="app sizing-down">
        <Featured />
        <div className="shapeFeatured"></div>
      </div>
      <div className="app">
        <Service />
        <div className="shapeService"></div>
      </div>
      <div className="app">
        <Price />
        <div className="shapePrice"></div>
      </div>
      <div className="app">
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
