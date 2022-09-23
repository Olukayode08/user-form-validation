import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Form} from './pages'
// domain
// dev-8aow4es9.us.auth0.com

// clientid
// rnMCLcsti9txHipcKiBYMT0U5tN9COJd;
function App() {
  return (
    <>
      <Router>
        <Form />
      </Router>
    </>
  );
}

export default App;
