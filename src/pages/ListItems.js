import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { makeStyles } from "@mui/styles";

import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Home from '../pages/Dashboard';
import Settings from '../components/Footer';
import ViewAllCustomer from './ViewAllCustomer';
import ItemsPage from './ItemsPage';
import CategoryIcon from '@mui/icons-material/Category';
import SignUp from './SignUp';
import WelcomePage from './WelcomePage'
import LogoutIcon from '@mui/icons-material/Logout';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height:'100%',
    
    
  },
  list: {
    width: 200,
    
  },
  content: {
    flexGrow: 1,
    padding:'10px',
  },
}));
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);



function ListItems() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  function logout() {
   
    
    window.location.href = '/'; 
  }
  


  return (
    <div>
    <div >
        {/* <CssBaseline /> */}
        <AppBar position="absolute" style={{background:'back'}} open={open}>
          <Toolbar
            style={{
              pr: '24px', 
             backgroundColor:'black'// keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Admin Dashboard
            </Typography>
            
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav" >
            
          
            
          </List>
        </Drawer>
        </div>
        <div className={classes.root}>
      <Router>
      <Drawer style ={{height:'100vh'}}variant="permanent" open={open}>
        <List component="nav" className={classes.list}>
          {/* <Divider sx={{ my: 1 }} /> */}
          <Link to="/" style={{ textDecoration: 'none', color: 'white' , backgroundColor: 'black',
    }}>
            <ListItem button style={{ backgroundColor: 'black'}}>
              <ListItemIcon>
              <HomeIcon style={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link  to="/ViewAllCustomer" style={{ textDecoration: 'none', color: 'white' , backgroundColor: 'black'}}>
            <ListItem button style={{ backgroundColor: 'black',position: 'relative',
    top: '50px',}}>
              <ListItemIcon>
             <PeopleAltIcon style={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="Customers" />
            </ListItem>
          </Link>
          <Link  to="/ViewAllItem" style={{ textDecoration: 'none', color: 'white' , backgroundColor: 'black'}}>
            <ListItem button style={{ backgroundColor: 'black',position: 'relative',
    top: '120px',}}>
              <ListItemIcon>
             <CategoryIcon style={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="Items" />
            </ListItem>
          </Link>
          <Link to="/" onClick={logout} style={{ textDecoration: 'none', color: 'white', backgroundColor: 'black'}}>
  <ListItem button style={{ backgroundColor: 'black', position: 'relative', top: '332px' }}>
    <ListItemIcon>
      <LogoutIcon style={{color:'white'}}/>
    </ListItemIcon>
    <ListItemText primary="Logout" />
  </ListItem>
</Link>

          {/* <Link  to="/logout" style={{ textDecoration: 'none', color: 'white' , backgroundColor: 'black'}}>
            <ListItem button style={{ backgroundColor: 'black',position: 'relative',
    top: '332px',}}>
              <ListItemIcon>
             <LogoutIcon style={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </Link> */}
        </List>
        </Drawer>
        <div className={classes.content}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ViewAllCustomer" component={ViewAllCustomer}/>
            <Route path="/ViewAllItem" component={ItemsPage}/>

            
            {/* <Route path="/logout" component={WelcomePage} /> */}
          </Switch>
        </div>
      </Router>
    </div>
    </div>
  )
}

export default ListItems
