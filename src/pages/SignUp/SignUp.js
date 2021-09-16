import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "..//..//utils/routes";

import "./SignUp.scss";

const SignUp = () => {
  return (
    <section className="signUp">
      <div className="signUp-container container">
        <div className="signUp-wrapper">
          <div className="signUp-wrapper_form">
            <form className="signUp-form" method="post" action="index.html">
              <span className="signUp-wrapper_title">
                <h1>Sign Up</h1></span>
              <input type="text" placeholder="First Name" className="singUp-form_input"></input>
              <input type="text" placeholder="Last Name"></input>
              <input type="email" placeholder="Email"></input>
              <input type="password" placeholder="Password"></input>
              <input type="password" placeholder="Confirm Password"></input>
              <input type="submit" name="" value="Sign Up"></input>
              <span className="signUp-form_text">If you have an account, please</span>
              <br />
                <Link to={Routes.SignInRoute}>
                  <span className="sigUp-form_link">Back</span>
                </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
