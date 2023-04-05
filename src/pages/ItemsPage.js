import React, { useState ,useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import '../assets/css/ItemPage.css';
import ProductTable from '../components/ProductTable';


function ItemsPage() {
  const [formValues, setFormValues] = useState({
    name: '',
    brandName: '',
    description: '',
    price: '',
  });
  const [isSaved, setIsSaved] = useState(false);
  const [updateCount, setUpdateCount] = useState(0);
  const [count, setCount] = useState(0);
 
  function clearText() {
    setFormValues({
      name: '',
      brandName: '',
      description: '',
      price: '',
    });
  }
  
  const handleUpdateCount = () => {
    setCount(count + 1);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/v1/product', formValues)
      .then((response) => {
        console.log(response.data);
        alert('Sucess!');
        clearText();
        setIsSaved(true);
        setUpdateCount((prevCount) => prevCount + 1);
      })
      .catch((error) => {
        console.error(error);
        alert('Invaild.TryAgain');
      });
  };
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
 
  return (
    <Box className="mainBox">
   
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            width: 350,
            height: 400,
            paddingLeft:'10%'
          }}
        >
          <form onSubmit={handleFormSubmit} style={{  }}>
            <TextField
              required
              label="Item Name"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
            />
            <TextField
              required
              label="Brand Name"
              name="brandName"
              value={formValues.brandName}
              onChange={handleInputChange}
              sx={{ m: 1 }}
            />
            <TextField
              required
              label="Description"
              name="description"
              value={formValues.description}
              onChange={handleInputChange}
              sx={{ m: 1 }}
            />
            <TextField
              type="number"
              required
              label="Price"
              name="price"
              value={formValues.price}
              onChange={handleInputChange}
              sx={{ m: 1 }}
            />
            <button type="submit" className="savaItem">
              Save
            </button>
          </form>
        </Paper>
      </Grid>
      <Grid item xs={18} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            width: 800,
            height: 400,
            paddingLeft:'0%'
          }}
        >
      <ProductTable  updateCount={handleUpdateCount} 
isSaved={isSaved}/>
         </Paper>
      </Grid>
     
    
      <Box
        className="first-container"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
      >
        <div></div>
      </Box>
      <div className="second-container"></div>
    </Box>
  );
}

export default ItemsPage;
