import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Error = () => {
  return (
    <>
      <section>
        <Wrapper>
          <nav>
            <p className='name'>Olukayode</p>
            <div className='links'>
              <Link className='link' to='/'>
                Login to account
              </Link>
              <Link className='link' to='/signup'>
                Create an account
              </Link>
            </div>
          </nav>
          <div className='about-wrapper'>
            <h1 className='about'>Error 404 Page not found</h1>
          </div>
        </Wrapper>
      </section>
    </>
  );
}

const Wrapper = styled.section`
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
      font-size: 13px;
      padding: 5px 8px;
      border-radius: 5px;
      margin: 0 10px;
      :hover {
        background-color: #cc7c00;
      }
    }
  }
  .about-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    max-width: 600px;
  }
  .about {
    font-size: 60px;
    font-family: 'Rubik Dirt', cursive;
    color: #161414;
  }
  @media screen and (max-width: 600px) {
    .about {
      font-size: 40px;
    }
    .links {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .link {
      margin: 10px 10px;
    }
  }
  .name {
    font-style: italic;
    font-size: 30px;
    font-weight: 500;
  }
  @media screen and (max-width: 300px) {
    nav {
      margin: 0;
    }
  }
`;
export default Error