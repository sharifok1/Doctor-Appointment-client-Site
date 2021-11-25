import { Alert, Button, CircularProgress, Grid, TextField, Typography} from '@mui/material';

import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation} from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth/UseAuth';
import loginPage from '../../images/login.png'


const Login = () => {
    const [loginData, setLoginData]=useState();
    const {passwordLogin, googleLogin, firebaseError, user, isLoading}=UseAuth();
    const Navigate = useNavigate();
    const location = useLocation();
     
    const onChangeHandler =(e)=> {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value 
        setLoginData(newLoginData)
    }
  const loginSubmitHandler =(e)=>{
    e.preventDefault();
    passwordLogin(loginData.email, loginData.password, Navigate, location)
  }
  //google login handler-----------------------------google log in
  const googleLoginHandler=(Navigate, location )=>{
    googleLogin(Navigate,location);
  }
 
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom  sx={{mt:20}}>Please Login </Typography>
            
                <form onSubmit={loginSubmitHandler}>
                 <TextField id="standard-basic" 
                    onChange={onChangeHandler}
                    sx={{width:'60%'}}
                    label="Email" 
                    variant="standard"
                    name='email'
                    />
                    <TextField id="standard-basic" 
                    onChange={onChangeHandler}
                    sx={{width:'60%'}}
                    label="Password" 
                    variant="standard" 
                    type='password'
                    name="password"
                    />
                    <TextField id="standard-basic" 
                   
                    sx={{width:'60%',mt:2, bgcolor:'primary.main'}}
                    variant="standard" 
                    type='submit'
                    value="login"
                    />
             <div >
             <NavLink to ="/Register" style={{textDecoration:'none'}}>
             <Typography variant="h5" gutterBottom component="div" sx={{mt:2, color:'primary.main'}}>
                 NewUser? Please create an account
                </Typography>
                 </NavLink>
                 <h2>------------or------------</h2>
                 <p>Signin with google</p>
                 <Button onClick={googleLoginHandler}>Google SignIn</Button>
             </div>
             {
               firebaseError && <Alert severity="error">{firebaseError}</Alert>
             }
             
                </form>
               { isLoading && <CircularProgress color="success" />}
               {
               user.email && <Alert severity="success">Successfully logedin</Alert>
             }
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{width:"80%"}} src={loginPage} alt="/"></img>
            </Grid>
        </Grid>
    );
};

export default Login;