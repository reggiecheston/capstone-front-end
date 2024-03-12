import "../css/userViews.css";
import React, { useEffect, useState } from "react";
import CollapsibleComponent from "./collapseDev";

const TaskBarDev = (props) => {
  const [data, setData] = useState([]);

  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    fetch("http://sql5.freemysqlhosting.net/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category,
        priority,
        title,
        summary,
        dueDate,
        staffId: props.staffId, // Assuming staffId is passed as a prop
      }),
    })
      .then((res) => res.json())
      .then((responseData) => {
        setData(responseData); // Set the data returned from the fetch request
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
              data.map((tickets, index) => (
                <CollapsibleComponent
                  key={index} // or use a unique id from your data if available, like tickets.id
                  category={tickets.category}
                  priority={tickets.priority}
                  title={tickets.title}
                  summary={tickets.summary}
                  dueDate={tickets.dueDate}
                  staffId={tickets.staffId}
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

export default TaskBarDev;
