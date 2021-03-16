import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global';

const theme = {
  background: {
    main: 'lightgray',
    movies: 'whitesmoke',
    card: 'white',
  },
  colors: {
    default: '#333',
  },
};

const Theme = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Theme;
