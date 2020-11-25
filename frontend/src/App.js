import './App.css';
import { Box, Container } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
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
    caption: {
      fontFamily: "'Caveat', cursive"
    },
    subtitle1: {
      fontFamily: "'Balsamiq Sans', cursive"
    },
    button: {
      textTransform: "none"
    }
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
