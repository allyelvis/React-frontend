import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Restaurant() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await axios.get('/api/restaurant/menu');
      setMenu(response.data);
    } catch (error) {
      console.error('Error fetching menu:', error);
    }
  };

  return (
    <div>
      <h1>Restaurant</h1>
      <ul>
        {menu.map(item => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default Restaurant;
