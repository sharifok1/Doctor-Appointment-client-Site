import React from 'react';
import chair from '../../../images/chair.png'
import banerbg from '../../../images/bg.png'
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';

const bg = {
    background: `url(${banerbg})`,
    height:'450px',
    width:'100%',


}
const Banner = () => {
    return (
        <div style={bg} sx={{ flexGrow: 1 ,mt:2}}>
       <Container >
       <Grid container spacing={2} sx={{pt:10}}>
          <Grid item xs={12} md={5}>
            <Typography style={{textAlign:'start'}}>
                <h2>Start your smile</h2>
                <p>Keep your smiling all day, amet consectetur adipisicing elit. Distinctio temporibus voluptas facilis nobis iure aliquid voluptatum aperiam vel repudiandae officia!</p>
                <Button variant="contained" style={{backgroundColor:'green'}}>take a service</Button>
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
           <img style={{maxHeight:'250px'}} src={chair} alt="" />
          </Grid>
        </Grid>
       </Container>
      </div>
    );
};

export default Banner;