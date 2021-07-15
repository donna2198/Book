import React from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import useStyles from '../style';


const Login =()=>{

    const classes = useStyles();

    return(
        <form className={`${classes.theme} ${classes.formTheme}`}>
            <Typography className={classes.heading}>Register</Typography>
            <TextField name="name" id="name" label="name" fullWidth variant="outlined" />
            <TextField name="email" id="email" label="email" fullWidth variant="outlined" />
            <TextField name="password" id="password" label="password" type="password" fullWidth variant="outlined" />
            <TextField name="confirmPassword" id="confirmPassword" label="confirmPassword" type="password" fullWidth variant="outlined" />
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" >Register</Button>
            <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="large"  >Cancel</Button>
      
        </form>
    )
}
export default Login;