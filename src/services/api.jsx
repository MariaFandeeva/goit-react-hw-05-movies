import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '894a5fcb5eb3af426933275e70f0cd83';

export const trendingMovies = async () => {
  const {
    data: { results },
  } = await axios.get(`/trending/movie/day?api_key=${API_KEY}&page=1`);
  return results;
};

export const searchMovieByQuery = async query => {
  const {
    data: { results },
  } = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}&page=1`);
  return results;
};

export const fetchMovieById = async id => {
  const { data } = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const fetchMovieCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  return data;
};

export const fetchMovieReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  return data;
};
export const fetchMovieGenre = async () => {
  const { genres } = await axios.get(`/genre/movie/list?api_key=${API_KEY}`);
  return genres;
};
