import React from 'react'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react';

const LoginPage = () => {
    const {loginWithRedirect} = useAuth0()
  return (
    <Wrapper>
      <div className='container'>
        <button onClick={()=>loginWithRedirect()}>Login  here</button>
      </div>
    </Wrapper>
  )
};
const Wrapper = styled.section`
    .container{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    }
`

export default LoginPage
