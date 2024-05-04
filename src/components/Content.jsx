import React from "react";
import Card from "./Card.jsx";
import { userData } from "../data/userData.jsx";

function Content({ name, image, description }) {
  return (
    <div>
      <section>
        <Card name={name} image={image} description={description} />
      </section>
    </div>
  );
}

export default Content;
