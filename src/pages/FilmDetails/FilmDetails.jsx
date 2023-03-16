import React from "react";
import { useLocation } from "react-router-dom";
import "./FilmDetails.scss";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
// import requests from "../../services/Requests.js";

const FilmDetails = () => {
  const location = useLocation();

  const film = location.state.film;

  console.log(film);

  // useEffect(() => {
  //   console.log("Film details effect called");
  //   const trailerUrl = requests.fetchTrailers.replace("{movie_id}", film.id)
  //   async function fetchData() {
  //     await fetch(trailerUrl)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("data recieved: ", data);
  //       })
  //       .catch((error) => console.log(error));
  //   }
  //   fetchData();
  // }, [film.id]);

  return (
    <div className="filmdetails">
      <Navbar />
      <Banner film={film} myList={false} />
      <main className="filmdetails__details">
        <h1>Details</h1>
        <div className="filmdetails_summary">
          {film.overview}
        </div>
        <div className="filmdetails_detailswrap">
          <section className="filmdetails__details__left">
            <h4>
              Rating: {Math.floor(film.vote_average)}/10 from {film.vote_count}{" "}
              votes
            </h4>
            <h4>Release date: {film.release_date}</h4>
            <h4>
              Genre: {film.genre_ids[0]}
            </h4>
          </section>
          <section className="filmdetails__details__right">
            <h4>
              Rating: {Math.floor(film.vote_average)}/10 from {film.vote_count}{" "}
              votes
            </h4>
            <h4>Release date: {film.release_date}</h4>
            <h4>
              Genre: {film.genre_ids[0]}, {film.genre_ids[1]}
            </h4>
          </section>
        </div>
      </main>
    </div>
  );
};

export default FilmDetails;
