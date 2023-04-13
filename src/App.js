import './style.css';
import React from 'react';
import ExpenseTracker from './ExpenseTracker';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <ExpenseTracker />
    </div>
  );
}

export default App;


/*

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

*/