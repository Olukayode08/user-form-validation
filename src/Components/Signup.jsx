import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FormContext } from '../context/Context';
import {AiOutlineCheck} from 'react-icons/ai'

const Signup = () => {
  const { error, details, submitDetails, registerUser } =
    useContext(FormContext);

  return (
    <>
      <section>
        <Wrapper>
          <nav>
            <p className='name'>Olukayode</p>
            <Link className='link' to='/'>
              Login to account
            </Link>
          </nav>
          <div className='create-account'>
            <form onSubmit={registerUser}>
              <h1>Create your account</h1>
              <div className='form-action'>
                <input
                  type='text'
                  name='username'
                  placeholder='Full name'
                  required
                  value={details.username}
                  onChange={submitDetails}
                />
              </div>
              <div className='form-action'>
                <input
                  type='text'
                  name='email'
                  required
                  placeholder='Email address'
                  value={details.email}
                  onChange={submitDetails}
                />
              </div>
              <div className='form-action'>
                <input
                  type='text'
                  name='country'
                  placeholder='Country'
                  value={details.country}
                  onChange={submitDetails}
                />
              </div>
              <div className='form-action'>
                <input
                  type='text'
                  placeholder='Phone number'
                  name='phone'
                  value={details.phone}
                  onChange={submitDetails}
                />
              </div>
              <div className='form-action'>
                <input
                  type='text'
                  placeholder='Password'
                  name='password'
                  required
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

            <div className='account'>
              <div className='secure'>
                <div className='outline'>
                  <AiOutlineCheck className='check' />
                  <p className='running'>Up and running in 5 minutes</p>
                </div>
                <p className='payment'>
                  Start collecting payments while you continue setting up your
                  account
                </p>
              </div>
              <div className='secure'>
                <div className='outline'>
                  <AiOutlineCheck className='check' />
                  <p className='running'>Multiple payment options</p>
                </div>
                <p className='payment'>
                  Accept credit cards, Mobile Money, QR, Bank account and more.
                </p>
              </div>
              <div className='secure'>
                <div className='outline'>
                  <AiOutlineCheck className='check' />
                  <p className='running'>Fast and Seamless</p>
                </div>
                <p className='payment'>
                  Our highly responsive, quick and smart checkout means higher
                  transaction success rates for you and less waiting time for
                  your customers.
                </p>
              </div>
            </div>
          </div>

          <footer>
            <p>@ Olukayode 2022</p>
            <div className='footer'>
              <p className='policy'>Privacy policy</p>
              <p className='policy'>Terms and condition</p>
            </div>
          </footer>
          <div>
            {error && (
              <h5 className='error'>
                Error: sorry, incorret email or password please check and try
                again
              </h5>
            )}
          </div>
        </Wrapper>
      </section>
    </>
  );
};

const Wrapper = styled.section`
  .error {
    position: absolute;
    top: 150px;
    right: 10px;
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
  .terms {
    max-width: 270px;
    font-size: 12px;
    margin-left: 30px;
    margin-top: 0;
    padding-top: 0;
    opacity: 0.8;
  }
  .outline {
    display: flex;
    align-items: center;
  }
  .check {
    margin-right: 10px;
    color: rgb(41, 122, 74);
    font-size: 20px;
    background: rgb(229, 248, 238);
    border-radius: 50%;
  }
  span {
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
  .create-account {
    display: flex;
  }
  .account {
    width: 300px;
    margin-top: 160px;
  }
  .running {
    font-size: 19px;
    font-weight: 500;
    text-align: left;
    margin: 0;
    padding: 0;
  }
  .payment {
    font-size: 12px;
    text-align: left;
    margin: 10px 0 20px 29px;
    padding: 0;
  }
  form {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 340px;
    height: 580px;
    padding: 20px 10px;
    margin: 120px 60px 90px 120px;
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
    font-size: 14px;
    opacity: 0.8;
    .footer {
      display: flex;
      justify-content: space-between;
      .policy {
        padding: 0 20px;
      }
    }
  }
  @media screen and (max-width: 700px) {
    form {
      margin: auto;
    }
    nav {
      margin-bottom: 50px;
    }
    footer {
      margin: auto;
    }
  }
  @media screen and (max-width: 700px) {
    .create-account {
      display: flex;
      flex-direction: column;
    }
    .account {
      margin: auto;
      padding-top: 30px;
    }
  }
  @media screen and (max-width: 450px) {
    form {
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
    .account,
    form {
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
