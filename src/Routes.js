import React from "react";
import { Switch, Route } from "react-router-dom";
import ExpenseTrackerApp from "./components/ExpenseTrackerApp";

//defines routes for React Router
const Routes = () => (
  <Switch>
    <Route exact path="/ExpenseTrackerApp" component={ExpenseTrackerApp} />
  </Switch>
);
export default Routes;