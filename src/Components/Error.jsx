import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Error = () => {
  return (
    <>
      <section>
        <Wrapper>
          <div>
            <h1>Error 404 Page not found</h1>
            <Link to='/signup'>Sign-up</Link>
            <p>or</p>
            <Link to='/login'>Login</Link>
          </div>
        </Wrapper>
      </section>
    </>
  );
}

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    height: 100vh;

`
export default Error