import React from "react";
import "../App.css";

function Button({ text }) {
  return (
    <div>
      <button className="register-button"> {text}</button>
    </div>
  );
}

export default Button;
