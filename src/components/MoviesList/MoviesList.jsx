import { useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';
import {
  List,
  Item,
  SectionTitle,
  LinkTitle,
  Img,
  MovieTitle,
} from './MoviesList.styled';

export const MoviesList = ({ movies, sectionTitle = null }) => {
  const location = useLocation();
  const baseImgUrl = 'https://image.tmdb.org/t/p/w342/';
  const defaultImg = '/public/images/film_poster_not_found.jpg';

  return (
    <>
      {sectionTitle && <SectionTitle>{sectionTitle}</SectionTitle>}
      <List>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <Item key={id}>
              <LinkTitle state={{ from: location }} to={`{movies.id}`}>
                <Img
                  src={poster_path ? `${baseImgUrl}${poster_path}` : defaultImg}
                  alt={title}
                />
                <MovieTitle>{title}</MovieTitle>
              </LinkTitle>
            </Item>
          );
        })}
      </List>
    </>
  );
};
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
