import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
const currentUser = JSON.parse(sessionStorage.getItem('current_user'))   
  return currentUser ? <Outlet/> : <Navigate to= "/"/> 
}

export default PrivateRoutes