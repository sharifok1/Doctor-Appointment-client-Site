import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
// import AppointmentModal from '../AppointmentModal/AppointmentModal';
import Booking from './Booking/Booking';

const AvilableAppointment = ({date}) => {
    const bookings = [
        {
            id: 1,
            name: 'Teeth Orthodonis',
            time: '08.00 am - 10.00 pm',
            space: '10',
            price:'450',

        },
        {
            id: 2,
            name: 'Cosmetic Dentistry',
            time: '09.00 am - 12.00 pm',
            space: '5',
            price:'400',
        },
        {
            id:3 ,
            name: 'Teath Cleaning',
            time: '10.00 am - 11.00 am',
            space: '7',
            price:'550',
        },
        {
            id:4 ,
            name: 'Cavity Dental',
            time: '4.00 pm - 5.00 pm',
            space: '8',
            price:'450',
        },
        {
            id:5 ,
            name: 'Pediatric Dental',
            time: '12pm.00 am - 1.00 pm',
            space: '7',
            price:'350',
        },
        {
            id:6 ,
            name: 'Oral Surgery',
            time: '07.00 pm - 8.00 pm',
            space: '9',
            price:'500',
        },
    ]
    
    return (
        <div>
            <h2>Avilable appointment {date.toDateString()}</h2>
            <Box sx={{ flexGropenModalow: 1 }}>

            <Container>
            <Grid container spacing={{ xs:2, md: 3 }} columns={{ xs: 12, sm: 8, md: 12 }}>
               
                {bookings.map((booking) => <Grid item xs={12} sm={4} md={4} key={booking.id}>
                 <Booking
                   booking={booking}
                   date={date.toLocaleDateString()}
                />
                </Grid>
            )}
         </Grid>
            </Container>
         </Box>
        </div>
       
    );
};

export default AvilableAppointment;