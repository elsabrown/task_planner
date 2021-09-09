import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App";
import "../index";

import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Tasks from "../pages/Tasks/Tasks";
import Users from "../pages/Users/Users";

class App extends React.Component {
  render() {
    return (
        <Router>
          <Route path="/">
            <h1>Корневой путь</h1>
          </Route>

          <Route exact path="/signIn">
            <SignIn />
          </Route>

          <Route exact path="/signUp">
            <SignUp />
          </Route>

          <Route path="/tasks">
            <Tasks />
          </Route>

          <Route exact path="/users">
            <Users />
          </Route>
        </Router>
    );
  }
}

export default App;
