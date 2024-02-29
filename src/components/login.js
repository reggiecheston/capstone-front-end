import React from "react";
import "../css/login.css";

export default function LoginForm() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/css/materialize.min.css"
      />

      <div className="section" />
      <main>
        <center>
          <div className="container">
            <div
              className=" blue-grey lighten-4 row"
              style={{
                display: "inline-block",
                padding: "32px 48px 0px 48px",
                border: "1px solid #EEE",
              }}>
              <form className="col s12" method="post" action="/login">
                <div className="section" />
                <h5 className="black-text">Please login into your account</h5>
                <div className="section" />
                <div className="row">
                  <div className="col s12"></div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      className="validate"
                      type="email"
                      name="email"
                      id="email"
                    />
                    <label htmlFor="email">Enter your email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      className="validate"
                      type="password"
                      name="password"
                      id="password"
                    />
                    <label htmlFor="password">Enter your password</label>
                  </div>
                  <label style={{ alignContent: "center" }}>
                    <a className="deep-orange-text" href="#!">
                      <b> Forgot Password?</b>
                    </a>
                  </label>
                </div>
                <br />
                <center>
                  <div className="row">
                    <button
                      type="submit"
                      name="btn_login"
                      className="col s12 btn btn-large waves-effect teal lighten-2">
                      Login
                    </button>
                  </div>
                  <a className="deep-orange-text" href="#!">
                    {" "}
                    Contact Support
                  </a>
                </center>
              </form>
            </div>
          </div>
        </center>
        <div className="section" />
        <div className="section" />
      </main>
    </>
  );
}
