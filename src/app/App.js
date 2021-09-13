import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App";
import "../index";
import "../components/navigation/Navigation";

// import { SignIn, SignUp, Tasks, Users, Navigation } from "../components/";
import { Routes } from "../utils/routes";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Tasks from "../pages/Tasks/Tasks";
import Users from "../pages/Users/Users";
import Home from "../pages/Home/Home";
import AuthorizeRoute from "../components/routes/authorizeRoute/AuthorizeRoute";
import NotAuthorizeRoute from "..//components/routes/authorizeRoute/AuthorizeRoute";
// import { AuthorizeRoute, NotAuthorizeRoute } from "../components/routes/";

const App = () => {

  return (
    <Router>

      <Route exact path={Routes.HomeRoute}>
        <Home />
      </Route>

      <Route exact path={Routes.SignInRoute}>
        <SignIn />
      </Route>

      <NotAuthorizeRoute path={Routes.SignUpRoute} component={SignUp} />

      <AuthorizeRoute path={Routes.TasksRoute} component={Tasks} />

      <AuthorizeRoute path={Routes.UsersRoute} component={Users} />

      {/* <NotAuthorizeRoute path={Routes.SignInRoute} component={SignIn} /> */}

      {/* <Route exact path={Routes.SignUpRoute}>
            <SignUp />
          </Route>

          <Route exact path={Routes.TasksRoute}>
            <Tasks />
          </Route>

          <Route exact path={Routes.UsersRoute}>
            <Users />
          </Route> */}
    </Router>
  );
};

export default App;
