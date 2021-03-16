import styled from 'styled-components';
import { useState } from 'react';
import { getMovie } from '../utils/movieService';
import Movie from './Movie';

const StyledButton = styled.button`
  background-color: rgb(0, 140, 186);
  border: none;
  border-radius: 8px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 2.5rem;
  transition-duration: 0.4s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: rgb(0, 140, 186, 0.6);
    color: black;
  }
`;

const Movies = () => {
  const [data, setData] = useState([]);

  const handleClick = async () => {
    const movies = await getMovie();
    setData(movies);
  };

  return (
    <>
      <StyledButton type="button" onClick={handleClick}>
        Get content
      </StyledButton>
      {data?.length > 0
        ? data.map((movie, index) => <Movie key={index} title={movie.title} actor={movie.actor} />) : null}
    </>
  );
};

export default Movies;
