import { TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail]=useState('')
    const handleOnblur = e =>{
        setEmail(e.target.value)
    }
    const makeAdminHandler =(e)=>{
       e.preventDefault()
       const user = {email}
       const url = 'https://shielded-hamlet-22559.herokuapp.com/user/admin'
       fetch(url,{
           method:'PUT',
           headers:{
               'content-type':'application/JSON'
            },
            body:JSON.stringify(user)
       })
       .then(res => res.json())
       .then(data =>{
       })
    }
    return (
        <div>
           <h2>make an admin</h2> 
           <form onSubmit={makeAdminHandler}>
                    <TextField id="standard-basic" 
                    onBlur = {handleOnblur}
                    sx={{width:'60%'}}
                    label="Email" 
                    variant="standard" 
                    type='email'
                    required
                    />
                    <TextField id="standard-basic" 
                   
                   sx={{width:'60%',mt:2, bgcolor:'primary.main'}}
                   variant="standard" 
                   type='submit'
                   value="Make Admin"
                   />
                </form>
        </div>
    );
};

export default MakeAdmin;