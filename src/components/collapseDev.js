
import React, { useEffect, useState } from 'react';
import M from 'materialize-css';
import '../css/style.css';
import MultipleSelect from './dropdown';    
import { Form } from 'react-router-dom';



const CollapsibleComponent = (props) => {
  const [isUpdated, setIsUpdated] = useState(false);
  useEffect(() => {
    // Initialize Materialize Collapsible when the component mounts
    var elems = document.querySelectorAll('.collapsible.expandable');
    var instances = M.Collapsible.init(elems, { accordion: false });
  }, []);

  // Access props safely using optional chaining (?.)
  return (
    <div>
      <ul className="collapsible expandable">
        <li>
          <div className="collapsible-header black-text">
            <i className="material-icons">reorder</i><div>
            {props.category} </div>
          
          </div>
          
          <div className="collapsible-body black-text blue-grey lighten-4" id="ticketBody">
          <h5 className="center-align">{props?.title}</h5>

          <p id="summary" className="center-align" style={{ paddingTop: "10px" }}>{props?.summary}</p>
            <p id="datelineTop" className="center-align">Due Date: 3/4/24</p>

            <div ><p id="datelineBottom" className="center-align">Issuing Staff: Bill Smith, Admin</p></div>

            <MultipleSelect 
             Option1="Not Started"
             Option2="In Progress"
             Option3="Completed"
             dropdownLabel="Update Status"
            />
            <div className="center-align">
            <button className="btn waves-effect waves-light" type="submit" name="action" onClick={() => setIsUpdated(true)}>Update</button>
            {isUpdated && <p id="updateMessage">Status Updated</p>}
            </div>
          </div>
          
        </li>
      </ul>
    </div>
  );
};

export default CollapsibleComponent;
