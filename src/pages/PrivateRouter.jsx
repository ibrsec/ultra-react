import React from 'react'
import { useLoginContext } from '../context/LoginProvider'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
    const {isLogged} = useLoginContext();
  return isLogged ? <Outlet /> : <Navigate to="/login"/>
}

export default PrivateRouter