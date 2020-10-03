import React, { useState } from "react";
import axios from "axios";
import SeriesPage from "../SeriesPage/seriespage";

function Landing() {
  const [name, setName] = useState("");
  const [seriesList, setSeriesList] = useState([]);
  const [favList, setFavList] = useState([]);

  const onName = (e) => {
    e.preventDefault();
    let v = e.target.value;
    setName(e.target.value);

    getSeriesList(v);
  };
  const getSeriesList = (...args) => {
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${args[0]}`)
      .then((response) => {
        let favId =
          response.data &&
          response.data.length > 0 &&
          response.data.map((obj) => ({ ...obj, fav: false }));
        setSeriesList(favId);
      });
  };

  const addFav = (id, value) => {
    if (value) {
      for (let i in seriesList) {
        if (seriesList[i].show.id === id) {
          seriesList[i].fav = value;
          setFavList([...new Set([...favList, seriesList[i]])]);
          break; //Stop this loop, we found it!
        }
      }
    } else {
      for (let i in favList) {
        if (favList[i].show.id === id) {
          favList[i].fav = value;
          setFavList([...new Set([...favList, favList[i]])]);
          break; //Stop this loop, we found it!
        }
      }
    }
  };
  return (
    <div className="landing">
      <input
        type="text"
        onChange={onName}
        value={name}
        placeholder="Search Series"
        className="searchbar"
      />
      <SeriesPage
        seriesList={seriesList}
        favList={favList}
        addFav={addFav}
        name={name}
      />
    </div>
  );
}

export default Landing;
