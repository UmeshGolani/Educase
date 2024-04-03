import React from 'react';
import { Typography, Box } from '@mui/material';
import logoMen from '../Assets/logoMan.png'

const Dashboard = () => {
  // Retrieve user data from local storage
  const userData = JSON.parse(localStorage.getItem('dash')) || {name : "Umesh", email : "email@email.com"};
  const { name, email } = userData;

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', textAlign: 'center', border: '1px solid #ccc', borderRadius: '5px', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Welcome, <strong>{name}</strong>!
      </Typography>
      <Box mb={2}>
        <img src={logoMen} alt="Profile" style={{ borderRadius: '50%', marginBottom: '10px', width: '100px', height: '100px' }} />
      </Box>
      <Typography variant="body1" paragraph style={{ color: '#666' }}>
        Name: {name}
      </Typography>
      <Typography variant="body1" paragraph style={{ color: '#666' }}>
        Email: {email}
      </Typography>
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis urna nec sapien scelerisque.
      </Typography>
    </div>
  );
};

export default Dashboard;
