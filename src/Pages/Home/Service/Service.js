import  React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia, Grid } from '@mui/material';

const Service = ({service}) => {
  const{name,Image, des}=service;
    return (
        <Box sx={{ border: 0, mt:4, justifyContent:'center'}}>
           <Grid item xs={1} sm={8} md={12}>
           <Card sx={{ minWidth: 275,  boxShadow: 0 }}>
           <CardMedia
           sx={{pt:4}}
            component="img"
            style={{width:'auto',height:'80px',margin: '0 auto'}}
            image={Image}
            alt="Paella dish"
          />
      <CardContent>
        <Typography variant="h5" component="div" sx={{mt:2}}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{mt:2}}>
          {des}
        </Typography>
      </CardContent>
    </Card>
            </Grid>
        </Box>
    );
};

export default Service;