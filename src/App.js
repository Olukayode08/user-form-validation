import React from 'react'
// import { Dashboard } from './pages';
import {Dashboard} from './pages/Dashboard'
import {Routes, Route} from 'react-router-dom'
// domain
// dev-8aow4es9.us.auth0.com

// clientid
// rnMCLcsti9txHipcKiBYMT0U5tN9COJd;
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
