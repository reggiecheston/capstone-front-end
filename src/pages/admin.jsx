import React from "react";
import Navbar from "../components/Navbar";
import "../css/userViews.css";
import TaskBarAdmin from "../components/taskBarAdmin";
import "../css/style.css";
import Footer from "../components/footer";


export default function Admin() {
    return (
        <div>
            <Navbar></Navbar>
            <body>
            <main>
                
            <div className="row">
                
            <TaskBarAdmin>
  

            </TaskBarAdmin>
            <TaskBarAdmin></TaskBarAdmin>
            <TaskBarAdmin></TaskBarAdmin>
            <TaskBarAdmin></TaskBarAdmin>
            
            </div>

           </main>
           </body>
            <Footer></Footer>
        </div>
    )
}