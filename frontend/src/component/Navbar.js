import React, { useState, useEffect } from 'react';
import {AppBar,Typography, Button} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircleSharp from '@material-ui/icons/AccountCircleSharp';
import useStyles from './style';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import '../css/style.css';
import * as actionType from '../actions/actionType';

const Navbar =()=>{

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
    //const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const logout = () => {
      dispatch({ type: actionType.LOGOUT });
  
      history.push('/auth');
  
      setUser(null);
    };
  
    useEffect(() => {
      const token = user?.token;
  
      if (token) {
        const decodedToken = decode(token);
  
        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
      }
  
      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return(
        <AppBar position="fixed" >
        <Toolbar>
        <Typography variant="h6" className={classes.title}>
            Books Store
          </Typography>
          {user?.result ? (
        <div className={classes.popUp}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                
              >
                <AccountCircleSharp style={{ fontSize: 40 }}/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                size='medium'
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </div>
          ):
          (
            <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
          )}
        </Toolbar>
      </AppBar>
    )
}
export default Navbar;