import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';

// import { RevList, RevItem, RevText, RevError } from './Reviews.styled.jsx';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId).then(items => {
      setReviews(items.results);
    });
  }, [movieId]);

  const rews = reviews.map(({ id, author, content }) => (
    <li key={id}>
      <p>
        <b>Author:</b>
        {author}
      </p>
      {content}
    </li>
  ));
  return reviews.length > 0 ? (
    <ul> {rews}</ul>
  ) : (
    <h3>There are no reviews for this movie</h3>
  );
};
export default Reviews;
