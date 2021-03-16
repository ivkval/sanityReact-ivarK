import { StyledMain } from './styles/Styles';
import Theme from './styles/Theme';
import Movies from './components/Movies';

const App = () => (
  <Theme>
    <StyledMain>
      <Movies />
    </StyledMain>
  </Theme>
);

export default App;
