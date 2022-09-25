import React, { useContext, useState } from 'react';
// import { Dashboard } from './pages';
import { Dashboard } from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import Redirect from './pages/Redirect';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Welcome from './Components/Welcome';
import Profile from './Components/Profile';
import Error from './Components/Error';

// domain
// dev-8aow4es9.us.auth0.com

// clientid
// rnMCLcsti9txHipcKiBYMT0U5tN9COJd;
function App() {
  // const currentUser = false;

  // const Protected = ({ children }) => {
  //   return currentUser ? children : <Navigate to='/' />;
  // };

  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        {/* <Route element={Redirect}> */}
        <Route path='/profile' element={<Profile />} />
        {/* </Route> */}
        <Route path='*' element={<Error />} />
        {/* <Route element={<Redirect />}> */}
        {/* <Route path='/' element={<Dashboard />} exact /> */}
        {/* </Route> */}
        {/* <Route path='/login' element={<LoginPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
