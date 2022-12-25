import { useLocation, Link } from 'react-router-dom';

import PropTypes from 'prop-types';
// import {
//   List,
//   Item,
//   SectionTitle,
//   LinkTitle,
//   Img,
//   MovieTitle,
// } from './MoviesList.styled';

const MoviesList = ({ movies, sectionTitle = null }) => {
  const location = useLocation();
  const baseImgUrl = 'https://image.tmdb.org/t/p/w342/';
  const defaultImg = '/public/images/film_poster_not_found.jpg';

  return (
    <>
      {sectionTitle && <h3>{sectionTitle}</h3>}
      <ul>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <li key={id}>
              <Link state={{ from: location }} to={`{movies.id}`}>
                <img
                  src={poster_path ? `${baseImgUrl}${poster_path}` : defaultImg}
                  alt={title}
                />
                <p>{title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
  sectionTitle: PropTypes.string,
};
