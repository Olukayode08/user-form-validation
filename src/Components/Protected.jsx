import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { FormContext } from '../context/Context'

const Protected = ({children}) => {
    const {user} = useContext(FormContext)
    if(user){
        return <Navigate to='/profile' />
    }
  return children
}

export default Protected