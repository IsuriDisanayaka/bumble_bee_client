import React  from 'react';
import Box from '@mui/material/Box';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../assets/css/WelcomePage.css';
import design from '../assets/img/design.png'
import background from '../assets/img/background.png'


function WelcomePage() {

  return (
    <Box >
      <Navigation />

      <div className='content'>
        <div className='div'>
           <p className='buy'>Buy Now </p>
          <p className='pay'>Pay Later !</p> 
          <div className='info'>
            <img className='background' src={background} alt='' />
            {/* <p className='title'>You Can Download </p>
            <p className='semiTitle'>Our Mobile Version Now! </p> */}
            {/* <img className='appStore' src={appStore} alt='' />
            <img className='playStore' src={playStore} alt='' /> */}
          </div>
          <p className='rev'>THE LATEST REVOLUTION IN SHOPPING .....</p>
          <img className='design' src={design} alt='' />
        </div>
      </div>
<div className='footer'>
      <Footer />
      </div>
    </Box>
  );
}

export default WelcomePage;
