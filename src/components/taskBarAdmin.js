
import React, { useEffect, useState } from 'react';

// import M from 'materialize-css';
import '../css/style.css';
import CollapsibleComponent from './collapseAdmin';
// const mysql2 = require("mysql2");

  // const database = mysql2.createConnection({
  //   host: "database-1.c1suigess9hp.us-east-1.rds.amazonaws.com",
  //   user: "admin",
  //   password: "password",
  //   database: "capstone_team_3",
  // });

 //taskBarAdmin.js:39 SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON(anonymous)	@	taskBarAdmin.js:39


const TaskBarAdmin = (props) => {
  const [data, setData] = useState([]);


   

  useEffect((category, priority, title, summary, dueDate, staffId) => {
    fetch("http://localhost:4000/admin", {
      method: "POST",
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category:category,
        priority:priority,
        title:title,
        summary:summary,
        dueDate:dueDate,
        staffId:staffId

      }),
    })
      .then(res => res.json())
      .then(data => {
        


      })
      .catch(err => console.error(err));

      
  }, []);

  return (
    <div className="col s12 m3">
      <div className="card grey darken-2">
        <div className="card-content white-text">
          <span className="card-title">{props.Head} <div className="right">{props.Count}</div></span>
          <div className='container'>
            {Array.isArray(data) ? (
          console.log(data),
              data.map((database) => (
                <CollapsibleComponent
              
                  category={database.category}
                  priority={database.priority}
                  title={database.title}
                  summary={database.summary}
                  dueDate={database.dueDate}
                  staffId={database.staffId}

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