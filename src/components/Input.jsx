import React from "react";
import { useState } from "react";

function Input() {
  const [email, setEmail] = useState("");
  //   const [pass, setPass] = useState("");

  //   function handleClick(e) {
  //     e.preventDefault();
  //     const data = e.target.value;
  //     console.log(data);
  //   }
  return (
    <div className="form-container">
      <form action="submit">
        <label>Email</label>
        <input placeholder="Enter your email" id="email" type="email" />
        <label htmlFor="">Password</label>
        <input placeholder="Enter your password" id="pass" type="password" />
        {/* <button>Click</button> */}
      </form>
    </div>
  );
}

export default Input;
