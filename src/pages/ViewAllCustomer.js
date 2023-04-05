import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from "@mui/styles";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableSortLabel from '@mui/material/TableSortLabel';

import "../assets/css/WelcomePage.css";
import jsPDF from 'jspdf';
import 'jspdf-autotable';



const useStyles = makeStyles({
  table: {
    minWidth: 650,
    
  },
});


const ViewAllCustomer = () => {
    const [data, setData] = useState([]);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('id');
    const [visible, setVisible] = useState(false);
     const [searchResults, setSearchResults] = useState([]);
  const [highlightedRow, setHighlightedRow] = useState(null);
  const [showSearchResults, setShowSearchResults] = useState(false);

    const handleReset = () => {
      setShowSearchResults(false);
      setSearchResults([]);
    };
  
  
    useEffect(() => {
      axios.get('http://localhost:8000/api/v1/user').then((response) => {
        setData(response.data.data);
      });
    }, []);
    
    const handleSearch = (type, input) => {
      axios
        .get(`http://localhost:8000/api/v1/user/${type}/${input}`)
        .then((response) => {
          setData(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    
    const handleSort = (property) => () => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };
    const handleClick = (id) => {
      const clickedData = data.find((row) => row.id === id);
     
      
    };
    function downloadPDF() {
      const doc = new jsPDF();
    
      doc.autoTable({
        head: [['ID', 'First Name', 'Last Name', 'Full Name', 'Address', 'Contact', 'Email', 'NIC', 'Date of Birth', 'Gender', 'Budget', 'Created Date', 'Email Verify']],
        body: data.map((row) => [row.id, row.firstName, row.lastName, row.fullName, row.address, row.contact, row.email, row.nic, row.dateOfBirth.substr(0, 10), row.gender, row.budget, row.createdDate.substr(0, 10), row.enabled ? 'Verified' : 'Not verified yet']),
      });
    
      doc.save('table.pdf');
    }
    
    
    return (
      <div >
      

      <div className="card  div">
        <div className="card flex flex-column md:flex-row gap-3">
        <div>
  <input type="text" id="search-input" />
  <select id="search-type">
  <option value="id">Id</option>
    <option value="fullName">Full Name</option>
    <option value="address">Address</option>
  </select>
  <button onClick={() => handleSearch(document.getElementById('search-type').value, document.getElementById('search-input').value)}>Search</button>
  {showSearchResults && (
          <button onClick={handleReset}>Reset</button>
        )}
</div>
</div>
</div>








      <div >
      <TableContainer component={Paper}>
        <Table >
          <TableHead  >
            <TableRow >
              <TableCell>ID</TableCell>
              <TableCell 
                sortDirection={orderBy === 'firstName' ? order : false}
              >
                <TableSortLabel 
                  active={orderBy === 'firstName'}
                  direction={orderBy === 'firstName' ? order : 'asc'}
                  onClick={handleSort('firstName')}
                >
                  First Name
                </TableSortLabel>
              </TableCell>
              <TableCell
                sortDirection={orderBy === 'lastName' ? order : false}
              >
               <TableSortLabel 
                  active={orderBy === 'lastName'}
                  direction={orderBy === 'lastName' ? order : 'asc'}
                  onClick={handleSort('lastName')}
                >
                  Last Name
                </TableSortLabel>
              </TableCell>
              <TableCell >Full Name</TableCell>
              <TableCell >Address</TableCell>
              <TableCell >Contact</TableCell>
              <TableCell >Email</TableCell>
              <TableCell >NIC</TableCell>
              <TableCell >Date of Birth</TableCell>
              <TableCell >Gender</TableCell>
              <TableCell >Budget</TableCell>
              <TableCell >Created Date</TableCell>
              <TableCell >Email Verify</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id} onClick={() => handleClick(row.id)}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.fullName}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.contact}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.nic}</TableCell>
                <TableCell>{row.dateOfBirth.substr(0, 10)}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.budget}</TableCell>
                <TableCell>{row.createdDate.substr(0, 10)}</TableCell>
                <td>{row.enabled ? 'Verified' : 'Not verified yet'}</td>


              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
      <button onClick={downloadPDF}>Download PDF</button>


      </div>
      
  );
  };
  
  export default ViewAllCustomer;