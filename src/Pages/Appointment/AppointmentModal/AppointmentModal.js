import { Backdrop, Fade, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import UseAuth from '../../../hooks/UseAuth/UseAuth';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#5bde84',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const AppointmentModal = ({openModal , handleBookingModalClose,booking,date,price}) => {
  const {user}=UseAuth();
  const initialInfo = {PatientName:user.displayName ,email:user.email }
  const [bookingInfo, setBookingInfo]= useState(initialInfo)

  const handleOnBlur =(e)=>{
    const field = e.target.name;
    const value = e.target.value;
    const newinfo = {...bookingInfo}
    newinfo[field]=value;
    setBookingInfo(newinfo);
  }
    const modalformSubmit= (e)=>{
        e.preventDefault()
        const appointment = {...bookingInfo, date, time:booking.time, price}
        fetch('http://localhost:3010/appointment',{
          method:'POST',
          headers:{
            'content-type':'application/JSON'
          },
          body:JSON.stringify(appointment)
        })
        .then(res=>res.json())
        .then(data=>{
        })
        alert('You successfully booked an appouintment')
        handleBookingModalClose()
       
        
    }
       
    return (
        <Modal
        
        open={openModal}
        onClose={handleBookingModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              booking for {booking.name}
            </Typography>
                <form onSubmit={modalformSubmit}>
                <TextField
                style={{margin:'5px'}}
                sx={{width:'100%',bgcolor:'white'}}
                    hiddenLabel
                    disabled
                    id="filled-hidden-label-small"
                    defaultValue={booking.time}
                    onBlur={handleOnBlur}
                    name="time"
                    variant="filled"
                    size="small"
                />
                <TextField
                style={{margin:'5px'}}
                sx={{width:'100%',bgcolor:'white'}}
                    hiddenLabel
                    id="filled-hidden-label-small"
                    placeholder='Patient Name'
                    name = 'PatientName'
                    onBlur = {handleOnBlur}
                    variant="filled"
                    defaultValue={user.displayName}
                    size="small"
                />
                <TextField
                style={{margin:'5px'}}
                sx={{width:'100%',bgcolor:'white'}}
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue={user.email}
                    name='email'
                    onBlur = {handleOnBlur}
                    variant="filled"
                    size="small"
                />
                <TextField
                style={{margin:'5px'}}
                sx={{width:'100%',bgcolor:'white'}}
                    hiddenLabel
                    id="filled-hidden-label-small"
                    placeholder='Your Phone number'
                    name='phoneNum'
                    onBlur = {handleOnBlur}
                    variant="filled"
                    size="small"
                />
                <TextField
                style={{margin:'5px'}}
                sx={{width:'100%',bgcolor:'white'}}
                    hiddenLabel
                    id="filled-hidden-label-small"
                    placeholder='Patient age'
                    name='age'
                    onBlur = {handleOnBlur}
                    variant="filled"
                    size="small"
                />
                <TextField
                style={{margin:'5px'}}
                sx={{width:'100%',bgcolor:'white'}}
                    hiddenLabel
                    disabled
                    id="filled-hidden-label-small"
                    defaultValue={date}
                    onBlur = {handleOnBlur}
                    name="date"
                    variant="filled"
                    size="small"
                />
                <TextField
                style={{margin:'5px'}}
                sx={{width:'100%',bgcolor:'white'}}
                    hiddenLabel
                    disabled
                    id="filled-hidden-label-small"
                    defaultValue={`$${price}`}
                    onBlur = {handleOnBlur}
                    name="price"
                    variant="filled"
                    size="small"
                />
                <input style={{margin:'5px',padding:'8px'}} type="submit" value="confirm Appointment" />
                </form>
               
          </Box>
        </Fade>
      </Modal>
    );
};

export default AppointmentModal;