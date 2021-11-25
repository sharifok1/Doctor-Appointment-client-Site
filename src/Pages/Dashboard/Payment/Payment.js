import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheackOutForm from './CheackOutForm';


const stripePromise = loadStripe('pk_test_51Jw5B8FIuT5pfKh8K56lNCSlgJkG77AI4K4TuVyBbbVDPTyF17oy2REYWMI0O720mVy6PICdrDLmgyzkszrN3Sl700Q2Bxu0VJ');

const Payment = () => {
    const {AppointmentId} = useParams();
    const [appointment, setAppointment]=useState([]);
    
    useEffect(()=>{
        const url = `https://shielded-hamlet-22559.herokuapp.com/appointment/${AppointmentId}`
        fetch(url)
        .then(res=>res.json())
        .then(data => setAppointment(data))
    },[AppointmentId])
    const {PatientName,date}=appointment;
    
    return (
        <div>
          <h2>Pay for:{AppointmentId} </h2>
          <h4>Patient Name: {PatientName}</h4>
          <h4>Your Date:{date}</h4>
         
         {
            appointment.price && <Elements stripe={stripePromise}>
              <CheackOutForm appointment={appointment}/>
           </Elements>
         }
        </div>
    );
};

export default Payment;