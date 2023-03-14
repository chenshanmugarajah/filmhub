import React, { useEffect, useState } from "react";
import { getPopularFilms } from "../../services/tmdb";
import Navbar from "../../components/Navbar/Navbar";
// import FilmCard from "../../components/FilmCard/FilmCard";
import "./Homepage.scss";
import Banner from "../../components/Banner/Banner";
import Row from "../../components/Row/Row";
import requests from "../../services/Requests.js";

const Homepage = () => {
  const [popularFilms, setPopularFilms] = useState([]);

  useEffect(() => {
    getPopularFilms()
      .then((response) => response.json())
      .then((data) => setPopularFilms(data.results))
      .catch((error) => console.log("Error: ", error));
  }, []);

  return (
    <div className="homepage">
      <Navbar />
      { popularFilms.length > 0 && <Banner film={popularFilms[Math.floor(Math.random() * popularFilms.length - 1)]}/> }
      <Row title="Trending Films" requestUrl={requests.fetchTrending} isLarge={true} />
      {/* <Row title="Dhanush Films" requestUrl={requests.tamilMoviesWithDhanush} isLarge={false} /> */}
      <Row title="Comedy Films" requestUrl={requests.tamilComedyMovies} isLarge={false} />
      <Row title="Horror Films" requestUrl={requests.tamilHorrorMovies} isLarge={false} />

      
      {/* <div className="popularList">
        {popularFilms && popularFilms.length > 0 ? (
          <>
            {popularFilms.map((film, index) => (
              <FilmCard film={film} key={index}/>
            ))}
          </>
        ) : (
          <p>Wait</p>
        )}
      </div> */}
    </div>
  );
};

export default Homepage;
