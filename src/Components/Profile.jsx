import React, { useContext } from 'react';
import styled from 'styled-components';
import { FormContext } from '../context/Context';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { logout, user } = useContext(FormContext);

  return (
    <>
      <section>
        <Wrapper>
          <nav>
            <p className='name'>Olukayode</p>
            <div>
              {logout && (
                <Link to='/' className='link' onClick={logout}>
                  Logout
                </Link>
              )}
            </div>
          </nav>
          <div className='about-wrapper'>
            <h1 className='about'>
              Hello... <br />
              I'm Olukayode Azeez and I'm a Frontend Developer
            </h1>
          </div>
          <footer>
            <p>@ Olukayode 2022</p>
            <div className='footer'>
              <p className='policy'>Privacy policy</p>
              <p className='policy'>Terms and condition</p>
            </div>
          </footer>
        </Wrapper>
      </section>
    </>
  );
};
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
      :hover {
        background-color: #cc7c00;
      }
    }
  }
  .name {
    font-style: italic;
    font-size: 30px;
    font-weight: 500;
  }
  .about-wrapper {
    margin: 100px 0 120px 150px;
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
    .about-wrapper {
      margin: 100px 0 120px 20px;
    }
  }
  @media screen and (max-width: 300px) {
    nav {
      margin: 0;
    }
    footer {
      font-size: 13px;
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
`;
export default Profile;
