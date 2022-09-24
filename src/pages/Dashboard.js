import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';


const Dashboard = () => {
    const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
      useAuth0();
    const isUser = isAuthenticated && user;

    if(isLoading){
      return <div>Loading...</div>
    }
  return (
    <>  
      <Link to='/'>
        <div>
          {isUser && user.picture && <img src={user.picture} alt={user.name} />}
          {isUser && user.name && (
            <h4>
              Welcome, <strong>{user.name.toUpperCase()}</strong>
            </h4>
          )}
          {isUser ? (
            <button
              onClick={() => {
                logout({ returnTo: window.location.origin });
              }}
            >
              Logout
            </button>
          ) : (
            <div>
              <h1>Please Login</h1>
              <button onClick={loginWithRedirect}>Login</button>
            </div>
          )}
        </div>
      </Link>
    </>
  );
}

export {Dashboard}