import React from "react";
import { Link } from "react-router-dom";

import { Routes } from "..//..//utils/routes";

const SignUp = () => {
  return (
    <div>
      <h1>Страница регистрации</h1>
      <Link to={Routes.SignInRoute}>
        <span>Зарегистрироваться</span>
      </Link>
    </div>
    )
}

export default SignUp;