import { useState } from "react";
import "./App.css";
import logo from "./assets/react.svg";
import InputSignIn from "./components/InputSignIn.jsx";
import InputRegister from "./components/InputRegister.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import ImageGrid from "./components/ImageGrid.jsx";
import NavComponent from "./components/NavComponent.jsx";
import Button from "./components/RegisterButton.jsx";
import Content from "./components//Content.jsx";
import RegisterModal from "./components/RegisterModal.jsx";
import ImageUpload from "./components/ImageUpload.jsx";

function App() {
  const [isRegister, setIsRegister] = useState(false);

  function toggleDisplay() {
    if (!isRegister) {
      setIsRegister(true);
    } else if (isRegister) {
      setIsRegister(false);
    }
  }

  return (
    <>
      <div className="nav-container">
        <NavComponent />
      </div>
      <div className="all-container">
        <div className="main-heading-container">
          <h3 className="main-heading">
            Copy<span className="copyright">&copy;</span>hat
          </h3>
        </div>

        <div className="overlay">
          {!isRegister ? (
            <div>
              <h3>Sign In</h3>
              <InputSignIn input1="Email" input2="Password" />
              <Button text="Log In" />
            </div>
          ) : (
            <div>
              <h3>Register</h3>
              <InputRegister
                input1="Name"
                input2="Password"
                input3="Confirm Password"
              />
              <Button text="Sign Up" />
              {/* <ImageUpload /> */}
            </div>
          )}

          <h5>
            {isRegister ? (
              <a onClick={toggleDisplay}>Log In</a>
            ) : (
              <a onClick={toggleDisplay}>Sign Up</a>
            )}
          </h5>
        </div>

        {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
      </div>
    </>
  );
}
// Move the export statement outside of the App function
export default App;
