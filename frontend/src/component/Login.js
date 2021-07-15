import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Typography, TextField, Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { signin, signup } from '../actions/auth';
import useStyles from '../style';
import bookstore from'../images/books.jpeg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

  const initialState = {name: '', email: '', password: '', confirmPassword: '' };

const Login =()=>{

  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();


  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);

  };

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });


    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (isSignup) {
        dispatch(signup(form, history));
      } else {
        dispatch(signin(form, history));
      }
    };
  
    return(
        <Router>
          <Grid  className={classes.root} container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={6}>
            <img className={classes.image} src={bookstore} alt="icon" height="600" width="500"/>
            </Grid>
            <Grid className="grid" item xs={12} sm={6}>
        <form className={`${classes.theme} ${classes.formTheme}`} onSubmit={handleSubmit}>
            <Typography className={classes.heading}>{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
            { isSignup && (
              <TextField name="name" id="name" label="Name" fullWidth variant="outlined" onChange={(e)=>setForm({...form, name:e.target.value})}/>
            )}
            <TextField name="email" id="email" label="Email" fullWidth variant="outlined" onChange={handleChange} />
            <TextField name="password" id="password" label="password" type="password" fullWidth variant="outlined" handleChange={handleChange}/>
            { isSignup &&
            <TextField name="confirmPassword" id="confirmPassword" label="confirmPassword" type="password" fullWidth variant="outlined" handleChange={handleChange} /> 
            }
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>{ isSignup ? 'Sign Up' : 'Sign In' }</Button>
            <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
        </form>
        </Grid>
        </Grid>
        
        </Router>
    )
}
export default Login;