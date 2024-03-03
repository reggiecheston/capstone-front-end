
import React, { useEffect } from 'react';
import M from 'materialize-css';
import '../css/style.css';
import MultipleSelect from './dropdown';    
import { Form } from 'react-router-dom';




const CollapsibleComponent = (props) => {
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
            <i className="material-icons">reorder</i>
            {props.Category} 
            <div className="right">{props.Priority}</div>
          </div>
          
          <div className="collapsible-body black-text blue-grey lighten-4" id="ticketBody">
          <h5><input className="center-align" type="text" placeholder={props?.Title} /></h5>

            <p id="summary"><input  className="center-align" type="text" placeholder={props?.Summary} /></p>

            <p id="datelineTop">Due Date:<div className="right">{props?.Date} </div></p>

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



            <button className="btn waves-effect waves-light" type="submit" name="action">Update</button>
            </div>
          </div>
          
        </li>
      </ul>
    </div>
  );
};

export default CollapsibleComponent;
