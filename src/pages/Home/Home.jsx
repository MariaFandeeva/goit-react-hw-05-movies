import { useState, useEffect } from 'react';

import { trendingMovies } from 'services/api';
import MoviesList from 'components/MoviesList/MoviesList';

import { Section, Container } from './Home.styled.jsx';

const Home = () => {
  const [trendMovie, setTrendMovie] = useState([]);

  useEffect(() => {
    trendingMovies().then(items => {
      setTrendMovie(items);
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
export default Home;
