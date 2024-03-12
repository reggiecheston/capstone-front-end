import React from 'react';

export default function UpdateStatus({ reportId, status }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch(`http://localhost:4000/reports/${reportId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status })
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        console.log(data.error);
        return;
      } else {
        console.log('Status updated successfully');
      }
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <button className="teal lighten-2" type="submit" onClick={handleSubmit}>
      Update Status
    </button>
  );
}