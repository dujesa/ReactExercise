import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { FavoriteCats } from "./components/FavoriteCats";
import { Actions } from "./components/Actions";
import { CatContainer } from "./components/CatContainer";
import { Image } from "./components/Image";

import "./styles.css";

const App = () => {
  const [cat, setCat] = useState(null);
  const [favoriteCats, setFavoriteCats] = useState([]);
  const [isActive, setActive] = useState(true);

  const getCat = () => {
    fetch("https://www.catis.life/cat")
      .then(data => data.json())
      .then(rsp => setCat(rsp.cat));
  };

  const favoriteCat = cat => {
    setFavoriteCats(favoriteCats.concat(cat));
  };

  const toggle = () => {
    setActive(!isActive);
    console.log(isActive);
  };

  const removeCat = catToRemoveIndex => {
    setFavoriteCats(
      favoriteCats.filter((cat, index) => {
        if (index !== catToRemoveIndex) return true;
        return false;
      })
    );
  };

  const catInFavorites = cat => favoriteCats.includes(cat);

  useEffect(() => {
    getCat();
  }, []);

  return (
    <main>
      <CatContainer>
        <Header color={favoriteCats.length !== 0 ? "blue" : "default"} />
        <Image isActive={isActive} onClick={toggle} catImage={cat} />
        <FavoriteCats favoriteCats={favoriteCats} removeCat={removeCat} />
        <Actions
          favoriteCat={favoriteCat}
          catInFavorites={catInFavorites}
          getCat={getCat}
          cat={cat}
        />
      </CatContainer>
    </main>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
