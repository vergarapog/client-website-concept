import styled, { css } from "styled-components";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import "./app.scss";
import Featured from "./components/featured/Featured";

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
    </>
  );
};

export default App;
