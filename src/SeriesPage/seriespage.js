import React from "react";

function SeriesPage(props) {
  return (
    <div className="series">
      <ul>
        {props.seriesList && props.seriesList.length > 0 ? (
          <p>Available Series List</p>
        ) : null}
        {props.seriesList &&
          props.seriesList.length > 0 &&
          props.seriesList
            .filter(
              (l) =>
                l.show.name.toLowerCase().includes(props.name.toLowerCase()) &&
                l.fav === false
            )
            .map((sl, i) => {
              return (
                <li className="list-name" key={i}>
                  <p>{sl.show.name}</p>
                  {!sl.fav ? (
                    <img
                      src="../assets/star.svg"
                      alt="Notfavourite"
                      onClick={() => props.addFav(sl.show.id, !sl.fav)}
                    />
                  ):null}
                </li>
              );
            })}
      </ul>

      <ul>
        {props.favList && props.favList.length > 0 ? (
          <p>Favourite Series List</p>
        ) : null}
        {props.favList &&
          props.favList.length > 0 &&
          props.favList
            .filter((l) => l.fav === true)
            .map((sl, i) => {
              return (
                <li className="list-name" key={i}>
                  <p>{sl.show.name}</p>
                  {sl.fav ? (
                    <img
                      src="../assets/starY.svg"
                      alt=""
                      onClick={() => props.addFav(sl.show.id, !sl.fav)}
                    />
                  ):null}
                </li>
              );
            })}
      </ul>
    </div>
  );
}

export default SeriesPage;
