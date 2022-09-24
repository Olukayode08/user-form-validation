import React, {useState} from 'react'
import { Auth } from 'firebase/auth'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut, 
  onAuthStateChanged
} from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

const FormContext = React.createContext()

const Context = ({children}) => {

  const [error, setError] = useState(false);
  const [details, setdetails] = useState({
    username: '',
    email: '',
    password: '',
    confirmP: '',
    phone: '',
  })

  const submitDetails = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdetails({ ...details, [name]: value });
  };
    
  const navigate = useNavigate()

  const registerUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, details.email, details.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate('/profile')
      })
      .catch((error) => {
        setError(true)
        // ..
      });
  };

  const loginUser = (e) =>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, details.email, details.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate('/profile');

      })
      .catch((error) => {
        setError(true)
      });
  }

  return (
    <>
      <FormContext.Provider value={{navigate, error, loginUser, submitDetails, registerUser, details}}>
        {children}
      </FormContext.Provider>
    </>
  )
}

export  {Context, FormContext}
