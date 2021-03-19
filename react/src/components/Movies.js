import { useState } from 'react';
import { getMovie } from '../utils/movieService';
import Movie from './Movie';
import {
  MoviesContainer,
  StyledButton,
  MovieContainer,
  LoadText,
} from '../styles/Styles';

const Movies = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const movies = await getMovie();
      console.log(movies);
      setData(movies);
    } catch (error) {
      setData([]);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = async () => {
    fetchData();
  };

  return (
    <MoviesContainer>
      <StyledButton type="button" onClick={handleClick}>
        Get content
      </StyledButton>
      <MovieContainer>
        {error ? <p>{error.message}</p> : null}
        {loading ? <LoadText>Henter filmer ... </LoadText> : null}
        {!loading && data?.length > 0
          ? data.map((movie, index) => (
              <Movie key={index} title={movie.title} actor={movie.actor} />
            ))
          : null}
      </MovieContainer>
    </MoviesContainer>
  );
};

export default Movies;
