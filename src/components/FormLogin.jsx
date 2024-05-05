import React from "react";
import "../App";

function FormLogin({ text }) {
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

export default FormLogin;
