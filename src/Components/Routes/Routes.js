import React from "react";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import NoMatch from "../Pages/NoMatch";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route component={NoMatch} />
    </Switch>
  );
};

export default Routes;
