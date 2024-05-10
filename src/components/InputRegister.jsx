import React from "react";
import { useState } from "react";
import "../App.css";

function InputRegister({ input1, input2, input3 }) {
  return (
    <div className="form-container">
      <form action="submit">
        <label>{input1}</label>
        <input placeholder="Enter your email" id="email" type="email" />
        <label>{input2}</label>
        <input placeholder="Enter your password" id="pass" type="password" />
        <label>{input3}</label>
        <input placeholder="Confirm your password" id="passc" type="password" />
      </form>
    </div>
  );
}

export default InputRegister;
