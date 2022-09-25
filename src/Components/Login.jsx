import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FormContext } from '../context/Context';
import logo from '../images/logo.png'
const Login = () => {
  const { error, details, submitDetails, loginUser } = useContext(FormContext);


  return (
    <>
      <section>
        <Wrapper>
          <nav>
            <img src={logo} alt='images' />
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
              />
            </div>
            <div className='form-action'>
              <input
                type='password'
                name='password'
                placeholder='Password'
                value={details.password}
                onChange={submitDetails}
              />
            </div>
            <div className='form-action'>
              <button>Login</button>
            </div>
            <a href='#'>Forget password?</a>
          </form>
          <footer>
            <p>@ Flutterwave 2022</p>
            <div className='footer'>
              <p className='policy'>Privacy policy</p>
              <p className='policy'>Terms and condition</p>
            </div>
          </footer>
          {error && <h5>Wrong email or password</h5>}
        </Wrapper>
      </section>
    </>
  );
};

const Wrapper = styled.section`
  img {
    width: 18%;
  }
  a {
    text-decoration: none;
    color: blue;
    font-size: 16px;
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
      padding: 10px;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px;
    .footer {
      display: flex;
      justify-content: space-between;
      .policy {
        padding: 0 20px;
      }
    }
  }
  @media screen and (max-width: 800px) {
    img{
      width: 35%;
    }
  }
`;

export default Login;
