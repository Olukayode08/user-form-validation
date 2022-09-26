import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FormContext } from '../context/Context';
import { GiLoveMystery } from 'react-icons/gi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { showToastMessage, error, details, submitDetails, loginUser } = useContext(FormContext);

  return (
    <>
      <section>
        <Wrapper>
          <nav>
            <p className='name'>Olukayode</p>
            <Link className='link' to='/signup'>
              Create an account
            </Link>
          </nav>
          <form onSubmit={loginUser}>
            <h1>Login into your account</h1>
            <div className='form-action'>
              <input
                type='email'
                name='email'
                placeholder='Email address'
                value={details.email}
                onChange={submitDetails}
                required
              />
            </div>
            <div className='form-action'>
              <input
                type='password'
                name='password'
                placeholder='Password'
                value={details.password}
                onChange={submitDetails}
                required
              />
            </div>
            <div className='form-action'>
              <button>Login</button>
            </div>

            <Link className='forgot' to='/forgot'>
              Forgot password?
            </Link>
          </form>
          <footer>
            Made with <GiLoveMystery /> Olukayode
          </footer>
          {error && <ToastContainer />}
        </Wrapper>
      </section>
    </>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 100vh;
  .error {
    position: absolute;
    top: 30px;
    right: 10px;
    background-color: #f15972;
    padding: 9px;
    border-radius: 10px;
    opacity: 0.85;
  }
  .name {
    font-style: italic;
    font-size: 30px;
    font-weight: 500;
  }
  .forgot {
    text-decoration: none;
    color: blue;
    font-size: 15px;
    margin: 0 0 0 30px;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 30px;
    height: 70px;
    .link {
      background-color: #ff9b00;
      text-decoration: none;
      color: #000;
      padding: 7px 8px;
      border-radius: 5px;
      :hover {
        background-color: #cc7c00;
      }
    }
  }
  h1 {
    font-size: 20px;
    font-weight: 500;
    text-align: left;
    margin-left: 30px;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    width: 340px;
    height: 300px;
    padding: 20px 10px;
    margin: 120px 0 90px 100px;
  }
  .form-action {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    width: 270px;
    height: 40px;
    border: 1px solid #7a7979;
    border-radius: 5px;
    ::placeholder {
      margin-left: 20px;
      font-family: inherit;
    }
    outline: none;
    :focus {
      border: 1px solid #ff9b00;
    }
  }
  button {
    font-family: inherit;
    width: 280px;
    height: 45px;
    font-size: 18px;
    border: none;
    color: #000;
    border-radius: 5px;
    background-color: #ff9b00;
    margin: 10px 0;
    transition: all 0.3s ease-in;
    cursor: pointer;
    :hover {
      background-color: #cc7c00;
    }
  }
  footer {
    text-align: center;
    margin: auto;
  }

  @media screen and (max-width: 800px) {
    form {
      margin: 120px 10px 90px 25px;
    }
  }
  @media screen and (max-width: 450px) {
    form {
      margin: 120px 0 90px 10px;
      width: 320px;
    }
    button,
    input {
      width: 270px;
    }
  }
  @media screen and (max-width: 300px) {
    nav {
      margin: 0;
    }
    form {
      margin: 120px 0 90px 0px;
      width: 260px;
    }
    button,
    input {
      width: 220px;
    }
  }
`;

export default Login;
