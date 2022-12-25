import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieCast } from 'services/api';

import {
  CastList,
  CastCard,
  CastTitle,
  CastImg,
  CastText,
  CastError,
} from './Cast.styled.jsx';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then(items => {
      setCast(items.cast);
    });
  }, [movieId]);

  const baseImgUrl = 'https://image.tmdb.org/t/p/w185';
  const defaultImg =
    'https://www.surf-saunton.co.uk/wp-content/uploads/2022/03/coming-soon-200x300-c-default.jpg';
  const cards = cast.map(({ id, character, name, profile_path }) => (
    <CastCard key={id}>
      <CastImg
        src={profile_path ? `${baseImgUrl}${profile_path}` : defaultImg}
        alt={name}
        width={200}
      />
      <CastTitle>{name}</CastTitle>
      <CastText>Character: {character}</CastText>
    </CastCard>
  ));

  return cast.length > 0 ? (
    <CastList>{cards}</CastList>
  ) : (
    <CastError>No information about actors</CastError>
  );
};
export default Cast;
