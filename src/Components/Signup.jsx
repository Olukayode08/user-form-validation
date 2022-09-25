import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FormContext } from '../context/Context';
import logo from '../images/logo.png';

const Signup = () => {
  const { error, details, submitDetails, registerUser } =
    useContext(FormContext);

  return (
    <>
      <section>
        <Wrapper>
          <nav>
            <img src={logo} alt='images' />
            <Link className='link' to='/login'>
              Login to account
            </Link>
          </nav>
          <form onSubmit={registerUser}>
            <h1>Create your Flutterwave account</h1>
            <div className='form-action'>
              <input
                type='text'
                name='username'
                placeholder='Full name'
                value={details.username}
                onChange={submitDetails}
              />
            </div>
            <div className='form-action'>
              <input
                type='text'
                name='email'
                placeholder='Email address'
                value={details.email}
                onChange={submitDetails}
              />
            </div>
            <div className='form-action'>
              <input
                type='text'
                name='phone'
                value={details.trading}
                onChange={submitDetails}
                placeholder='Trading name'
              />
            </div>
            <div className='form-action'>
              <input
                type='text'
                name='phone'
                placeholder='Country'
                value={details.phone}
                onChange={submitDetails}
              />
            </div>
            <div className='form-action'>
              <input
                type='text'
                placeholder='Refferal code (optional)'
                name='password'
                value={details.refferal}
                onChange={submitDetails}
              />
            </div>
            <div className='form-action'>
              <input
                type='text'
                placeholder='Password'
                name='password'
                value={details.password}
                onChange={submitDetails}
              />
            </div>
            <div className='form-action'>
              <button>Get started</button>
            </div>
            <p className='terms'>
              By clicking get started, I acknowledge that I have read and do
              hereby accept the terms and conditions in the Flutterwave's
              <span>Terms of Use</span>, <span>Merchant Agreement </span>
              and<span> Privacy Policy</span>
            </p>
          </form>
          <footer>
            <p>@ Flutterwave 2022</p>
            <div className='footer'>
              <p className='policy'>Privacy policy</p>
              <p className='policy'>Terms and condition</p>
            </div>
          </footer>
          {error && <h5>Invalid email</h5>}
        </Wrapper>
      </section>
    </>
  );
};

const Wrapper = styled.section`
  img {
    width: 18%;
  }
  .terms{
    max-width: 270px;
    font-size: 12px;
    margin-left: 30px;
    margin-top: 0;
    padding-top: 0;
    opacity: 0.8;
  }
  span{
    color: blue;
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
    background-color: #fff;
    width: 340px;
    height: 650px;
    padding: 20px 10px;
    margin: 120px 0 90px 120px;
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
    margin: 10px 0;
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
    img {
      width: 35%;
    }
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
    footer {
      font-size: 13px;
    }
  }
`;
export default Signup;
