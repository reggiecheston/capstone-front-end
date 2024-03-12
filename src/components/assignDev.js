import React from 'react';

export default function AssignDev({ summary, priority, title, category, dueDate}) {
    const handleSubmit = (e) => {
      e.preventDefault();
      
      fetch('http://sql5.freemysqlhosting.net/updatedTickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          title: title,
          summary: summary,
          category: category,
          priority: priority,
          dueDate: dueDate,
          // staffId: staffId
         })
      })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          console.log(data.error);
          return;
        } else {
          localStorage.clear();
          localStorage.setItem('user', JSON.stringify(data.user));
          window.location.href = data.user ? '/admin' : '/admin';

        }
      })
      .catch(error => console.error('Error:', error));
    };
  
    return (
      <button className="teal lighten-2" type="submit" onClick={handleSubmit}>
        Submit
      </button>
    );
  }
  