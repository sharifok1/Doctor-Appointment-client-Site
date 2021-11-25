import { LinearProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';

import UseAuth from '../../hooks/UseAuth/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const{user,isLoading} = UseAuth();
  
    const location = useLocation()
    if(isLoading){
      return <LinearProgress color="success" sx={{m:10, mt:40}}/>
  }
  if (!user) {
    
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;