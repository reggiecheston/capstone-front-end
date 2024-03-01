
import React from "react";
import Navbar from "../components/Navbar";
import "../css/userViews.css";
import TaskBarAdmin from "../components/taskBarAdmin";
import "../css/style.css";
import Footer from "../components/footer";



let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}


export default function Admin() {
    return (
        <div>
            <Navbar />
            <body>
                <main>
                    <div className="row">
                        <TaskBarAdmin 
                            
                                Head="green"
                                
                            
                     />
                     <TaskBarAdmin/>
                        <TaskBarAdmin />
                        <TaskBarAdmin />
                    </div>
                </main>
            </body>
            <Footer />
        </div>
    );
}
