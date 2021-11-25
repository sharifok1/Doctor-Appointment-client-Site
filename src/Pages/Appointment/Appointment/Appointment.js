import React from 'react';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvilableAppointment from '../AvilableApppointment/AvilableAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        
        <div>
            <AppointmentHeader date={date} setDate={setDate}/>
            <AvilableAppointment date={date}/>
            <h3>take an appointment</h3>
        </div>
    );
};

export default Appointment;