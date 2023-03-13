import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./FilmDisplay.scss";

const FilmDisplay = () => {
  const location = useLocation();
  const film = location.state.film;
  
  return (
    <div className="filmdisplay">
      <Navbar />
      <h3>{film.title}</h3>
      <iframe
        title="film-display"
        className="video"
        src={"https://autoembed.to/movie/tmdb/" + film.id}
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default FilmDisplay;
