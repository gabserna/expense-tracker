import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import ExpenseTracker from './components/ExpenseTracker';
//import TransactionsPage from './pages/TransactionsPage';
import { Home } from './components/Home';
import { About } from './components/About';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="About" element={ <About />} />
      </Routes>
    
  );
}

export default App;
