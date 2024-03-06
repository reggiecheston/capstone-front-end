import React, { useEffect, useState } from 'react';
import CollapsibleComponent from './collapseAdmin';

const TaskBarAdmin = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/admin")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setData(data);
        } else {
          console.error('Invalid data format');
        }
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
              data.map((item) => (
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