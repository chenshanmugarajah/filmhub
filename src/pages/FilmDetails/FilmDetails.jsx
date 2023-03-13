import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./FilmDetails.scss";
import Navbar from "../../components/Navbar/Navbar";

const FilmDetails = () => {
  const location = useLocation();

  const film = location.state.film;

  return (
    <div className="filmdetails">
      <Navbar />
      <h1>{film.title}</h1>
      <div className="filminfo">
        <img
          src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
          alt={film.title}
        />
        <h3>{film.overview}</h3>
      </div>
      <Link className="link" to={`/film/${film.id}/display`} state={{ film }}>
        Watch now
      </Link>
    </div>
  );
};

export default FilmDetails;
