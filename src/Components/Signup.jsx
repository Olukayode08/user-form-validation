import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FormContext } from '../context/Context';
const Signup = () => {
  const {error, details, submitDetails, registerUser } =
    useContext(FormContext);

  return (
    <>
      <section>
        <Wrapper>
          <Link to='/'>Go back</Link>
          <h1>Hello user Sign up</h1>
          <form onSubmit={registerUser}>
            <div className='form-action'>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                id='username'
                name='username'
                value={details.username}
                onChange={submitDetails}
              />
            </div>
            <div className='form-action'>
              <label htmlFor='phone'>Phone number</label>
              <input
                type='text'
                id='phone'
                name='phone'
                value={details.phone}
                onChange={submitDetails}
              />
            </div>
            <div className='form-action'>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                id='email'
                name='email'
                value={details.email}
                onChange={submitDetails}
              />
            </div>
            <div className='form-action'>
              <label htmlFor='password'>Password</label>
              <input
                type='text'
                id='password'
                name='password'
                value={details.password}
                onChange={submitDetails}
              />
            </div>
            <div className='form-action'>
              <label htmlFor='confirm'>Confirm Password</label>
              <input
                type='text'
                id='confirmP'
                name='confirmP'
                value={details.confirmP}
                onChange={submitDetails}
              />
            </div>
            <button>Sign-up</button>
          </form>
          <div className='account'>
            <p>Do you have an account?</p>
            <Link to='/login'>Sign-in</Link>
          </div>
          {error && <h5>Invalid email</h5>}
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
export default Signup;
