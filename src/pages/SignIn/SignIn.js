import React from "react";
import { Link } from "react-router-dom";

import { Routes } from "..//..//utils/routes";

const SignIn = () => {
  return (
  <div>
    <h1>Страница Входа</h1>
    <Link to={Routes.SignUpRoute}>
    </Link>
  </div>
  )
}

export default SignIn;