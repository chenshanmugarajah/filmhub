import React from "react";
import { useLocation } from "react-router-dom";
import "./FilmDisplay.scss";

const FilmDisplay = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  return (
    <iframe
      title="film-display"
      className="filmdisplay"
      src={"https://autoembed.co/movie/tmdb/" + id}
      allowFullScreen={true}
      allow="autoplay"
    ></iframe>
  );
};

export default FilmDisplay;
