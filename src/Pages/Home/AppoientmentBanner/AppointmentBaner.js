import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import appointmentBg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const bg={
    background:`url(${appointmentBg})`,
    marginTop:'100px',
    marginBottom:'100px',
    backgroundPosition:'center',
    minHeight:'291px',
    backgroundColor:'rgba(45,58,74, 0.9)',
    backgroundBlendMode:'darken, luminosity',
    // backgroundSize: "cover",
}

const AppointmentBaner = () => {
    return (

             
          <Box style={bg} sx={{ flexGrow: 1}}>
             <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
            <img
                style={{width:'400px', margin:'-125px'}}
                src ={doctor} alt=""/>
            </Grid>
            <Grid item xs={12} md={5}>
            <Typography variant="h6" xs={{color:'primary.main'}}>
                Appointment
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quod ullam fugit esse. Quo, quas!
                <Link to="/Appointment">
                <Button>Take Aappointment</Button>
                </Link>
            </Typography>
            </Grid>
        </Grid>
    </Box>
        
    );
};

export default AppointmentBaner;