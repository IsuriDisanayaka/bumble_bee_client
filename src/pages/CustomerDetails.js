import React, { useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Box, Toolbar, AppBar } from '@mui/material';
import Typography from '@mui/material/Typography';
import "../assets/css/CustomerDetails.css";
 import logo from "../assets/img/logo.png"
 import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';




function CustomerDetails() {
  const [selectedImage, setSelectedImage] = useState(null);
  const location = useLocation();
  const data = location.state.data;
  const history = useHistory();

   console.log(data);
  
  
   
  
    if (!data) {
      return <div>No data to display.</div>;
    }
    
  
  
   
   
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.includes('image')) {
          const reader = new FileReader();
          reader.onload = () => {
            setSelectedImage(
              <img
                src={reader.result}
                alt="Selected"
                style={{ borderRadius: '50%', width: '200px', height: '200px' }}
              />
            );
          };
          reader.readAsDataURL(file);
        }
      };
      
  return (
 
    <div className='main-div'>
    
     <AppBar
      className="nav-box" position="static">

      <Toolbar>
      <img src={logo} alt="Click me!" onClick={() => history.push('/')} />


          <Typography variant="h6" component="div" style= {{textDecorationLine:"none"  ,textDecoration: "none", ontSize:"19px",fontFamily:"Cambria", color: '#FFFFFF',   flexGrow: 1 }}>
           Bumble bee
          </Typography>
      </Toolbar>
      </AppBar> 
   
      <h1 className='welcomeText'>Welcome to Bumble bee</h1>
      {/* <div>
       <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && <img src={selectedImage} alt="Selected" />} 
    </div> */}
      <table>
      <TableHead>
        <TableRow>
          <TableCell style={{padding: '10px'}}>ID</TableCell>
          <TableCell style={{padding: '10px'}}>First Name</TableCell>
          <TableCell style={{padding: '10px'}}>Last Name</TableCell>
          <TableCell style={{padding: '10px'}}>Full Name</TableCell>
          <TableCell style={{padding: '10px'}}>Address</TableCell>
          <TableCell style={{padding: '10px'}}>Contact</TableCell>
          <TableCell style={{padding: '10px'}}>Email</TableCell>
          <TableCell style={{padding: '10px'}}>NIC</TableCell>
          <TableCell style={{padding: '10px'}}>Date of Birth</TableCell>
          <TableCell style={{padding: '10px'}}>Gender</TableCell>
          <TableCell style={{padding: '10px'}}>Budget</TableCell>
          <TableCell style={{padding: '10px'}}>Created Date</TableCell>
          <TableCell style={{padding: '10px'}}>Password</TableCell>
        </TableRow>
      </TableHead>
  <tbody>
    <tr 
    //</tbody>th:each="user : ${users}"
    >
      <td
      //</tr> th:text="${user.id}"
      >
{data.data.id}
      </td>
      <td 
     // th:text="${user.firstName}"
      >
        {data.data.firstName}
      </td>
      <td 
      //th:text="${user.lastName}"
      >
{data.data.lastName}
      </td>
      <td 
      //</tr>th:text="${user.fullName}"

      >{data.data.fullName}

      </td>
      <td 
      //</tr>th:text="${user.address}"

      >
        {data.data.address}
      </td>
      <td >
       {data.data.contact}

      </td>
      <td >
       {data.data.email}

      </td>
      <td >
      {data.data.nic}
      </td>
      <td >
      {data.data.dateOfBirth.substr(0, 10)}
      </td>
      <td>
      {data.data.gender}
      </td>
      <td  > {data.data.budget}</td>
      <td 

      >
         {data.data.createdDate.substr(0, 10)}
      </td>
      <td >
      {data.data.password}
      </td>
    </tr>
  </tbody>
</table>
<div className='footer'>
      <Footer />
      </div>
    </div>
    
  );
}

export default CustomerDetails;
