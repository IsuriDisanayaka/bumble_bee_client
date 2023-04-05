import React from 'react'

import { BrowserRouter as Router, Routes, Route ,Switch} from 'react-router-dom';
import CustomerDetails from './pages/CustomerDetails'
import WelcomePage from './pages/WelcomePage';


import './App.css';
import Dashboard from './pages/ListItems'
// import { mainListItems } from './components/listItems';
import SignUp from './pages/SignUp';

import ViewAllCustomer from './pages/ViewAllCustomer';

function App() {
  return (
    // <Dashboard/>
    <Router>
    <div className="App"></div>
      <Route path="/" exact component={WelcomePage}/>
     
      <Route path ="/customerDetails" component={CustomerDetails}/> 
       <Route path="/customers" component={SignUp}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
      
      {/* <Switch>
     
    
         <Route path="/dashboard/orderpage">
          <OrderPage />
        </Route>
       
      </Switch> */}
      {/* </Route> */}
       </Router>
     
     
   
  )
  
}

export default App
