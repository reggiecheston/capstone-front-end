
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
            <body>
                <main>
                    <div className="row">

                        <TaskBarDev
                                Head="New"
                                Count="5" />
                        <TaskBarDev
                                Head="In Progress"
                                Count="5" />
                        <TaskBarDev 
                                Head="Completed"
                                Count="5"/>
                    </div>
                </main>
            </body>
            <Footer />
        </div>
    );
}
