import React, { useEffect, useState } from 'react';
import { Auth } from 'firebase/auth';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const FormContext = React.createContext();

const Context = ({ children }) => {
  const [user, setUser] = useState(false);
  const [error, setError] = useState(false);

  const errorTimeout = setTimeout(() => {
    setError(false);
  }, 5000);

  const clearDetails = () => {
    setTimeout(() => {
      setdetails({
        username: '',
        email: '',
        password: '',
        referral: '',
        trading: '',
        country: '',
      });
    }, 2000);
  };

  const [details, setdetails] = useState({
    username: '',
    email: '',
    password: '',
    referral: '',
    trading: '',
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
        navigate('/profile');
      })
      .catch((error) => {
        setError(true);
        errorTimeout();
      });
    {
      signInWithEmailAndPassword ? clearDetails() : errorTimeout();
    }
  };

  const loginUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, details.email, details.password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate('/profile');
      })
      .catch((error) => {
        setError(true);
        errorTimeout();
      });
    {
      signInWithEmailAndPassword ? clearDetails() : errorTimeout();
    }
  };

    // const auth = getAuth();
    // onAuthStateChanged(auth, (user) => {
    //   setUser(true)
    //   if (user) {
    //     const uid = user.uid;
    //   } else {

    //   }
    // });

  const logout = () => {
    signOut(auth);
    navigate('/');
  };

  return (
    <>
      <FormContext.Provider
        value={{
          user,
          error,
          loginUser,
          submitDetails,
          registerUser,
          details,
          logout,
        }}
      >
        {children}
      </FormContext.Provider>
    </>
  );
};

export { Context, FormContext };
