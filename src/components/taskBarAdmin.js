import React, { useEffect, useState } from "react";
import "../css/style.css";
import CollapsibleComponent from "./collapseAdmin";

const TaskBarAdmin = (props) => {
  const [data, setData] = useState([]);

  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    fetch("https://code-beetle.glitch.me/reports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        title: title,
        summary: summary,
        category: category,
        priority: priority,
        dueDate: dueDate,
        // staffId: staffId
      }),
    })
      .then((res) => res.json())
      .then((responseData) => {
        setData(responseData); // Set the data returned from the fetch request
        console.log(responseData);
      })
      .catch((err) => console.error(err));
  }, [category, priority, title, summary, dueDate, props.staffId]); // Add dependencies here

  return (
    <div className="col s12 m6">
      <div className="card grey darken-2">
        <div className="card-content white-text">
          <span className="card-title">
            {props.Head} <div className="right">{props.Count}</div>
          </span>
          <div className="container">
            {Array.isArray(data) && data.length > 0 ? (
              data.map((reports) => (
                <CollapsibleComponent
                  category={reports.category}
                  priority={reports.priority}
                  title={reports.title}
                  summary={reports.summary}
                  dueDate={reports.dueDate}
                  staffId={reports.staffId}
                />
              ))
            ) : (
              <p>No tickets available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskBarAdmin;
