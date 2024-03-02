import React from "react";
import Navbar from "../components/Navbar";
import StaffView from "../components/staff"
import "../css/staff.css";
//import Footer from "../components/footer";

export default function Staff() {
    return (
        <div>
            <Navbar></Navbar>
            <StaffView></StaffView>
        </div>
    )
}