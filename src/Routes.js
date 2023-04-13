import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ExpenseTracker from './components/ExpenseTracker';
import TransactionsPage from './components/TransactionsPage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ExpenseTracker} />
    <Route path="/transactions" component={TransactionsPage} />
  </Switch>
);

export default Routes;