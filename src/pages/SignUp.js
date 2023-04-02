import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import appStore from '../assets/img/appStore.png'
import playStore from '../assets/img/playStore.png'
import "../assets/css/SignUp.css"
import axios from 'axios';
import { useHistory } from 'react-router';




function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState(false);
  const [fullName, setFullName] = useState('');
  const [fullNameError, setFullNameError] = useState(false);
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState(false);
  const [contact, setContact] = useState('');
  const [contactError, setContactError] = useState(false);
  const [email, setEmail] = useState('');
  const [nic, setNic] = useState('');
  const [budget, setBudget] = useState('');
   const [dateOfBirth,  setBirthOfDate] = useState(null);
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
 



  const handleSubmit = (event) => {
    event.preventDefault();
   
  
    // Validate form data
    if (!firstName || !lastName || !address || !contact || !email || !nic || !budget || !dateOfBirth || !gender || !password || !confirmPassword) {
      alert('Please fill out all required fields.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
  // Prepare data for POST request
  const data = {
    firstName,
    lastName,
    fullName,
    address,
    contact,
    email,
    nic,
    budget,
    dateOfBirth,
    gender,
    password
  };
   // Make POST request to API
   axios.post('http://localhost:8000/api/v1/user', data)
   .then(response => {
     console.log('Successfully saved customer:', response.data);
     alert('Your account has been created.');
     setFirstName('');
     setLastName('');
     setFullName('');
     setAddress('');
     setContact('');
     setEmail('');
     setNic('');
     setBudget('');
     setBirthOfDate('');
     setGender('');
     setPassword('');
     setConfirmPassword('');
    
   })
   .catch(error => {
     console.error('Error saving customer:', error);
     alert('An error occurred. Please try again later.');
   });
};
 
    const handleDateSelect = (value) => {
      setBirthOfDate(value);
    };
    
  
    const handleDateChange = (value) => {
      setBirthOfDate(value);
   };
   
  
  return (
    <Box className ='mainBox'>
    <Box className='first-container'  sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }} >
      <form className='signUp-form'
       onSubmit={handleSubmit}
     
      >
      <p className='signup'>Sign up</p>
        <TextField required label="First Name" 
        value={firstName}  onChange={(e) => {
    const input = e.target.value;
    const regex = /^[a-zA-Z]+$/; 
    if (regex.test(input) || input === '') {
      setFirstName(input);
      setFirstNameError(false);
    }else{
      setFirstNameError(true);
    }
    }
  }
  error={firstNameError}
  helperText={firstNameError ? 'Invalid character' : ''}

         />
 
  
        <TextField required label="Last Name" 
        value={lastName}
          onChange={(e) => {
    const input = e.target.value;
    const regex = /^[a-zA-Z]+$/
    if (regex.test(input) || input === '') {
      setLastName(input);
      setLastNameError(false);
    }else{
      setLastNameError(true);
    }
    }
  }
  error={lastNameError}
  helperText={lastNameError ? 'Invalid character' : ''}
    
  
         />
        <TextField required label="Full Name"
         value={fullName}       onChange={(e) => {
    const input = e.target.value;
    const regex = /^[a-zA-Z]+$/
    if (regex.test(input) || input === '') {
      setFullName(input);
      setFullNameError(false);
    }else{
      setFullNameError(true);
    }
    }
  }
  error={fullNameError}
  helperText={fullNameError ? 'Invalid character' : ''}
        />
        <TextField required label="Address" 
        value={address}  onChange={(e) => {
    const input = e.target.value;
    const regex = /^[a-zA-Z0-9./ ,]+$/; // regular expression for allowed characters
    if (regex.test(input) || input === '') {
      setAddress(input);
      setAddressError(false);
    } else {
      setAddressError(true);
    }
  }}
  error={addressError}
  helperText={addressError ? 'Invalid character' : ''}
        />
        <TextField required label="Contact" type="tel" 
        value={contact} onChange={(e) => {
    const input = e.target.value;
    const regex = /^[0-9 +]+$/; // regular expression for allowed characters
    if (input.length <= 11 && (regex.test(input) || input === '')) {
      setContact(input);
      setContactError(false);
    } else {
      setContactError(true) ;  
      
    }
  
  }}
  error={contactError}
  helperText={contactError ? 'Invalid contact number' : ''}

        />
        <TextField required label="Email" type="email"
         value={email}  onChange={(e) => setEmail(e.target.value)}
          />
        <TextField required label="Nic" type="text" 
        value={nic}  onChange={(e) => setNic(e.target.value)} 

        />
         <TextField required label="Budget" type="int" 
        value={budget}  helperText={
     'Budget must be between 1000 and 15000'
  } onChange={(e) => setBudget(e.target.value)} 
        /> 
    
   
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
              className="date-picker"
              required
              label="Date Of Birth"
              selected={dateOfBirth}
              onSelect={handleDateSelect} //when day is clicked
              onChange={handleDateChange} //only when value has changed
            
    />
</LocalizationProvider>

<FormControl style={{ paddingLeft: "10px" }}>
    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
    <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
    >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
       
   <TextField required label="Password" type="text" 
        value={password}  onChange={(e) => setPassword(e.target.value)} 

        />
         <TextField required label="Re-Enter Password" type="text" 
        value={confirmPassword}  onChange={(e) => setConfirmPassword(e.target.value)}

        />
       
        <button className='submit' type="submit">Sign up</button>
     
      </form>
    <div>
     
    </div>
    
    </Box>

    <div className='second-container'>
    <div className='subdiv'>
    <p2 className='hadAccount'>If Already Have An Account</p2>
    <p className='semiTitle'>Download Our Mobile Version Now! </p> 
     <img className='appStore' src={appStore} alt='' />
      <img className='playStore' src={playStore} alt='' />
    </div>
    </div>
    </Box>
  );
}
export default SignUp;
