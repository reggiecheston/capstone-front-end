import React, { useState } from "react";
import "../css/login.css";
import Login from "./loginfunction";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const details = {
      email: email,
      password: password,
    };

    const response = await fetch("https://code-beetle.glitch.me/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });
    const role = `SELECT admin_id, developer_id,staff_id FROM staff WHERE email = "${email}"`;
    if (response.ok) {
      console.log(response);
      const data = await response.json();
      console.log(data);
      if (data.user[0].admin_id) {
        navigate("/admin");
      } else if (data.user[0].developer_id) {
        navigate("/dev");
      } else {
        navigate("/staff");
      }
    }
  };

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
              }}
            >
              <form className="col s12" method="post" onSubmit={handleSubmit}>
                <div className="section" />
                <h5 className="black-text">Please login into your account</h5>
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
                      value={email}
                      onChange={(ev) => setEmail(ev.target.value)}
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
                      value={password}
                      onChange={(ev) => setPassword(ev.target.value)}
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
                      onClick={Login}
                      id="submit"
                      value="submit"
                      type="submit"
                      name="btn_login"
                      className="col s12 btn btn-large waves-effect teal lighten-2"
                      style={{ borderRadius: "6px" }}
                    >
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
