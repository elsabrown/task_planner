import React from "react";
import { Route } from "react-router-dom";

import Navigation from "../../navigation/Navigation";

const AuthorizeRoute = (props) => {
  const { component: Component, path } = props;
  return (
    <div>
      <Route path={path}>
        <Navigation />
        <Component />
      </Route>
    </div>
  );
};

export default AuthorizeRoute;
