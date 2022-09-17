import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import apiHost from '../env';

const drawerWidth = 240;
export default function NavBar(props) {
  console.log({props})
  const [search, setSearch] = useState('')


    const navigation = useNavigate()
    const {pathname} = useLocation()
    const navigationMap = {
        nouser:[
          {name:'Home', path:'/userLandingPage'},
          {name:'Login', path:'/login'},
          {name:'Register', path:'/register'},
        ],
        user:[
            {name:'Home', path:'/userLandingPage'},
            {name:'MyBooks', path:'/userBooks'},
            {name:'MyOrders', path:'/userRentalsPage'}
        ],
        staff:[
            {name:'Home', path:'/staffDashboard'},
            {name:'Requests',path:'/staffRental'}
            
        ],
        admin:[
            {name:'Home', path:'/adminStaffControl'},
            {name:'User Control', path:'/adminUserControl'},

        ]

        
    }
    //console.log(navigationMap[props.user? .role])
    const navItems = navigationMap[props.user? props.user.role:'nouser'];
    console.log({navItems})
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            MyLibrary
          </Typography>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }} onClick={() => navigation(item.path)}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
            {props.user && <ListItem  disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }} onClick={()=> {signOut()}}>
                  <ListItemText primary='SignOut' />
                </ListItemButton>
              </ListItem>}
          </List>
        </Box>
      );

    const container = window !== undefined ? () => window().document.body : undefined;

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => (
    
    
    {
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));


  const signOut = () => {

    fetch(apiHost + 'signOut',{
      credentials:'include'
    })
    .then(res => {
      if(res.status == 200){
        props.setUser(null);
        sessionStorage.setItem('user', JSON.stringify(null))
        console.log('signed out')
        navigation('/')
      }
    })
  }
  return (
    <div>
        <AppBar component="nav" style={{backgroundColor:'black'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MyLibrary
          </Typography>
          {pathname=='/userLandingPage' &&
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
               
                 placeholder="Search books…"
                 inputProps={{ 'aria-label': 'search',value: search,"onChange":(e)=>{setSearch(e.target.value)} }}
              />
              {/* <input 
              placeholder="Search books…"
              onChange={e => {setSearch(e.target.value)}}
              inputProps={{ 'aria-label': 'search' }}/> */}
              
            </Search>}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.name} sx={{ color: '#fff' }} onClick={()=> navigation(item.path)}>
                {item.name}
              </Button>
            ))}
            {props.user&&<Button sx={{ color: '#fff' }} onClick={()=> {signOut()}}>
                SignOut
              </Button>}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </div>
  )
}
