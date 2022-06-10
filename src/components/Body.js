import React from "react";

export default function Body() {
  return (
    <div>
      <div className="loginArea">
        <div className="formArea">
          <h2 className="LogWE">Login With E-mail</h2>
          <form className="form">
            <div className="row">
              <div className="col">
                <input
                  type="email"
                  className=""
                  placeholder="Enter Your Email*"
                />
              </div>
              <div className="col">
                <input type="password" placeholder="Enter Your Password*" />
              </div>
            </div>
            <div className="row">
              <div className="col-login">
                <button type="button" className="loginBTN button">
                  LOGIN
                </button>
              </div>
              <div className="col forgot">
                <a href="#">Forgot Password ?</a>
              </div>
            </div>
          </form>
          <p className="back">
            <i className="fa-solid fa-angles-left"></i> Back{" "}
          </p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="social_login">
        <h2 className="h2">Easy Social Login</h2>
           
        <div className="signupIcon">
        <img className="googleicon" src="google-color.svg"></img>
        <span className="googleiconText">
            <div className="golgle">
          Sign Up with <strong>Google</strong>
            </div>
        </span>
        </div>
           
        <div id="my-signin2"></div>
      </div>
      <div className="divider"></div>
      <div className="account">
        <h2 className="h2">Don't have an account?</h2>
        <button type="button" className="account_btn button">
          Creat an Account
        </button>
      </div>
    </div>
  );
}
