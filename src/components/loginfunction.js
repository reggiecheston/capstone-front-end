import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const Login = (e) => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const submit = document.getElementById("submit");
    console.log(email, password);
    e.preventDefault();

    fetch("https://code-beetle.glitch.me/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(email, password);
        if (email || password === undefined) {
          console.log(data.message); // Fixed: data.message should be outside quotes to print actual message
          return;
        } else {
          localStorage.clear();
          localStorage.setItem("user", JSON.stringify(data.user));
          window.location.href = data.user.isAdmin ? "/admin" : "/dashboard";
        }
      });
  };
}
