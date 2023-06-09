import React from "react";
import { Link } from "react-router-dom";
import "./Banner.scss";

const Banner = ({ film, myList }) => {
  function truncate(description, n) {
    return description?.length > n
      ? description.substring(0, n - 1) + "..."
      : description;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${film?.poster_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{film.title}</h1>
        <div className="banner__buttons">
          <Link
            className="link"
            to={`/film/${film.id}/display`}
          >
            <button className="banner__button">Play</button>
          </Link>
          {myList && <button className="banner__button">My List</button>}
        </div>
        <h1 className="banner__description">{truncate(film.overview, 160)}</h1>
      </div>

      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;
