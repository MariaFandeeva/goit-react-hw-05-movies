import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '894a5fcb5eb3af426933275e70f0cd83';

export const TrendingMovies = async () => {
  const {
    data: { results },
  } = await axios.get(`/trending/movie/day?api_key=${API_KEY}&page=1`);
  return results;
};

export const SearchMovieByQuery = async query => {
  const {
    data: { results },
  } = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}&page=1`);
  return results;
};

export const FetchMovieById = async id => {
  const { data } = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const FetchMovieCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  return data;
};

export const FetchMovieReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  return data;
};
export const FetchMovieGenre = async () => {
  const { genres } = await axios.get(`/genre/movie/list?api_key=${API_KEY}`);
  return genres;
};
