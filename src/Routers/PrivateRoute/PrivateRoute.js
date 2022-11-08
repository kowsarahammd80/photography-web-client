import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
   
  let {user, loading} = useContext(AuthContext)

  let location = useLocation()
  if(loading){
    return <h2>loading...</h2>
  }

  
  if(user){
    return children;
    
  }
  
  return <Navigate to='/login' state={{from: location}} replace></Navigate>

  
};

export default PrivateRoute;