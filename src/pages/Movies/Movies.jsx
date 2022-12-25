import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovieByQuery } from '../../services/api';

import SearchBar from '../../components/SearchBar/SearchBar';
import MoviesList from '../../components/MoviesList/MoviesList';

import { Section, Container } from './Movies.styled.jsx';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params = searchParams.get('query') ?? '';
    if (params?.trim()) {
      searchMovieByQuery(params).then(items => {
        if (items.length !== 0) {
          setSearchMovies(items);
        } else {
          alert('no movies found');
        }
      });
    }
  }, [searchParams]);

  const onSubmitHandler = q => {
    setSearchParams({ query: q });
  };

  return (
    <Section>
      <Container>
        {/* <h1>Movies</h1> */}
        <SearchBar onSubmit={onSubmitHandler} />
        {searchMovies.length > 0 && <MoviesList movies={searchMovies} />}
      </Container>
    </Section>
  );
};
export default Movies;
