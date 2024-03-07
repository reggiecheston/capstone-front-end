import React, { useEffect, useState } from 'react';
import './App.css';
import M from 'materialize-css';
import '../css/style.css';
import MultipleSelect from './dropdown';

const CollapsibleComponent = (props) => {
  useEffect(() => {
    // Initialize Materialize Collapsible when the component mounts
    var elems = document.querySelectorAll('.collapsible.expandable');
    var instances = M.Collapsible.init(elems, { accordion: false });
  }, []);

  return (
    <div>
      <ul className="collapsible expandable">
        <li>
          <div className="collapsible-header black-text">
            <i className="material-icons">reorder</i>
            {props.Category} 
            <div className="right">{props.Priority}</div>
          </div>
          
          <div className="collapsible-body black-text" id="ticketBody">
            <h5><input className="center-align" type="text" placeholder={props?.Title} /></h5>
            <p id="summary"><input className="center-align" type="text" placeholder={props?.Summary} /></p>
            <p id="datelineTop">Due Date:<div className="right">{props?.Date}</div></p>
            <div ><p id="datelineBottom">Issuing Staff:<div className="right">{props?.Staff}</div></p></div>

            <MultipleSelect 
              Option1="Option 1"
              Option2="Option 2"
              Option3="Option 3"
              dropdownLabel="Assign developer"
            />
            <MultipleSelect 
              Option1="Small"
              Option2="Medium"
              Option3="Large"
              dropdownLabel="Assign difficulty"
            />
            <MultipleSelect 
              Option1="Not Started"
              Option2="In Progress"
              Option3="Completed"
              dropdownLabel="Update Status"
            />
            <div className="center-align">
              <button className="btn waves-effect waves-light" type="submit" name="action">
                Update
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

const getTicket = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://code-beetle.glitch.me/admin")
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
    <div className='product-container'>
      {Array.isArray(data) ? (
        data.map((database) => (
          <CollapsibleComponent
            key={database.id} // Ensure each item has a unique key
            Category={database.Category}
            Priority={database.Priority}
            Title={database.Title}
            Summary={database.Summary}
            Date={database.Date}
            Staff={database.Staff}
          />
        ))
      ) : (
        <p>No tickets available</p>
      )}
    </div>
  );
};

export default getTicket;


// import "../css/userViews.css";
// import React, { useEffect } from 'react';
// import CollapsibleComponent from './collapseAdmin';




// const TaskBarAdmin = (props) => (
//   <>
//     <link
//       href="https://fonts.googleapis.com/icon?family=Material+Icons"
//       rel="stylesheet"
//     />
//     <link
//       rel="stylesheet"
//       type="text/css"
//       href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/css/materialize.min.css"
//     />

//     <div className="col s12 m3">
//       <div className="card grey darken-2">
//         <div className="card-content white-text">
//           <span className="card-title">{props.Head} <div className="right">{props.Count}</div></span>
//           <CollapsibleComponent  
//           Category= "Category"
//           Priority= "Priority"
//           Title= "Project Title"
//           Summary= "Descriptionnn"
//           Date= "12/12/2021"
//           Staff= "Adrian Brown"/> 



//         </div>
//       </div>
//     </div>
//   </>
// );




// export default TaskBarAdmin;