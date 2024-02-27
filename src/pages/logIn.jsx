import React from "react";
import Navbar from "../components/Navbar";
import "../css/login.css";
import LoginForm from "../components/login";


export default function Login() {
    return (
        <div>
            <Navbar></Navbar>
            <LoginForm></LoginForm>
        </div>
    )
}