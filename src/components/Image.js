import React from "react";

const Image = ({ catImage, onClick, isActive }) => (
  <figure onClick={onClick}>
    <img
      className={`cat-image ${isActive ? "active" : "inactive"}`}
      src={catImage}
      alt="A awesome akita cat"
    />
  </figure>
);

export { Image };
