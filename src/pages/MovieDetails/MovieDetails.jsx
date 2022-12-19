import { useState, useEffect } from 'react';
import { Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
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
} from './MovieDetails.styled';

const films = [
  { text: 'Cast', href: 'cast' },
  { text: 'Reviews', href: 'reviews' },
];

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.form ?? '/';
  const { id } = useParams();

  useEffect(() => {
    fetchMovieById().then(films => {
      setMovie(films);
    });
  }, [id]);

  const goBack = () => navigate(from);

  const { title, overview, genres = [], vote_avarage, poster_path } = movie;

  const genreFilter = genres.map(genre => genre.name).join(' ');
  const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';
  const defaultImg = '/public/images/film_poster_not_found.jpg';

  return (
    <Section>
      <Container>
        <Button onClick={goBack}>Go back</Button>
        <MovieItem>
          <MovieImg
            src={poster_path ? `${baseImgUrl}${poster_path}` : defaultImg}
            alt={title}
            width="300"
          />
          <MovieDescription>
            <MovieTitle>{title}</MovieTitle>
            <MovieText>
              <b>Rating:</b>
              {vote_avarage}
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
                {films.map(({ text, href }) => (
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
