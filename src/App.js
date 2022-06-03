import './App.css';
import styled from 'styled-components'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div``;

export default App;