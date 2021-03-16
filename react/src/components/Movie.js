import styled from 'styled-components';

const MovieCard = styled.article`
  width: 500px;
  border: 1px solid black;
  padding: 2rem 3rem;
  justify-self: center;
  background-color: ${({ theme }) => theme.background.card};
`;

const MovieTitle = styled.h2`
  font-size: 2rem;
  line-height: 1.2;
  font-weight: 900;
  margin-bottom: 1.6rem;
  color: ${({ theme }) => theme.colors.default};
`;

const MovieActor = styled.h4`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.default};
`;

const Movie = ({ title, actor }) => (
  <MovieCard>
    <MovieTitle>Movie: {title}</MovieTitle>
    <MovieActor>Actor: {actor}</MovieActor>
  </MovieCard>
);

export default Movie;
