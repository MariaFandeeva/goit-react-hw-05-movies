import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovieByQuery } from '../../services/api';
import Loader from '../../components/Loader/Loader';
import Button from 'components/Button/Button';
import SearchBar from '../../components/SearchBar/SearchBar';
import MoviesList from '../../components/MoviesList/MoviesList';

import { Section, Container } from './Movies.styled.jsx';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(1);

  const [searchMovies, setSearchMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const per_page = 20;

  useEffect(() => {
    async function fetchMovies() {
      const query = searchParams.get('query') ?? '';
      if (query?.trim()) {
        setIsLoading(true);
        const { results, total_results } = await searchMovieByQuery(
          query,
          page
        );
        setIsLoading(false);
        if (results.length !== 0) {
          setSearchMovies(prev => [...prev, ...results]);
          setLoadMore(page < Math.ceil(total_results / per_page));
        } else {
          alert('no movies found');
        }
      }
    }

    fetchMovies();
  }, [searchParams, page]);

  const onSubmitHandler = q => {
    setSearchParams({ query: q });
    // setPage(1);
    // setSearchMovies([]);
  };
  const onLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <Section>
      <Container>
        <SearchBar onSubmit={onSubmitHandler} />
        {isLoading && <Loader />}

        {searchMovies.length > 0 && <MoviesList movies={searchMovies} />}
        {loadMore && <Button onLoadMore={onLoadMore} />}
      </Container>
    </Section>
  );
};
export default Movies;
