
import React from "react";
import Navbar from "../components/Navbar";
import "../css/userViews.css";
import TaskBarDev from "../components/taskBarDev";
import "../css/style.css";
import Footer from "../components/footer";


export default function Dev() {
    return (
        <div>
            <Navbar />
                <main>
                    <div className="row" id="taskBox">

                      
                        <TaskBarDev 
                                Head="Tickets"
                                Count="3 Total"/>
                    </div>
                </main>
            <Footer />
        </div>
    );
}
