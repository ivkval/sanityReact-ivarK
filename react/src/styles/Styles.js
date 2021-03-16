import styled from 'styled-components';

export const StyledMain = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.background.main};
`;

export const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  grid-row-gap: 20px;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;
  overflow: auto;
`;

export const LoadText = styled.h3`
  justify-self: center;
`;

export const MoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  min-height: 100%;
  max-height: 100vh;
  max-width: 1100px;
  border-right: 1px solid black;
  border-left: 1px solid black;
  background-color: ${({ theme }) => theme.background.movies};
`;

export const StyledButton = styled.button`
  background-color: rgb(0, 140, 186);
  margin: 2rem 0;
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
