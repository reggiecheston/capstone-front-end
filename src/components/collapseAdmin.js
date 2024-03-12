
import React, { useEffect,useState } from 'react';
import M from 'materialize-css';
import '../css/style.css';
import MultipleSelect from './dropdown';    
import { Form } from 'react-router-dom';
import AssignDev from './assignDev';
// import fetchUpdatedData from '../../../capstone-back-end/server';


// const CollapsibleComponent = (props) => {
  // useEffect(() => {
  //   // Initialize Materialize Collapsible when the component mounts
  //   var elems = document.querySelectorAll('.collapsible.expandable');
  //   var instances = M.Collapsible.init(elems, { accordion: false });
  // }, []);
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch('http://localhost:4000/updatedTickets', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         title: props.title,
//         summary: props.summary,
//         dueDate: props.dueDate,
//         staff: props.staff,
//       }),
//     });

//     const data = await response.json();
//     console.log(data);
//   };

const CollapsibleComponent = (props) => {
  const [isUpdated, setIsUpdated] = useState(false);
  useEffect(() => {
    // Initialize Materialize Collapsible when the component mounts
    var elems = document.querySelectorAll('.collapsible.expandable');
    var instances = M.Collapsible.init(elems, { accordion: false });
  }, []);
  
  const [formData, setFormData] = useState({
    title: props.title || '',
    summary: props.summary || '',
    dueDate: props.dueDate || '',
    staff: props.staff || '',
  });

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/updatedTickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error submitting report:', error);
    }
  };





  // Access props safely using optional chaining (?.)
  return (
    <div onSubmit={handleSubmit}>
      <ul className="collapsible expandable">
        <li>
          <div className="collapsible-header black-text">
            <i className="material-icons">reorder</i>
            {props.category}
         
          </div>
          
          <div className="collapsible-body black-text blue-grey lighten-4" id="ticketBody">
          <h5 className="center-align" type="text" placeholder={props?.title}>{props.title}
          </h5>
          <div onSubmit={handleSubmit}> 
            <p id="summary" className="center-align" type="text" placeholder={props?.summary}>
              {props.summary}
            </p>

            <p id="datelineTop" className='center'>Due Date: 3/4/24</p>

            <div ><p id="datelineBottom" className='center'>Issuing Staff: Bill Smith</p></div>




            <MultipleSelect 
            Option1="Jane Doe"
            Option2="Erick Rodea"
            Option3="Brenda Manon"
            dropdownLabel="Assign developer"
            />
            {/* <MultipleSelect 
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
            /> */}
            <div className="center-align">



            <button className="btn waves-effect waves-light" type="submit" name="action" onClick={() => setIsUpdated(true)}>Update</button>
            {isUpdated && <p id="updateMessage">Ticket Assigned</p>}
            </div>
          </div>
           </div>
        </li>
      </ul>
    </div>
   
  );
};

export default CollapsibleComponent;
