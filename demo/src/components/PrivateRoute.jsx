import React from 'react'
import Login from './Login'

const PrivateRoute = ({children}) => {
   const token=localStorage.getItem("token")
  return token?children:<Navigate to="/login"/>
}

export default PrivateRoute
