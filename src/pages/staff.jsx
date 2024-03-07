import React from "react";
import Navbar from "../components/Navbar";
import StaffView from "../components/staff"
import "../css/staff.css";
import Footer from "../components/footer";

export default function Staff() {
    return (
        <div>
            <Navbar></Navbar>
            <main>
            <StaffView></StaffView>
            </main>
            <Footer></Footer>
        </div>
    )
}