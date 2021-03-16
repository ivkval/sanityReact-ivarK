import styled from 'styled-components';

const MovieContainer = styled.article`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  padding: 2rem 3rem;
`;

const MovieTitle = styled.h2`
  font-size: 1.8rem;
  line-height: 1.2;
  font-weight: 900;
  margin-bottom: 1.6rem;
  color: ${({ theme }) => theme.colors.default};
`;

const MovieActor = styled.h4`
  font-size: 1.3rem;
  font-weight: 400;
`;

const Movie = ({ title, actor }) => (
  <MovieContainer>
    <MovieTitle>{title}</MovieTitle>
    <MovieActor>{actor}</MovieActor>
  </MovieContainer>
);

export default Movie;
