
// import React, { useState } from 'react';

// import Box from '@mui/material/Box';
// import Navigation from '../components/Navigation';
// import  '../assets/css/Navigation.css';
// import logo  from '../assets/img/logo.png'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import close from '../assets/img/close.png'
// import axios from 'axios';



// export default function AdminLogin() {
//   const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const handleEmailChange = (event) => {
//   setEmail(event.target.value);
// };

// const handlePasswordChange = (event) => {
//   setPassword(event.target.value);
// };

// const handleLogin = (event) => {
//   event.preventDefault();
//   axios.get('http://localhost:8000/api/v1/admin/{email}/{password}')
//     .then((response) => {
//       if (response.status === 200) {
//         console.log('Successfully saved customer:', response.data);
      
//         alert('Sucess');
//       } else {
//         throw new Error("Login failed");
//       }
//     })
//     .then((data) => {
//       alert('Sucess'); // handle the data and update the state of the component
//     })
//     .catch((error) => {
//       // setError(error.message);
//     });
// };


//   return (
//     <form onSubmit={handleLogin}>
//     <label>
//       Email:
//       <input type="email" value={email} onChange={handleEmailChange} />
//     </label>
//     <br />
//     <label>
//       Password:
//       <input type="password" value={password} onChange={handlePasswordChange} />
//     </label>
//     <br />
//     <button type="submit">Login</button>
//   </form>
// //     <Box className='loginBox' >
// //  <div  >
// //        <Navigation/>
// //        </div>
// //        <div className='maindiv'>
// // <img  src={logo} className='logoo' />
// // <h1 className='signin'>SIGN IN</h1>
// // <card className='card'>
// //     <form className='formlogin' onClick={login}>
// // <TextField id="filled-basic" label="Email" value={email} onChange={handleEmailChange} />
// //   <TextField id="filled-basic" label="Password"  value={password} onChange={handlePasswordChange}/>
// //   <Button className='button' variant="outlined" color='primary'onClick={login}>
// //  LOGIN
// // </Button>
// //   </form>

// // </card>
// // </div>
// //    </Box>

//   )
// }
