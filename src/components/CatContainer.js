import React from "react";

const CatContainer = ({ children }) => {
  return (
    <section className="cat-wrapper">
      <section className="cat-container">{children}</section>
    </section>
  );
};

export { CatContainer };
