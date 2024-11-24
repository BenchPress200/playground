import React from 'react';
import Home from './Page/Home';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppContainer = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Router>
      <AppContainer className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
