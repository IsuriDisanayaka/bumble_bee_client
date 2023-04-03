import React from 'react'
import Footer from './components/Footer'
import Signup from './pages/SignUp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerDetails from './pages/CustomerDetails'
import AdminLogin from './pages/AdminLogin';
import WelcomePage from './pages/WelcomePage';
import Navigation from './components/Navigation';
import SignUp from './pages/SignUp';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App"></div>
      <Route path="/" exact component={WelcomePage}/>
      <Route path="/customers" component={SignUp} />
      <Route path ="/customerDetails" component={CustomerDetails}/>
      
       </Router>
  )
  
}

export default App
