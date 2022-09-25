import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { auth } from '../firebase'

import { Outlet, Navigate} from 'react-router-dom'

const Redirect = () => {
    // const {isAuthenticated, user} = useAuth0()
    const isUser = auth
    // const isUser = isAuthenticated && user

  return isUser ? <Outlet /> : <Navigate to='/profile'/>
  
}

export default Redirect
