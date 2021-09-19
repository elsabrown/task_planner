import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Routes } from "..//..//utils/routes";

import "./SignIn.scss";

const SignIn = () => {
  const [signInForm, setSignInForm] = useState({ signInValue: "", passwordValue: "" })
  // Types of form errors "empty", "notValid", "notExists"
  const [signInFormError, setSignInFormError] = useState({ signInError: "", passwordError: "" })

  const handleCheckEmptyInput = (signInForm, signInFormError, inputName, errorName) => {
    if(signInForm[inputName] === "") {
      signInFormError[errorName] = "empty"
      return true
    }
    return false
  }

  const handleCheckEmptyForm = (event = {}, inputName = "", errorName = "") => {
    const signInFormCopy = {...signInForm}
    const signInFormErrorCopy = {...signInFormError}
    let resultCheckEmpty = false;
    let resultCheckEmptySihnIn = false;
    let resultCheckEmptyPassword = false;

    //Check some input if we provide it name
    if (inputName !== "" && errorName !== "") {
      resultCheckEmpty = handleCheckEmptyInput(signInFormCopy, signInFormErrorCopy, inputName, errorName)
      setSignInFormError(signInFormErrorCopy)
       
    } else {
      //Check all inputs
      resultCheckEmptySihnIn = handleCheckEmptyInput(signInFormCopy, signInFormErrorCopy, "signInValue", "signInError")
      resultCheckEmptyPassword = handleCheckEmptyInput(signInFormCopy, signInFormErrorCopy, "passwordValue", "passwordError")
      resultCheckEmpty = resultCheckEmptySihnIn || resultCheckEmptyPassword

      setSignInFormError(signInFormErrorCopy)
    }
    return resultCheckEmpty;
  }

  const handleChangeSignInForm = (event, inputName, errorName) => {
    const { value: inputValue } = event.target
    const signInFormCopy = {...signInForm}
    const signInFormErrorCopy = {...signInFormError}

    signInFormErrorCopy[errorName] = ""
    setSignInFormError(signInFormErrorCopy)

    signInFormCopy[inputName] = inputValue
    setSignInForm(signInFormCopy)
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();
    //If form is empty return from this function
    if (handleCheckEmptyForm()) {
      return
    }

    //Here we send request POST/signIn
  }

  const { signInValue, passwordValue } = signInForm
  const { signInError,  passwordError } = signInFormError

  return (
    <section className="signIn">
      <div className="signIn-container container">
        <div className="sigIn-wrapper">
          <div className="sigIn-wrapper_form">
            <form className="sigIn-form" method="post" action="index.html" onSubmit={handleSubmitForm}>
              <span className="sigIn-wrapper_title">
                <h1>Sign In</h1>
              </span>

              <input
                type="email"
                name="signInValue"
                value={signInValue}
                onChange={event => handleChangeSignInForm(event, "signInValue", "signInError")}
                onBlur={event => handleCheckEmptyForm(event, "signInValue", "signInError")}
                placeholder="Email or Username"
              />
                {signInError === "empty" && <div className="sigIn-form_error"><span className="sigIn-form_error">Enter your Email or Username</span></div>}
                {signInError === "notValid" && <div className="sigIn-form_error"><span className="sigIn-form_error">Invalid Email</span></div>}
                {signInError === "notExists" && <div className="sigIn-form_error"><span className="sigIn-form_error">User not found</span></div>}

              <input
                type="password"
                name="passwordValue"
                value={passwordValue}
                onChange={event => handleChangeSignInForm(event, "passwordValue", "passwordError")}
                onBlur={event => handleCheckEmptyForm(event, "passwordValue", "passwordError")}
                placeholder="Password"
                minLength="5"
              />
                {passwordError === "empty" && <div className="sigIn-form_error"><span className="sigIn-form_error">Enter your Password</span></div>}
                {passwordError === "notExists" && <div className="sigIn-form_error"><span className="sigIn-form_error">Invalid Password</span></div>}

              <input type="submit" 
                     name="" 
                     value="Sign In" />
              <span className="sigIn-form_text">
                No account?
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
