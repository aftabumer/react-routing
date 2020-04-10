import React from "react";
import { Switch, Route } from "react-router-dom";
import Wedding from "../Pages/ServicesList/Wedding";
import Dj from "../Pages/ServicesList/Dj";
import Party from "../Pages/ServicesList/Party";

const ServicesRoute = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.path}/wedding`} component={Wedding} />
      <Route path={`${match.path}/dj's`} component={Dj} />
      <Route path={`${match.path}/party`} component={Party} />
    </Switch>
  );
};

export default ServicesRoute;
