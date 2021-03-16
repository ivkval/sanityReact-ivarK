import styled from 'styled-components';
import Movies from './components/Movies';
import Theme from './styles/Theme';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 15px 2px #000000;
  width: 100%;
  min-height: 100vh;
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px 0px 0px 0px;
`;

const App = () => (
  <Theme>
    <StyledMain>
      <Movies />
    </StyledMain>
  </Theme>
);

export default App;
