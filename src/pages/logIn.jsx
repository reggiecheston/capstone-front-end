import React from "react";
import Navbar from "../components/Navbar";
import "../css/login.css";
// import "../css/style.css";
import LoginForm from "../components/login";
import Footer from "../components/footer";

export default function Login() {
    return (
        <div>
            <Navbar></Navbar>
            <main>
            <LoginForm></LoginForm>
            </main>
            <Footer></Footer>
           

        </div>
    )
}