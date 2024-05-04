import { useState } from "react";
import "./App.css";
import Input from "./components/Input.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import ImageGrid from "./components/ImageGrid.jsx";
import NavComponent from "./components/NavComponent.jsx";
import Button from "./components/RegisterButton.jsx";
function App() {
  return (
    <div className="all-container">
      <div>
        <div className="nav-container">
          {" "}
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Login/Register</li>
            </ul>
          </nav>
        </div>
        <h1 className="main-heading">Copy&copy;at</h1>

        <div className="overlay">
          <h3>Login</h3>
          <div>
            <Input />
          </div>
          <Button />
        </div>
      </div>
      <div>
        <section>{/* <Card /> */}</section>
      </div>
    </div>
  );
}

export default App;
