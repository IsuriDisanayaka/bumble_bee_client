import React,{ useState }  from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import logo from "../assets/img/logo.png"
import closeIcon from "../assets/img/close.png"
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import "../assets/css/Navigation.css"
import axios from 'axios';
import { useHistory } from 'react-router-dom';



function Navigation() {
  const [showPopup,setShowPopup]=useState(false);
  const [email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const history = useHistory();

  
  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
 
  const handleLogin = (event) => {
    event.preventDefault();
    axios.get(`http://localhost:8000/api/v1/admin/${email}/${password}`)
  .then((response) => {
    if (response.status === 200 && response.data.data === "true") {
      console.log('Successfully logged in:', response.data);
      alert('Success');
      history.push('/dashboard');
    } else {
      console.error('Login failed:', response);
      alert('Login failed .Please try Again');
    }
  })
  .catch((error) => {
    console.error('Error logging in:', error);
  });

  }
  
  const handleClick = () => {
    setShowPopup(true);
  }

  
  return (
    <Box className='box'>
      <AppBar className="nav-box" position="static">
        <Toolbar>
          <img src={logo} />
          <Typography variant="h6" component="div" style= {{textDecorationLine:"none"  ,textDecoration: "none", ontSize:"19px",fontFamily:"Cambria", color: '#FFFFFF',   flexGrow: 1 }}>
           Bumble bee
          </Typography>
          <Link to="/customers" style={{ textDecoration: "none" }}>
          <Button

 
  style={{
    marginRight: "50px",
    fontSize: "18px",
    fontFamily: "Cambria",
    color: "white",
    variant: "outlined",
    '&:hover': {
      backgroundColor: 'white',
      color:'black'
    },
  }}
>
   Customers
</Button>
 </Link>

          <Button on onClick={handleClick}
           style={{marginRight: "50px" ,fontSize:"18px",fontFamily:"Cambria", color:"white",variant:"outlined", variant:"outlined",
              '&:hover': {
                backgroundColor: 'white',
                color:'black'
              },}} >Admin</Button>
                {showPopup && (
        <div className="popup">
          <div className="popup-inner">
          <img src={closeIcon} className="close-button" onClick={() => setShowPopup(false)} />
            <h2 style={{color:" #04AA6D"}}>Login</h2>
            <form >
            <Grid container direction={"column"} spacing={5}>
            <Grid item>
            <TextField required label="Email" type={"email"} value={email} onChange={handleUsernameChange}></TextField>
            </Grid>

            <Grid item>
        <TextField required label="Password" type={"password"} value={password} onChange={handlePasswordChange}></TextField>    
        </Grid>
        <Grid item>
        <button className='login-button' type="button" onClick={handleLogin}>Login</button>
        </Grid>
        </Grid>

             
            </form>
           
           
          </div>
        </div>
      
      )}
        </Toolbar>
      </AppBar>
      <div style={{ display: "flex",  height: "300vh", textAlign: "right",paddingLeft:"100px",fontFamily:"serif",fontSize:"40px" }}>
     
    </div>
    </Box>
  );
}



export default Navigation
