import logo from './logo.svg';
import './App.css';
import SignupForm from './Pages/SignupForm';
import {TextField, Typography} from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <SignupForm/> */}
      {/* <TextField label="Enter something" variant="outlined" /> */}
      {/* <Typography variant="h4">Sign Up</Typography> */}
      <BrowserRouter>
      <Routes>
      <Route path='/' Component={SignupForm} />
        <Route path='/signup' Component={SignupForm} />
        <Route path='/login' Component={SignupForm} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
