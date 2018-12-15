import React from "react";
import { GoHeart, GoArrowRight } from "react-icons/go";

const Actions = ({ favoriteCat, catInFavorites, getCat, cat }) => (
  <ul className="cat-actions">
    <li>
      <button
        onClick={() => favoriteCat(cat)}
        className="heart-icon"
        disabled={catInFavorites(cat)}
      >
        <GoHeart size="30" color="#f44336" />
      </button>
    </li>
    <li>
      <button onClick={getCat}>
        <GoArrowRight size="30" />
      </button>
    </li>
  </ul>
);

export { Actions };
