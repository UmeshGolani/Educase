import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const history = useHistory();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      // Simulate login process with delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to dashboard page after successful login
      history.push('/dashboard', { email: values.email });
      
      // Reset form fields and set submitting state
      resetForm();
      setSubmitting(false);
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error, e.g., display error message
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Log In
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <Field
              as={TextField}
              name="email"
              label="Email"
              fullWidth
              error={errors.email && touched.email}
              helperText={errors.email && touched.email ? errors.email : ''}
            />
            <Field
              as={TextField}
              name="password"
              label="Password"
              type="password"
              fullWidth
              error={errors.password && touched.password}
              helperText={errors.password && touched.password ? errors.password : ''}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }} disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Log In'}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
