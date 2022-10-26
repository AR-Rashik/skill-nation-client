import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {

  const {user, loading} = useContext(AuthContext);
  const location = useLocation();

  if(loading){
    return <div className='d-flex justify-content-center align-items-center mt-5 pt-5'>
              <Spinner animation="border" />
           </div>;
  }

  if(!user){
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
  }
  return children;
};

export default PrivateRoute;