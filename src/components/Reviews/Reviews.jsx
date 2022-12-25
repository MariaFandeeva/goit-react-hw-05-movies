import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';

import { RevList, RevItem, RevText, RevError } from './Reviews.styled.jsx';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId).then(items => {
      setReviews(items.results);
    });
  }, [movieId]);

  const rews = reviews.map(({ id, author, content }) => (
    <RevItem key={id}>
      <RevText>
        <b>Author:</b>
        {author}
      </RevText>
      {content}
    </RevItem>
  ));
  return reviews.length > 0 ? (
    <RevList> {rews}</RevList>
  ) : (
    <RevError>There are no reviews for this movie</RevError>
  );
};
export default Reviews;
