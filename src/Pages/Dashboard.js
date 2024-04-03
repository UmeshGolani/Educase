import React from 'react';
import { Typography, Box } from '@mui/material';

const Dashboard = ({ name, email }) => {
  return (
    <div style={{ maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Welcome, {name}!
      </Typography>
      <Box mb={2}>
        <img src="https://via.placeholder.com/150" alt="Profile" style={{ borderRadius: '50%', marginBottom: '10px' }} />
      </Box>
      <Typography variant="body1" paragraph>
        Your email: {email}
      </Typography>
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis urna nec sapien scelerisque.
      </Typography>
    </div>
  );
};

export default Dashboard;
