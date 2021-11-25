import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../../hooks/UseAuth/UseAuth';

const Navigation = () => {
  const {user, logOut} = UseAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctors Portal
          </Typography>
          
          <NavLink to = "/Home" style={{textDecoration:'none'}}><Button sx={{color:'white'}}>Home</Button></NavLink>
          <NavLink to = "/Appointment" style={{textDecoration:'none'}}><Button sx={{color:'white'}}>Appointment</Button></NavLink>
          {
            user?.email? 
            <Box>
               <NavLink to = "/Dashboard" style={{textDecoration:'none'}}><Button sx={{color:'white'}}>Dashboard</Button></NavLink>
              <Button sx={{color:'white'}} onClick={logOut}>LogOut</Button>
              </Box>
              :
              <NavLink to = "/Login" style={{textDecoration:'none'}}><Button sx={{color:'white'}}>Login</Button></NavLink>
}
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Navigation;