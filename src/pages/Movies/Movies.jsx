import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovieByQuery } from '../../services/api';

import { SearchBar } from '../../components/SearchBar/SearchBar';
import { MoviesList } from '../../components/MoviesList/MoviesList';

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params = searchParams.get('query') ?? '';
    if (params?.trim()) {
      searchMovieByQuery(params).then(films => {
        if (films.length !== 0) {
          setMovies(films);
        } else {
          alert('no movies found');
        }
      });
    }
  }, [searchParams]);

  const onSubmit = event => {
    event.preventDefault();
    const value = event.currentTarget.elements.inputValue.value;

    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <>
      <h1>Movies</h1>
      <SearchBar formSubmitHandler={onSubmit} />
      <MoviesList movies={movies} />
    </>
  );
};
