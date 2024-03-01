
import React, { useEffect } from 'react';
import M from 'materialize-css';
import MultipleSelect from './dropdown';    


const props = {
    Head: "Head",
    Count: "Count",
    Category: "Category",
    Priority: "Priority",
    Title: "Title",
    Summary: "Description",
    Date: "Due Date",
    Developer: "Developer",
    Staff: "Staff"
   
  }
  

export default  function CollapsibleComponent(){
    useEffect(() => {
      // This code will be executed after the component mounts
      // and the DOM is ready
      var elems = document.querySelectorAll('.collapsible.expandable');
      var instances = M.Collapsible.init(elems, {accordion: false}); // You can pass options here if needed
    }, []); // Empty dependency array ensures that this effect runs only once after mounting
  

    
    return (
      <div>
      
      <ul class="collapsible expandable">
  
    <li>
      <div className="collapsible-header black-text">
        <i className="material-icons">reorder</i>
        {props.Category} 
        
        <div className="right"> 
        {props.Priority}
  </div>
      </div>
  
  
  
  
      <div className="collapsible-body black-text">
        {props.children}
        <h5>{props.Title}</h5>
                <p>{props.Summary}</p>
                <p>{props.Date}<div className="right">{props.Staff}</div></p>
                <p>{props.Developer}</p>

   
<MultipleSelect></MultipleSelect>

<button class="btn waves-effect waves-light" type="submit" name="action">start
   
  </button>
              </div>
          
          
    
    </li>
    
    </ul>
      </div>
    );
  }
  