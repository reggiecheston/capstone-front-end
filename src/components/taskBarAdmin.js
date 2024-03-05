import "../css/userViews.css";
import React, { useEffect } from "react";
import CollapsibleComponent from "./collapseAdmin";

const TaskBarAdmin = (props) => (
  <>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/css/materialize.min.css"
    />

    <div className="col s12 m3">
      <div className="card grey darken-2">
        <div className="card-content white-text">
          <span className="card-title">
            {props.Head} <div className="right">{props.Count}</div>
          </span>
          <CollapsibleComponent
            Category="Category"
            Priority="Priority"
            Title="Project Title"
            Summary="Descriptionnn"
            Date="12/12/2021"
            Staff="Adrian Brown"
          />
        </div>
      </div>
    </div>
  </>
);

export default TaskBarAdmin;

// import React, { useEffect, useState } from 'react';

// import M from 'materialize-css';
// import '../css/style.css';
// import MultipleSelect from './dropdown';
// import CollapsibleComponent from './collapse';
// const TaskBarAdmin = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://code-beetle-f86b91eebd52.herokuapp.com/admin")
//       .then(res => res.json())
//       .then(data => {
//         if (Array.isArray(data)) {
//           setData(data);
//         } else {
//           console.error('Invalid data format');
//         }
//       })
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className='container'>
//       {Array.isArray(data) ? (
//         data.map((database) => (
//           <CollapsibleComponent
//             key={database.id}
//             Category={database.Category}
//             Priority={database.Priority}
//             Title={database.Title}
//             Summary={database.Summary}
//             Date={database.Date}
//             Staff={database.Staff}
//           />
//         ))
//       ) : (
//         <p>No tickets available</p>
//       )}
//     </div>
//   );
// };

// export default TaskBarAdmin;
