import logo from './logo.svg';
import './App.css';
import SignupForm from './Pages/SignupForm';
import {TextField, Typography} from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './Pages/LoginForm';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      <Route path='/' Component={Home} />
        <Route path='/signup' Component={SignupForm} />
        <Route path='/login' Component={LoginForm} />
        <Route path='/dashboard' Component={Dashboard} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
