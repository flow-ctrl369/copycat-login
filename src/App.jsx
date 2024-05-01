import { useState } from "react";
import "./App.css";
import Input from "./components/Input.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import ImageGrid from "./components/ImageGrid.jsx";
import NavComponent from "./components/NavComponent.jsx";
import RegisterButton from "./components/RegisterButton.jsx";

function App() {
  return (
    <div>
      <div></div>
      <div className="overlay">
        <NavComponent />

        <HeaderComponent />
        <div className="form-overlay">
          <Input />
          <RegisterButton />
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>
      </div>
      <ImageGrid />
    </div>
  );
}

export default App;
