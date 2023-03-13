import React, { useEffect, useState } from "react";
import "./Row.scss";

const Row = ({ title, requestUrl, isLarge }) => {
  const [films, setFilms] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      await fetch(requestUrl)
        .then((response) => response.json())
        .then((data) => setFilms(data.results))
        .catch((error) => console.log(error));
    }
    fetchData();
  }, [requestUrl]);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {films.map((film) => (
          <img
            className={`row__poster ${isLarge && "row__posterLarge"}`}
            key={film.id}
            src={`${base_url}${
              isLarge ? film.poster_path : film.backdrop_path
            }`}
            alt={film.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
