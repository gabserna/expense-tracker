import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ExpenseTrackerApp from './components/ExpenseTrackerApp';


const Routes = () => (
  <Switch>
    <Route exact path="/ExpenseTrackerApp" component={ExpenseTrackerApp} />
  </Switch>
);

export default Routes;