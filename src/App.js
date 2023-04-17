import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ExpenseTrackerApp } from './components/ExpenseTrackerApp';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={ <ExpenseTrackerApp />} />
      </Routes>
  );
}
export default App;