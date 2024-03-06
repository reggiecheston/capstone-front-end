import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UpdateTicket() {
  const [ticket, setTicket] = useState({ title: '', summary: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/staff');
        const data = response.data;
        setTicket({
          title: data.title,
          summary: data.summary
        });
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>{ticket.title}</h1>
      <p>{ticket.summary}</p>
    </div>
  );
}

export default UpdateTicket;