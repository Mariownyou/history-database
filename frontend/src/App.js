import './App.css';
import { Box, Container } from '@material-ui/core'
import Content from './components/ui/Content'
import Navbar from './components/ui/Navbar'


function App() {
  return (
    <Box>
      <Navbar />
      <Container>
        <Content />
      </Container>
    </Box>
  );
}

export default App;
