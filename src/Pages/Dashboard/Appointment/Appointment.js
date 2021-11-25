import React, { useEffect, useState } from 'react';
import UseAuth from '../../../hooks/UseAuth/UseAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';


const Appointment = ({date}) => {
    const {user}= UseAuth()
    const [appointment,setAppointment]=useState([])
    useEffect(()=>{
        const url = `http://localhost:3010/appointment?email=${user.email}&date=${date}`
        fetch(url)
        .then(res => res.json())
        .then(data=> setAppointment(data))
    },[date,user.email])
    return (
        <div>
            <h4> total Appointment {appointment.length}</h4>
            <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">age</TableCell>
            <TableCell align="center">email</TableCell>
            <TableCell align="center">Payment status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointment.map((data) => (
            <TableRow
              key={data._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data.PatientName}
              </TableCell>
              <TableCell align="center">{data.age}</TableCell>
              <TableCell align="center">{data.email}</TableCell>
              <TableCell align="center">{data.payment?'Paid'
              :
              <Link to={`/Dashboard/Payment/${data._id}`}><button>Pay Now</button></Link>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Appointment;