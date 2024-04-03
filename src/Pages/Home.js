import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to PopX
      </Typography>
      <Typography variant="body1" paragraph>
        Discover amazing things with PopX.
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
        <Button variant="contained" color="primary" component={Link} to="/signup" style={{ marginRight: '10px' }}>
          Create Account
        </Button>
        <Button variant="outlined" color="primary" component={Link} to="/login">
          Already Registered? Login
        </Button>
      </Box>
    </div>
  );
};

export default Home;
