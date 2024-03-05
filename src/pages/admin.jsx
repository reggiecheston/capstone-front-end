
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
                    <div className="row">
                        <TaskBarAdmin 
                                Head="Escalated"
                                Count="5"/>

                        <TaskBarAdmin
                                Head="New"
                                Count="5" />
                        <TaskBarAdmin
                                Head="In Progress"
                                Count="5" />
                        <TaskBarAdmin 
                                Head="Completed"
                                Count="5"/>
                    </div>
                </main>
            <Footer />
        </div>
    );
}
