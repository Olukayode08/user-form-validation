import React, { useEffect, useState } from 'react';
import { Auth } from 'firebase/auth';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  AuthenticatorAssertionResponse,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FormContext = React.createContext();

const Context = ({ children }) => {
  const [user, setUser] = useState(false);
  const [error, setError] = useState(false);

    const showToastMessage = () => {
        toast.error('Error: sorry incorrect email or password please check and try again', {
            position: toast.POSITION.TOP_RIGHT,
            className: 'toast-message'

        });
    };

    const displayError = () =>{
      setError(true)
      showToastMessage()
    }

  const clearDetails = () => {
    setTimeout(() => {
      setdetails({
        username: '',
        email: '',
        password: '',
        phone: '',
        country: '',
      });
    }, );
  };

  const [details, setdetails] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    country: ''
  });

  const submitDetails = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdetails({ ...details, [name]: value });
  };



  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, details.email, details.password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate('/kproafiley');
      })
      .catch((error) => {
        displayError();
      });
  };

  const loginUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, details.email, details.password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate('/kproafiley');
      })
      .catch((error) => {
        displayError()
      });
  };

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
      } else {

      }
    });

  const logout = () => {
    signOut(auth);
    navigate('/');
  };

  return (
    <>
      <FormContext.Provider
        value={{
          user,
          clearDetails,
          loginUser,
          submitDetails,
          registerUser,
          details,
          logout,
          error,
        }}
      >
        {children}
      </FormContext.Provider>
    </>
  );
};

export { Context, FormContext };
