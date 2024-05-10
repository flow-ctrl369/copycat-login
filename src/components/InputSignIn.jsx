import React from "react";
import { useState } from "react";
import "../App.css";

function InputSignIn({ input1, input2 }) {
  return (
    <div className="form-container">
      <form action="submit">
        <label>{input1}</label>
        <input placeholder="Enter your email" id="email" type="email" />
        <label>{input2}</label>
        <input placeholder="Enter your password" id="pass" type="password" />
        <p>
          <a>Forgot your password?</a>
        </p>
      </form>
    </div>
  );
}

export default InputSignIn;
