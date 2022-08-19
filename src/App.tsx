import React, { ReactElement } from 'react';
import './App.css';
import Router from './pages/router/router';
function App():ReactElement {
  return (
    <div className="App">
      <Router></Router>
    </div>
  );
}

export default App;
