import { useContext } from 'react';
import { AuthContext } from '../../ContexApi/AuthProvider/AuthProvider';

const UseAuth = () => {
   const auth = useContext(AuthContext);
   return auth;
};

export default UseAuth;