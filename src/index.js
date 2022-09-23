import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Context} from './Components/Context';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain='dev-8aow4es9.us.auth0.com'
        clientId='rnMCLcsti9txHipcKiBYMT0U5tN9COJd'
        redirectUri={window.location.origin}
      >
        <Context>
          <App />
        </Context>
      </Auth0Provider>
      </BrowserRouter>
  </React.StrictMode>
);
