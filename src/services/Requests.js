const API_KEY = process.env.REACT_APP_TMDB_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
  fetchTrending: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
  horrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  comedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchTrailers: `${BASE_URL}/movie/{movie_id}/videos?api_key=${API_KEY}`
};

export default requests;

// tamilMovies: `/discover/movie?api_key=${API_KEY}&with_original_language=ta`,
