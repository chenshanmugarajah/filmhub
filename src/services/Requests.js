const API_KEY = process.env.REACT_APP_TMDB_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
  fetchTrending: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
  // tamilMoviesWithDhanush: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=ta&with_cast=550165`,
  tamilHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  tamilComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
};

export default requests;

// tamilMovies: `/discover/movie?api_key=${API_KEY}&with_original_language=ta`,
