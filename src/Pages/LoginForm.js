import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    // Retrieve user data from local storage
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    const user = storedData.find(user => user.email === values.email && user.password === values.password);

    if (user) {
      // Set 'dash' in local storage
      localStorage.setItem('dash', JSON.stringify({ name:user.name, email: user.email }));

      // Navigate to dashboard page
      navigate('/dashboard');
    } else {
      alert('Invalid email or password');
      resetForm();
    }
  };

  return (
    <Box
      sx={{
        maxWidth: '400px',
        margin: 'auto',
        backgroundColor: '#f5f5f5',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Log In
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Box mb={2}>
              <Field
                as={TextField}
                name="email"
                label="Email"
                fullWidth
                error={errors.email && touched.email}
                helperText={errors.email && touched.email ? errors.email : ''}
              />
            </Box>
            <Box mb={2}>
              <Field
                as={TextField}
                name="password"
                label="Password"
                type="password"
                fullWidth
                error={errors.password && touched.password}
                helperText={errors.password && touched.password ? errors.password : ''}
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ borderRadius: '20px', marginTop: '20px' }}
            >
              Log In
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm;
