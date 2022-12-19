import { useState, useEffect } from 'react';

import { trendingMovies } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';

import { Section, Container } from './Home.styled.jsx';

export const Home = () => {
  const [trendMovie, setTrendMovie] = useState([]);

  useEffect(() => {
    trendingMovies().then(films => {
      setTrendMovie(films);
    });
  }, []);

  return (
    <Section>
      <Container>
        <MoviesList movies={trendMovie} sectionTitle="Trend Movies" />
      </Container>
    </Section>
  );
};
