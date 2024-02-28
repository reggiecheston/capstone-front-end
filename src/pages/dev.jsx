import React from "react";
import Navbar from "../components/Navbar";
import "../css/userViews.css";
import TaskBarDev from "../components/taskBarDev";
import "../css/style.css";
import Footer from "../components/footer";


export default function Dev() {
    return (
        <div>
        <Navbar></Navbar>
        <body>
        <main>
        <div className="row">
        <TaskBarDev></TaskBarDev>
        <TaskBarDev></TaskBarDev>
        <TaskBarDev></TaskBarDev>
        </div> 
        </main>
        </body>
        <Footer></Footer>
        </div>
    )
}