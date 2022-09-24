import React from 'react'
import { Auth } from 'firebase/auth'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut, 
  onAuthStateChanged
} from 'firebase/auth'
import auth from '../Components/firebase'

const FormContext = React.createContext()

const Context = ({children}) => {

  const createUser = ({username, email, password, confirmP, phone}) =>{
    return createUserWithEmailAndPassword(auth, username, email, password, confirmP, phone )
  }

  return (
    <>
      <FormContext.Provider value={createUser}>
        {children}
      </FormContext.Provider>
    </>
  )
}

export  {Context, FormContext}
