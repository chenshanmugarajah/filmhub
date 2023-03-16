import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Homepage.scss";
import Banner from "../../components/Banner/Banner";
import Row from "../../components/Row/Row";
import requests from "../../services/Requests.js";

const Homepage = () => {
  const [popularFilms, setPopularFilms] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await fetch(requests.fetchTrending)
        .then((response) => response.json())
        .then((data) => {
          setPopularFilms(data.results);
        })
        .catch((error) => console.log(error));
    }
    fetchData();
  }, []);

  const MemoizedRow = React.memo(Row);

  return (
    <div className="homepage">
      <Navbar />
      { popularFilms.length > 0 && <Banner myList={true} film={popularFilms[Math.floor(Math.random() * popularFilms.length - 1)]}/> }
      <MemoizedRow title="Trending Films" requestUrl={requests.fetchTrending} isLarge={true} />
      <MemoizedRow title="Comedy Films" requestUrl={requests.comedyMovies} isLarge={false} />
      <MemoizedRow title="Horror Films" requestUrl={requests.horrorMovies} isLarge={false} />
    </div>
  );
};

export default Homepage;
