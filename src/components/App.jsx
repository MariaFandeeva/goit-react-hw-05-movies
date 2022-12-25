import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout.jsx';
import { GlobalStyles } from '../utils/GlobalStyles';

const Home = lazy(() =>
  import('../pages/Home/Home' /* webpackChunkName: "home" */)
);
const Movies = lazy(() =>
  import('../pages/Movies/Movies' /* webpackChunkName: "movies" */)
);
const MovieDetails = lazy(() =>
  import(
    '../pages/MovieDetails/MovieDetails' /* webpackChunkName: "movie-details" */
  )
);
const Cast = lazy(() => import('./Cast/Cast' /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import('./Reviews/Reviews' /* webpackChunkName: "reviews-subpage" */)
);
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalStyles />
    </>
  );
};
export default App;
