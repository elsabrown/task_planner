import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Routes } from "..//..//utils/routes";

import "./SignIn.scss";

const SignIn = () => {
  const [signInForm, setSignInForm] = useState({ signIn: "", password: "" });
  const handleChangesignInForm = (event, inputName) => {
    const signInFormCopy = {...signInForm}
  }

  return (
    <section className="signIn">
      <div className="signIn-container container">
        <div className="sigIn-wrapper">
          <div className="sigIn-wrapper_form">
            <form className="sigIn-form" method="post" action="index.html">
              <span className="sigIn-wrapper_title">
                <h1>Sign In</h1>
              </span>
              <input
                type="email"
                name="signIn"
                value={signInForm.signIn}
                onChange={event => handleChangesignInForm(event, "signIn")}
                placeholder="Email"
              ></input>
              <input
                type="password"
                name="password"
                value={signInForm.password}
                onChange={event => handleChangesignInForm(event, "password")}
                placeholder="Password"
              ></input>
              <input type="submit" name="" value="Sign In"></input>
              <span className="sigIn-form_text">
                If you don't have an account, please
              </span>
              <br />
              <Link to={Routes.SignUpRoute} className="sigIn-form_link">
                Sign Up
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
