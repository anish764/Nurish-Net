import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const RouteGuard = ({Component}) => {
    const token = localStorage.getItem("token");
    

  return (
    token ? <Component/> : <Navigate to="/signup" />
  )
}

export default RouteGuard