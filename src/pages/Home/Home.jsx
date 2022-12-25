import { useState, useEffect } from 'react';

import { trendingMovies } from 'services/api';
import MoviesList from 'components/MoviesList/MoviesList';

// import { Section, Container } from './Home.styled.jsx';

const Home = () => {
  const [trendMovie, setTrendMovie] = useState([]);

  useEffect(() => {
    trendingMovies().then(films => {
      setTrendMovie(films);
    });
  }, []);

  return (
    <section>
      <container>
        <MoviesList movies={trendMovie} sectionTitle="Trend Movies" />
      </container>
    </section>
  );
};
export default Home;
