// src/components/Logout.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/authSlice'; // Adjust the path based on your project structure

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Add any additional cleanup or API calls if needed
    dispatch(logoutUser());
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        padding: '10px',
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      Logout
    </button>
  );
};

export default Logout;
