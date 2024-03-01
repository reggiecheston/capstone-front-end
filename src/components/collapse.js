
import React, { useEffect } from 'react';
import M from 'materialize-css';
import '../css/style.css';
import MultipleSelect from './dropdown';    


// const props = {
//       Category: "Category",
//       Priority: "Priority",
//     Title: "Title",
//     Summary: "Description",
//     Date: "Due Date:",
//     Staff: "Staff"
//   }



export default function CollapsibleComponent() {
  const props = {
    Category: "Category",
    Priority: "Priority",
  Title: "Title",
  Summary: "Description",
  Date: "Due Date:",
  Staff: "Staff"
}

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
          <div className="collapsible-body black-text">
            <h5><input className='center-align' type="text" placeholder='Project Title' /></h5>
            <p>{props?.Summary}</p>
            <p>{props?.Date}<div className="right">{props?.Staff}</div></p>
            <MultipleSelect />
            <MultipleSelect />
            <MultipleSelect />
            <button className="btn waves-effect waves-light center-align" type="submit" name="action">Update</button>
          </div>
        </li>
      </ul>
    </div>
  );
}
