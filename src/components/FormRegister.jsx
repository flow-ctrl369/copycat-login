import React from "react";
import Button from "./RegisterButton.jsx";
import Input from "./Input.jsx";

function FormRegister({ text }) {
  return (
    <div>
      <div className="overlay">
        <h3>{text}</h3>
        <Input />
        <Button />
      </div>
    </div>
  );
}

export default FormRegister;
