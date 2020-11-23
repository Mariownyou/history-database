import './App.css';
import { Box, Container } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Content from './components/ui/Content'
import Navbar from './components/ui/Navbar'


const font =  "'El Messiri', sans-serif";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#573B6C",
    },
    secondary: {
      main: '#A1586B'
    }
  },
  typography: {
    fontFamily: font,
    button: {
      textTransform: "none"
    }
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container>
        <Content />
      </Container>
    </ThemeProvider>
  );
}

export default App;
