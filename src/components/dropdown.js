import React, { useEffect } from 'react';
import M from 'materialize-css'; // Make sure you have imported Materialize CSS library

const MultipleSelect = () => {
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
      <option value={1}>Option 1</option>
      <option value={2}>Option 2</option>
      <option value={3}>Option 3</option>
    </select>
    <label>Materialize Multiple Select</label>
  </div>
  
  );
};

export default MultipleSelect;

