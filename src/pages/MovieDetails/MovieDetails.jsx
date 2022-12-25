import { useState, useEffect } from 'react';
import {
  useNavigate,
  useLocation,
  useParams,
  Outlet,
  Link,
} from 'react-router-dom';
import { fetchMovieById } from 'services/api';

// import {
//   Section,
//   Container,
//   Button,
//   MovieItem,
//   MovieImg,
//   MovieDescription,
//   MovieTitle,
//   MovieText,
//   MoreDetails,
//   MoreDetailsList,
//   MoreDetailsButton,
//   MoreDetailsItem,
// } from './MovieDetails.styled.jsx';

const items = [
  { text: 'Cast', href: 'cast' },
  { text: 'Reviews', href: 'reviews' },
];

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const from = location.state?.form ?? '/';
  // const defaultPoster = '/public/images/film_poster_not_found.jpg';

  useEffect(() => {
    fetchMovieById(id).then(items => {
      setMovie(items);
    });
  }, [id]);

  // let genresArray = [];
  // if (movie) {
  //   genresArray = movie.genres.map(item => item.name);
  // }

  const goBack = () => navigate(from);

  const { overview, title, genres = [], vote_avarage, poster_path } = movie;

  const genreFilter = genres.map(genre => genre.name).join(' ');
  const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';
  const defaultImg = '/public/images/film_poster_not_found.jpg';

  return (
    // <>
    /* <Link to={from}>Go Back</Link>
    {movie && (
      <div>
        <div>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : defaultPoster
            }
            alt={movie.original_title}
            width="250"
          />
        </div>
        <div>
          <h3>
            {movie.original_title}({movie.release_date})
          </h3>
          <p>
            <b>Vote avarage:</b>
            {movie.vote_avarage}
          </p>
          <p>
            <b>Overview:</b>
            {movie.overview}
          </p>
          <p>
            <b>Genres:</b>
            {genresArray.join(',')}
          </p>
        </div>

        <h4>Additional information</h4>
        <ul>
          <Link to="cast" state={{ from: location.state.from }}>
            Cast
          </Link>
          <Link to="reviews" state={{ from: location.state.from }}>
            Reviews
          </Link>
        </ul>
        <Outlet />
      </div>
    )}
  </>
);
}; */

    <section>
      <div>
        {<button onClick={goBack}>Go back</button>}
        <div className="movieItem">
          <img
            src={
              poster_path ? `h${baseImgUrl}${movie.poster_path}` : defaultImg
            }
            alt={title}
            width="300"
          />
          <div className="MovieDescription">
            <h3>{title}</h3>
            <p className="text">
              <b>Rating:</b>
              {vote_avarage}
            </p>
            <p className="text">
              <b>Overview:</b>
              {overview}
            </p>
            <p className="text">
              <b>Genres:</b>
              {genreFilter}
            </p>
            <div className="moreDetails">
              <p className="text">
                <b>Additional Information</b>
              </p>
              <ul>
                {items.map(({ text, href }) => (
                  <li key={text}>
                    <Link state={{ from }} to={href}>
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </section>
  );
};
export default MovieDetails;
