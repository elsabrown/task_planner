import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import "../index";
import "../components/navigation/Navigation";

import { Home, SignIn, SignUp, Tasks, Users } from "../pages/";
import { Routes } from "../utils/routes";
import { AuthorizeRoute, NotAuthorizeRoute } from "../components/routes/";

const App = () => {

  return (
    <Router>

      <NotAuthorizeRoute path={Routes.HomeRoute} component={Home} />

      <NotAuthorizeRoute path={Routes.SignUpRoute} component={SignUp} />

      <AuthorizeRoute path={Routes.TasksRoute} component={Tasks} />

      <AuthorizeRoute path={Routes.UsersRoute} component={Users} />

      <NotAuthorizeRoute path={Routes.SignInRoute} component={SignIn} />

    </Router>
  );
};

export default App;
