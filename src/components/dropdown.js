import React, { useEffect } from 'react';
import M from 'materialize-css'; // Make sure you have imported Materialize CSS library

const MultipleSelect = (props) => {
  useEffect(() => {
    // Initialize Materialize form select when the component mounts
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (

    <div className="input-field col s12">
    <select multiple="">


      <option value=""  disabled selected>
        Choose your option
      </option>
      
      <option value={1}>{props.Option1}</option>
      <option value={2}>{props.Option2}</option>
      <option value={3}>{props.Option3}</option>
    </select>
    <label>{props.dropdownLabel}</label>
  </div>
  
  );
};

export default MultipleSelect;

