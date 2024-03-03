import React, { useState, useEffect } from "react";
import "../css/staff.css";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Don't forget to import axios

import M from "materialize-css";

export default function Staff() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Define isLoading state
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Initialize Materialize select
    const elems = document.querySelectorAll("select");
    M.FormSelect.init(elems, {});
  }, []); // Empty dependency array ensures this effect runs only once after the component is mounted

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set isLoading to true when submitting
    setError(null);
    const details = {
      category: category,
      priority: priority,
    };

    try {
      // Simulate an asynchronous operation (e.g., API request)
      // Replace this with your actual API call
      setTimeout(async () => {
        // Example: const res = await axios.post('/api/tickets', details);
        // Once you have the response, you can handle it accordingly
        navigate("/success"); // Navigate to success page after successful submission
        setIsLoading(false); // Set isLoading to false after submission
      }, 2000); // Simulate a 2-second delay
    } catch (error) {
      console.error(error);
      setError("An error occurred while submitting the ticket.");
      setIsLoading(false); // Set isLoading to false if an error occurs
    }
  };

  return (
    
    <body>
      <section className="container2 blue-grey lighten-4 center">
        <header><h5>Create New Ticket</h5></header>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-box">
            <input required="" placeholder="Enter Project Name" type="text"  name="enter project name"/>
          </div>
          <div className="column">
            <div className="select-box blue-grey lighten-4">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                value={category}
                onChange={handlePriorityChange}>
                <option value="" disabled></option>
                <option value="high">frontend</option>
                <option value="medium">backend</option>
                <option value="low">security</option>
              </select>
            </div>

            <div className="select-box blue-grey lighten-4" id="priority">
              <label>Priority</label>
              <select
                id="priority"
                value={category}
                onChange={handlePriorityChange}>
                <option value="" disabled></option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div className="input-box">
              <label>Due Date</label>
              <input required="" placeholder="Due Date" type="date" />
            </div>
          </div>
          <div className="input-box text-color-black">
            
            <input
              required=""
              placeholder="Please Give Issue Description Here"
              type="text"
              style={{ height: "150px" }}
            />
          </div>
          <button
            className="teal lighten-2"
            type="submit  "
            disabled={isLoading}>
            {" "}
            {/* Disable the button when isLoading is true */}
            {isLoading ? "Submitting..." : "Submit"}{" "}
            {/* Change button text based on isLoading */}
          </button>
          {error && <p className="error">{error}</p>}{" "}
          {/* Display error message if error occurs */}
        </form>
      </section>
    </body>
   
  );
}
