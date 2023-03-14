import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Row.scss";

const Row = ({ title, requestUrl, isLarge }) => {
  const [films, setFilms] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    console.log("Row effect called");
    async function fetchData() {
      await fetch(requestUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log("data recieved: ", data);
          setFilms(data.results.filter((data) => data.backdrop_path != null));
        })
        .catch((error) => console.log(error));
    }
    fetchData();
  }, [requestUrl]);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {films.map((film) => (
          <Link className="link" to={`/film/${film.id}/details`} state={{ film }}>
            <img
              className={`row__poster ${isLarge && "row__posterLarge"}`}
              key={film.id}
              src={`${base_url}${
                isLarge ? film.poster_path : film.backdrop_path
              }`}
              alt={film.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Row;
