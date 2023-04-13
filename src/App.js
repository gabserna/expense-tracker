import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseTracker from './components/ExpenseTracker';
import TransactionsPage from './pages/TransactionsPage';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ExpenseTracker} />
          <Route path="/transactions" component={TransactionsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
