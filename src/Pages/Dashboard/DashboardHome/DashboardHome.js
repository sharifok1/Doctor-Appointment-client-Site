import * as React from 'react';
import { Grid } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';
import Appointment from '../Appointment/Appointment';

const DashboardHome = () => {
    const [date, setDate]= React.useState(new Date())
    return (
        <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
           <Calender
           date={date}
           setDate = {setDate}               
            ></Calender>
        </Grid>
        <Grid item xs={12} md={6}>
          <Appointment
          date={date.toLocaleDateString()}
          ></Appointment>
        </Grid>
     </Grid>

    );
};

export default DashboardHome;