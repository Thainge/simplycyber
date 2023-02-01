import React from 'react';
import { HashRouter as Router } from 'react-router-dom'
import { InputProvider } from './Context/ContextProvider';
import RouterComponent from './Components/Router';
import ScrollToTop from './scrollTop';
import './App.css';

function App() {
  return (
    <>
      <InputProvider>
        <Router basename={''}>
          <ScrollToTop />
          <RouterComponent />
        </Router>
      </InputProvider>
    </>
  );
}

export default App;