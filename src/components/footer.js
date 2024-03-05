import React from "react";
import beetleLogo from "../images/code-beetle-icon.png";

export default function Footer() {
  return (
    <footer className="page-footer teal lighten-2">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">
              <a href="/">
                <img
                  src={beetleLogo}
                  alt="Beetle Logo"
                  id="footerLogo"
                  className="center-align"
                />
              </a>
            </h5>
            <div className="divider black"></div>
            <p className="footerText">
              At CodeBeetle, our mission is to streamline the bug and code
              refactoring process within your company's ecosystem. With our
              private platform, we offer a secure environment for managing
              tickets and facilitating collaboration among your development
              team. CodeBeetle empowers your team to enhance the quality and
              efficiency of your software projects.{" "}
            </p>
          </div>

          <div id="supportBox" className="col l4 offset-l2 s12 footerLinks">
            <h4>Support</h4>
            <div className="divider black"></div>

            <ul>
              <li>
                <a className="footerLinks" href="#!">
                  Help & FAQ
                </a>
              </li>
              <li>
                <a className="footerLinks" href="#!">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a className="footerLinks" href="#!">
                  Priavcy Policy
                </a>
              </li>
              <li>
                <a className="footerLinks" href="#!">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
