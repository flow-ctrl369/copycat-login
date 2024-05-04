import { useState } from "react";
import "./App.css";
import Input from "./components/Input.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import ImageGrid from "./components/ImageGrid.jsx";
import NavComponent from "./components/NavComponent.jsx";
import Button from "./components/RegisterButton.jsx";
import Content from "./components//Content.jsx";
function App() {
  return (
    <div className="all-container">
      <div>
        <div className="nav-container">
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
          <h3>Sign in</h3>
          <div>
            <Input />
          </div>
          <Button />
        </div>
      </div>
      <div>
        {/* <Content /> */}
        <div>
          <div className="react-container"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
