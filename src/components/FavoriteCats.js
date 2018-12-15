import React from "react";
import { GoTrashcan } from "react-icons/go";

const FavoriteCats = ({ favoriteCats, removeCat }) => {
  return (
    <ul className="favorite-cats">
      {favoriteCats.map((cat, i) => (
        <li>
          <img class="favorite-cat" key={cat} src={cat} alt="favorited cat" />
          <button
            onClick={() => {
              removeCat(i);
            }}
          >
            <GoTrashcan size="20" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export { FavoriteCats };
