import { Button, Paper } from '@mui/material';
import React from 'react';
import Fade from 'react-reveal/Fade';
import AppointmentModal from '../../AppointmentModal/AppointmentModal';

const Booking = (props) => {
    const {booking}=props;
    
    const [openModal, setOpenModal] = React.useState(false);
    const handlebookingModalOpen = () => setOpenModal(true);
    const handleBookingModalClose = () => setOpenModal(false);
    return (
        <div>
           <Fade bottom>
          <Paper elevation={8} sx={{p:3}}>
             <h3>{booking.name}</h3>
              {booking.time}
             <p sx={{color:'secondary'}}> Avilable seat:{booking.space}</p>
             <h4>Fee:{booking.price}</h4>
             <Button onClick={handlebookingModalOpen} sx={{bgcolor:'info.main',color:'black'}}>Booking Now</Button>
          </Paper>
          </Fade>
             <AppointmentModal
             price={booking.price}
         booking = {booking}
        date={props.date}
         openModal={openModal}
         handleBookingModalClose={handleBookingModalClose}
         ></AppointmentModal>
        </div>
    );
};

export default Booking;