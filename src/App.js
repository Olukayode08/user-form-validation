import React, {} from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Forgot from './Components/Forgot';
import Profile from './Components/Profile';
import Error from './Components/Error';
// import Protected from './Components/Protected';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/signup' element={<Signup />} />
        {/* <Route element={<Protected />}> */}
        <Route path='/profile' element={<Profile />} />
        {/* </Route> */}
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
