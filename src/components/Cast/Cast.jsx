import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieCast } from 'services/api';

// import {
//   CastList,
//   CastCard,
//   CastTitle,
//   CastImg,
//   CastText,
//   CastError,
// } from './Cast.styled.jsx';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieCast(id).then(items => {
      setCast(items.cast);
    });
  }, [id]);

  const baseImgUrl = 'https://image.tmdb.org/t/p/w185';
  const defaultImg = '/public/images/film_poster_not_found.jpg';
  const cards = cast.map(({ id, character, name, profile_path }) => (
    <ul>
      <li key={id}>
        <img
          src={profile_path ? `${baseImgUrl}${profile_path}` : defaultImg}
          alt={name}
        />
        <p>{name}</p>
        <p>Character: {character}</p>
      </li>
    </ul>
  ));

  return cast.length > 0 ? (
    <ul>{cards}</ul>
  ) : (
    <h3>No information about actors</h3>
  );
};
export default Cast;
