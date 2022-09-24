import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  return (
    <>
      <section>
        <Wrapper>
          <Link to='/'>Go back</Link>
          <form>
            <div className='form-action'>
              <label>Email</label>
              <input type='text' />
            </div>
            <div className='form-action'>
              <label>Password</label>
              <input type='text' />
            </div>
            <button>Sign-in</button>
          </form>
          <div className='account'>
            <p>New user?</p>
            <Link to='/signup'>Sign-up</Link>
          </div>
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
`;

export default Login;
