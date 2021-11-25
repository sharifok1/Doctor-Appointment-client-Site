import { Grid, TextField, Typography , LinearProgress, Alert, AlertTitle} from '@mui/material';
import React, { useState } from 'react';
import { NavLink , useNavigate} from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth/UseAuth';
import loginPage from '../../images/login.png'


const Register = () => {
    const [loginData, setLoginData]=useState(true);
    const {createAccount,isLoding,user,firebaseError}=UseAuth();
    const Navigate = useNavigate()
    const onChangeHandler =(e)=> {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
  const loginSubmitHandler =(e)=>{
    e.preventDefault();
    if(loginData.password !==loginData.re_password ){
        alert("password didn't matched")
        return
    }
    if(loginData.password === ''){
        alert('password required');
        return
    }
    createAccount(loginData.email , loginData.password,loginData.name, Navigate )
  }
    return (
        <Grid container spacing={2} >
             <Grid item xs={12} md={6} style={{order:'2'}}>
                 <img style={{width:"80%"}} src={loginPage} alt="/"></img>
            </Grid>
        <Grid item xs={12} md={6} style={{order:'1'}}>
        
          
        <Typography variant="h5" gutterBottom  sx={{mt:10}}>Please Register </Typography>
        
             { !isLoding &&    <form onSubmit={loginSubmitHandler}>
                <TextField id="standard-basic" 
                    onChange={onChangeHandler}
                    sx={{width:'60%'}}
                    label="Name" 
                    variant="standard"
                    name='name'
                    required
                    />
                    <TextField id="standard-basic" 
                    onChange={onChangeHandler}
                    sx={{width:'60%'}}
                    label="Email" 
                    variant="standard" 
                    type='email'
                    name="email"
                    required
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
                    onChange={onChangeHandler}
                    sx={{width:'60%'}}
                    label="Retype-Password" 
                    variant="standard" 
                    type='password'
                    name="re_password"
                    />
                    <TextField id="standard-basic" 
                   
                    sx={{width:'60%',mt:2, bgcolor:'primary.main'}}
                    variant="standard" 
                    type='submit'
                    value="login"
                
                    />
             <NavLink to ="/login" style={{textDecoration:'none'}}>
                 <Typography variant="h5" gutterBottom component="div" sx={{mt:2, color:'primary.main'}}>
                     already registered? Please login
                    </Typography>
                     </NavLink>
                </form>
           }
           {
               user.email && <Alert severity="success">
               <AlertTitle>Success</AlertTitle>
               congratulations!!Successfully created new account<strong>Plz login Now</strong>
             </Alert>
           }
           {
              isLoding && <LinearProgress color="success" /> 
           }
           {
              firebaseError && <Alert severity="error">{firebaseError}</Alert> 
           }

           
        </Grid>
        
    </Grid>
);
   
};

export default Register;