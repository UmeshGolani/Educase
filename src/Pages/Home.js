import React from "react";
import { Typography, Button, Box, Container, Card, CardContent } from '@mui/material';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate("/create-account");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Container maxWidth="sm">
      <Card sx={{ marginTop: '100px', boxShadow: 6 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center" className="title">Welcome to PopX</Typography>
          <Typography variant="body1" paragraph align="center" className="paragraph">Discover amazing things with PopX.</Typography>
          <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
            <Button variant="contained" color="primary" onClick={handleCreateAccount} sx={{ marginRight: '10px' }}>Create Account</Button>
            <Button variant="outlined" color="primary" onClick={handleLogin}>Already Registered? Login</Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Home;
