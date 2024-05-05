import { useState } from "react";
import "./App.css";
import logo from "./assets/react.svg";
import Input from "./components/Input.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import ImageGrid from "./components/ImageGrid.jsx";
import NavComponent from "./components/NavComponent.jsx";
import Button from "./components/RegisterButton.jsx";
import Content from "./components//Content.jsx";
import RegisterModal from "./components/RegisterModal.jsx";

function App() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <>
      <div className="nav-container">
        <NavComponent />
      </div>
      <div className="all-container">
        <h1 className="main-heading">Copy&copy;hat</h1>

        <div className="overlay">
          {!isRegister ? <h3>Sign In</h3> : <RegisterModal />}

          <Input />
          <Button />
        </div>

        {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
      </div>
    </>
  );
}

export default App;
