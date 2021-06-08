import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HelloWorld from "../pages/helloworld";
const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={HelloWorld} />
        </Switch>
      </Router>
  );
}

export default Routes;
