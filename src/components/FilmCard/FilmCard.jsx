import React from "react";
import { Link } from "react-router-dom";
import "./FilmCard.scss";

const FilmCard = ({ film }) => {
  return (
    <div className="filmcard">
      <Link className="link" to={`/film/${film.id}/details`} state={{ film }}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
          alt={film.title}
        />
        <h2>{film.title}</h2>
      </Link>
    </div>
  );
};

export default FilmCard;
