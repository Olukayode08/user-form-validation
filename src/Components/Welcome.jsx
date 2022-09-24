import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
      <section>
        <Wrapper>
          <h1>Form Validation</h1>
          <p>Welcome to my form Validation</p>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign-up or Register</Link>
        </Wrapper>
      </section>
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;

  h1 {
    text-align: center;
  }
`;
export default Welcome;
