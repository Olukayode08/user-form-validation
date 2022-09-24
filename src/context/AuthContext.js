import { createContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';

const initialState = {
  currentUser: null,
}

const Authentification = createContext(initialState)


const AuthContext = ({children}) => {
  const {state, dispatch} = useReducer(AuthReducer, initialState)
  return(
    <>
    <Authentification.Provider value={{currentUser: state.current, dispatch}}>
      {children}
    </Authentification.Provider>
    
    </>
  )
};

export  {AuthContext, Authentification}
