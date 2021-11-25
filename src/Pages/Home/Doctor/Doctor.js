import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const Doctor = () => {
    const [doctor, setDoctor]=useState([]);
    useEffect(()=>{
        const url = 'https://shielded-hamlet-22559.herokuapp.com/doctors'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setDoctor(data))
    },[])
    console.log(doctor)
    return (
        <Box sx={{ flexGrow: 1 ,}}>
            <h1>total Doctors: {doctor.length}</h1>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md:12 }}>
        {doctor.map(doctors => (
          <Grid item xs={12} sm={6} md={4} key={doctors._id}>
             <Box sx={{m:4}}> 
             <img style={{width:'70%'}} src={`data:image;base64,${doctors.image}`} alt="" />
              <h3>{doctors.name}</h3>
              <h4>{doctors.email}</h4>
             </Box>
              
          </Grid>
        ))}
      </Grid>
    </Box>
        );
};

export default Doctor;