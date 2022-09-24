import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FormContext } from '../context/Context';
const Login = () => {
  const { error, details, submitDetails, loginUser } = useContext(FormContext);


  return (
    <>
      <section>
        <Wrapper>
          <Link to='/'>Go back</Link>
          <form onSubmit={loginUser}>
            <div className='form-action'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                value={details.email}
                onChange={submitDetails}
              />
            </div>
            <div className='form-action'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                id='password'
                value={details.password}
                onChange={submitDetails}
              />
            </div>
            <button>Sign-in</button>
          </form>
          <div className='account'>
            <p>New user?</p>
            <Link to='/signup'>Sign-up</Link>
          </div>
          {error && <h5>Wrong email or password</h5>}
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
  margin: 0;
  height: 100vh;
  .form-action {
    display: flex;
    flex-direction: column;
  }
  input {
    width: 300px;
    height: 30px;
  }
  button {
    width: 310px;
    height: 30px;
    color: #fff;
    background: #000;
    margin: 10px 0;
  }
  .account {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h5 {
    color: red;
    margin-top: 10px;
  }
`;

export default Login;
