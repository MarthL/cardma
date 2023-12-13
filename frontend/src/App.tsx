import React from 'react';
import './App.css';
import { Main } from './Organisms/Main';
import { BrowserRouter as Router } from 'react-router-dom';

export const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Main />
      </Router>
    </React.Fragment>
  );
}

export default App;
