import { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams, Outlet } from 'react-router-dom';
import { fetchMovieById } from 'services/api';

import {
  Section,
  Container,
  Button,
  MovieItem,
  MovieImg,
  MovieDescription,
  MovieTitle,
  MovieText,
  MoreDetails,
  MoreDetailsList,
  MoreDetailsButton,
  MoreDetailsItem,
} from './MovieDetails.styled.jsx';

const items = [
  { text: 'Cast', href: 'cast' },
  { text: 'Reviews', href: 'reviews' },
];

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  const { movieId } = useParams();
  const location = useLocation();

  const from = location.state?.from ?? '/';

  useEffect(() => {
    fetchMovieById(movieId).then(items => {
      setMovie(items);
    });
  }, [movieId]);

  const goBack = () => navigate(from);

  const { overview, title, genres = [], vote_average, poster_path } = movie;

  const genreFilter = genres.map(genre => genre.name).join(' ');
  const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';
  const defaultImg = '/public/images/film_poster_not_found.jpg';

  return (
    <Section>
      <Container>
        {<Button onClick={goBack}>Go back</Button>}
        <MovieItem>
          <MovieImg
            src={poster_path ? `${baseImgUrl}${movie.poster_path}` : defaultImg}
            alt={title}
            // width="300"
          />
          <MovieDescription>
            <MovieTitle>{title}</MovieTitle>
            <MovieText>
              <b>Rating:</b>
              {vote_average}
            </MovieText>
            <MovieText>
              <b>Overview:</b>
              {overview}
            </MovieText>
            <MovieText>
              <b>Genres:</b>
              {genreFilter}
            </MovieText>
            <MoreDetails>
              <MovieText>
                <b>Additional Information</b>
              </MovieText>
              <MoreDetailsList>
                {items.map(({ text, href }) => (
                  <MoreDetailsItem key={text}>
                    <MoreDetailsButton state={{ from }} to={href}>
                      {text}
                    </MoreDetailsButton>
                  </MoreDetailsItem>
                ))}
              </MoreDetailsList>
            </MoreDetails>
          </MovieDescription>
        </MovieItem>
        <Outlet />
      </Container>
    </Section>
  );
};
export default MovieDetails;
