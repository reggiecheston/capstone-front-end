
import React from "react";
import Navbar from "../components/Navbar";
import "../css/userViews.css";
import TaskBarAdmin from "../components/taskBarAdmin";
import "../css/style.css";
import Footer from "../components/footer";


export default function Admin() {
    return (
        <div>
            <Navbar />
                <main>
                    <div className="row" id="taskBox">
                        <TaskBarAdmin 
                                Head="Reports"
                                Count="5 Total"/>

                    
                    </div>
                </main>
            <Footer />
        </div>
    );
}
