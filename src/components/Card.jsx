import React from "react";

function Card({ name, image, description }) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt="" />
      <p>{description}</p>
    </div>
  );
}

export default Card;
