import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const initialValues = {
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: '', // Updated: changed from boolean to string
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    phoneNumber: Yup.string()
      .required('Phone Number is required')
      .matches(/^\d{10}$/, 'Phone Number must be exactly 10 digits'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    companyName: Yup.string().required('Company Name is required'),
    isAgency: Yup.string(), // Updated: changed from boolean to string
  });

  const handleSubmit = (values, { resetForm }) => {
    const formData = {
      fullName: values.fullName,
      phoneNumber: values.phoneNumber,
      email: values.email,
      password: values.password,
      companyName: values.companyName,
      isAgency: values.isAgency,
    };

    const existingData = JSON.parse(localStorage.getItem('formData')) || [];
    const isAlreadyPresent = existingData.some(data => data.phoneNumber === formData.phoneNumber);

    if (isAlreadyPresent) {
      alert('This phone number is already registered.');
      return;
    }

    existingData.push(formData);
    localStorage.setItem('formData', JSON.stringify(existingData));

    resetForm();
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Sign Up
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form style={{ border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
            <Box mb={2}>
              <Field
                as={TextField}
                name="fullName"
                label="Full Name"
                fullWidth
                error={errors.fullName && touched.fullName}
                helperText={errors.fullName && touched.fullName ? errors.fullName : ''}
              />
            </Box>
            <Box mb={2}>
              <Field
                as={TextField}
                name="phoneNumber"
                label="Phone Number"
                fullWidth
                error={errors.phoneNumber && touched.phoneNumber}
                helperText={errors.phoneNumber && touched.phoneNumber ? errors.phoneNumber : ''}
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                onKeyPress={(event) => {
                  const charCode = event.which ? event.which : event.keyCode;
                  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                    event.preventDefault();
                  }
                }}
              />
            </Box>
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
            <Box mb={2}>
              <Field
                as={TextField}
                name="companyName"
                label="Company Name"
                fullWidth
                error={errors.companyName && touched.companyName}
                helperText={errors.companyName && touched.companyName ? errors.companyName : ''}
              />
            </Box>
            <FormControl component="fieldset" error={errors.isAgency && touched.isAgency}>
              <FormLabel component="legend">Are you an agency?</FormLabel>
              <RadioGroup row name="isAgency">
                <FormControlLabel value="true" control={<Radio />} label="Yes" />
                <FormControlLabel value="false" control={<Radio />} label="No" />
              </RadioGroup>
              {errors.isAgency && touched.isAgency && <Typography variant="body2" color="error">{errors.isAgency}</Typography>}
            </FormControl>
            <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
              Sign Up
            </Button>
            <Typography variant="body1" align="center" style={{ marginTop: '10px' }}>
              Already have an account? <Link to="/login">Log in</Link>
            </Typography>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
