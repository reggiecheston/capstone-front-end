import React, { useState, useEffect } from "react";
import "../css/staff.css";
import { useNavigate } from "react-router-dom";
import ReportFunction from "./reportFunction";

import M from "materialize-css";

export default function Staff() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Define isLoading state
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Add state for submission success

  // const [staffId, setStaffId] = useState(1);

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

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSummaryChange = (e) => {
    setSummary(e.target.value);
  };
  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const details = {
      category: category,
      priority: priority,
      title: title,
      dueDate: dueDate,
      summary: summary,
      // staffId: staffId,
    };

    try {
      const response = await fetch("http://localhost:4000/staff", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });

      if (!response.ok) {
        console.log(response);
        throw new Error("Failed to submit report");
      }
      setIsSubmitted(true); // Set submission success state to true
      setIsLoading(false); // Set loading state back to false
      setError(null);
      resetFormFields(); // Reset form fields upon successful submission
      setTimeout(() => setIsSubmitted(false), 3000); // Hide success message after 3 seconds
    } catch (error) {
      setError(error.message);
      setIsLoading(false); // Set loading state back to false if request fails
    }
  };
  const resetFormFields = () => {
    setCategory("");
    setPriority("");
    setTitle("");
    setSummary("");
    setDueDate("");
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const details = {
  //     category: category,
  //     priority: priority,
  //     title: title,
  //     date: date,
  //     summary: summary,
  //   };

  //   const response = await fetch("/staff", {
  //     method: "POST",
  //     headers: {
  //       "content-Type": "application/json",
  //     },
  //     body: JSON.stringify(details),
  //   });
  //   const reportData = `INSERT INTO reports (title, summary, category, priority, due_date, staff_id)
  //   VALUES ('${reportData.title}', '${reportData.summary}', '${reportData.category}', '${reportData.priority}', '${reportData.date}', ${reportData.staff_id}); `;
  // };

  return (
    <section className="container2 blue-grey lighten-4 center">
      <header>
        <h5>Create New Ticket</h5>
      </header>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            id="title"
            required
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter Project Name"
            type="text"
            name="enter project name"
          />
        </div>
        <div className="column">
          <div className="select-box blue-grey lighten-4">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={handleCategoryChange}>
              <option value="" disabled></option>
              <option value="functional">functional</option>
              <option value="usability">usability</option>
              <option value="syntax-errors">syntax errors</option>
              <option value="missing-info">missing information</option>
              <option value="compatibility">compatibility</option>
              <option value="performance">performance</option>
              <option value="unit-level">unit level</option>
              <option value="calculation -errors">Calculation Erros</option>
              <option value="communication-errors">communication Errors</option>
              <option value="boundary-value-error">Boundary Value Error</option>
              <option value="unit-level">unit level</option>
            </select>
          </div>

          <div className="select-box blue-grey lighten-4" id="priority">
            <label>Priority</label>
            <select
              id="priority"
              value={priority}
              onChange={handlePriorityChange}>
              <option value="" disabled></option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="input-box">
            <label>Due Date</label>
            <input
              required
              placeholder="Due Date"
              type="date"
              onChange={handleDueDateChange}
              value={dueDate}
            />
          </div>
        </div>
        <div className="input-box text-color-black">
          <input
            value={summary}
            onChange={handleSummaryChange}
            required=""
            placeholder="Please Give Issue Description Here"
            type="text"
            style={{ height: "150px" }}
          />
        </div>
        <button
          className="teal lighten-2"
          type="submit  "
          disabled={isLoading}
          onClick={ReportFunction}>
          {" "}
          {/* Disable the button when isLoading is true */}
          {isLoading ? "Submitting..." : "Submit"}{" "}
          {/* Change button text based on isLoading */}
        </button>
        {isSubmitted && <p className="success-message">Report Submitted</p>}
        {error && <p className="error">{error}</p>}
      </form>
    </section>
  );
}
