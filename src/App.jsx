import { useState } from "react";
import "./App.css";
import logo from "./assets/react.svg";
import Input from "./components/Input.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import ImageGrid from "./components/ImageGrid.jsx";
import NavComponent from "./components/NavComponent.jsx";
import Button from "./components/RegisterButton.jsx";
import Content from "./components//Content.jsx";
function App() {
  return (
    <>
      <div className="nav-container">
        <NavComponent />
      </div>
      <div className="all-container">
        <h1 className="main-heading">
          {/* <img src={logo} alt="" className="react-logo" /> */}
          Copy&copy;hat
          {/* <img src={logo} alt="" className="react-logo" /> */}
        </h1>

        <div className="overlay">
          <h3>Sign in</h3>

          <Input />

          <Button />
        </div>

        {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
      </div>
    </>
  );
}

export default App;
