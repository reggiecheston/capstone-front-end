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
                padding: "32px 48px 20px 48px",
                borderRadius: "6px",
              }}>
              <form className="col s12" method="post" action="/login">
                <div className="section" />
                <h2 className="f">Log In</h2>
                <div className="section" />
                <div className="row">
                  <div className="col s12"></div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      placeholder="Enter your email"
                      className="validate black-text"
                      type="email"
                      name="email"
                      id="email"
                    />
                    <label htmlFor="email black-text"></label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      placeholder="Enter your password"
                      className="validate"
                      type="password"
                      name="password"
                      id="password"
                    />
                    <label htmlFor="password"></label>
                  </div>
                  <label style={{ alignContent: "center" }}>
                    <a className="f" href="#!">
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
                      className="col s12 btn btn-large waves-effect teal lighten-2"
                      style={{ borderRadius: "6px" }}>
                      Login
                    </button>
                  </div>
                  <a className="f" id="contact" href="#!">
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
