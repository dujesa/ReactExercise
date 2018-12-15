import React from "react";

const pickColor = color => {
  return color === "blue" ? "blue" : "default";
};

const Header = ({ color }) => (
  <h1 className={pickColor(color)}>Choose your favorite cats</h1>
);

export { Header };
