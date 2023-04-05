import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function ProductTable(props) {


  const { updateCount } = props;
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [highlightedRow, setHighlightedRow] = useState(null);
  const [showSearchResults, setShowSearchResults] = useState(false);

  


  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/product?random=' + Math.random())
      .then((response) => {
        setData(response.data.data);
        console.log(response.data.data)
      });
  }, [updateCount]);
  
  const handleSearch = () => {
    const input = document.getElementById('search-input').value;
    const type = document.getElementById('search-type').value;
    axios.get(`http://localhost:8000/api/v1/product/${type}/${input}`)
      .then((response) => {
        setData(response.data.data);
        setShowSearchResults(true); // set the showSearchResults state variable to true
        handleReset(); // reset the search results and showSearchResults state variables
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  

  const handleReset = () => {
   
    setSearchResults([]);
    setShowSearchResults(false);

  };


  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'brandName', headerName: 'Brand Name', width: 130 },
    { field: 'description', headerName: 'Description', width: 200 },
    { field: 'price', headerName: 'Price', type: 'number', width: 90 },
    {
      field: 'createdDate',
      headerName: 'Created Date',
      type: 'date',
      width: 120,
      valueGetter: (params) => new Date(params.row.createdDate),
    },
   
    {
      field: 'delete',
      headerName: 'Delete',
      width: 120,
      renderCell: (params) => {
        return (
          <button onClick={() => handleDelete(params.row.id)}>Delete</button>
        );
      },
    },
  ];

  const handleRowClick = (params) => {
    setSelectedRow(params.row);
    setShowPopup(true);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/v1/product/${id}`)
      .then((response) => {
        alert('Product deleted successfully.');
        
        // Refresh the table by updating the "updateCount" state variable
        // updateCount(updateCount + 1);
        props.updateCount(prevCount => prevCount + 1);

      })
      .catch((error) => {
        console.log(error);
      });
  };
  


  return (
    <div style={{ height: 400, width: '100%' }}>
      <div>
  <input type="text" id="search-input" />
  <select id="search-type">
    <option value="name">Name</option>
    <option value="brandName">Brand Name</option>
  </select>
  <button onClick={() => handleSearch(document.getElementById('search-type').value, document.getElementById('search-input').value)}>Search</button>
  {showSearchResults ? (
  <button onClick={handleReset}>Reset</button>
) : null}

</div>
      <DataGrid 
        rows={data}
        columns={columns}
        pageSize={5}
        sortingMode="server"
        disableSelectionOnClick
        onRowClick={handleRowClick}
        getRowClassName={(params) =>
          highlightedRow === params.rowIndex ? 'highlighted-row' : ''
        }
      />
      {showPopup && (
        <Popup handleClose={() => setShowPopup(false)}>
          <h2>Delete Row</h2>
          <p>Are you sure you want to delete row {selectedRow?.id}?</p>
          <button onClick={() => handleDelete(selectedRow.id)}>Delete</button>
        </Popup>
      )}
    </div>
  );
  
}
