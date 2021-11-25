import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Service from '../Service/Service';


const services = [
  {id: 1,name: 'Fluoride-Treatment', des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ', Image: fluoride},
  {id: 2,name: 'Cavity-treatment', des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ', Image:cavity},
  {id: 3,name: 'Whitening', des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ', Image:whitening}
]

const Services = () => {
    return (
     <Container>
      <Typography variant="h5" sx={{color: 'primary.main'}} >
       Our Services
      </Typography>
      <Typography variant="h3" >
       We Provide
      </Typography>
        <Box sx={{ flexGrow: 1 }}  >
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
        {services.map((service) => (
          <Grid item xs={1} sm={4} md={4}>
            <Service
            key={service.id}
            service={service}
            ></Service>
          </Grid>
        ))}
      </Grid>
    </Box>
     </Container>
    );
};

export default Services;