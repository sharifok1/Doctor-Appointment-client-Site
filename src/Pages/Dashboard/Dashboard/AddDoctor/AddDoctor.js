import {  Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [image, setImage]=useState(null)
    
    const uploadhandler=e=>{
        e.preventDefault();
        if(!image){
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);
        
        fetch('https://shielded-hamlet-22559.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
            })
            .then(res => res.json())
            .then(data => {
            console.log('Success:',data);
            })
            .catch(error => {
            console.error('Error:', error);
            });
    }
    return (
        <div>
            <h2>hey doctor u are welcome</h2>
            <form onSubmit={uploadhandler}>
            <TextField 
            sx={{width:'70%',mb:2}}
            label="Name" 
            variant="standard" 
            onBlur={e=>setName(e.target.value)}
            required />
            <br />
            <TextField 
            sx={{width:'70%', mb:2}}
            label="Email" 
            variant="standard"  
            onBlur={e=>setEmail(e.target.value)}
            required
            />
            <br />
           
            <Input 
            sx={{width:'70%',mb:2}}
            accept="image/*" 
            type="file" 
            onBlur={e=> setImage(e.target.files[0])}
            />
            <br />
            <Button
            sx={{width:'70%',mb:2}}
                variant="contained" 
                type='submit'>
                    Add doctor
                </Button>
            </form>
        </div>
    );
};

export default AddDoctor;