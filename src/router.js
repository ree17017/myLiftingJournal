import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./page/home.js";
import Registration from "./page/registration.js";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default Router;

/* 
<Route path="/registration" element={<Registration />} />
 */
