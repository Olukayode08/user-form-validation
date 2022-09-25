import React, { useContext } from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
import { FormContext } from '../context/Context';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { logout, user } = useContext(FormContext);

  return (
    <>
      <section>
        <Wrapper>
          <nav>
            <img src={logo} alt='images' />
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
        </Wrapper>
      </section>
    </>
  );
};
const Wrapper = styled.section`
  img {
    width: 18%;
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
      font-size: 13px;
      padding: 5px 8px;
      border-radius: 5px;
      :hover {
        background-color: #cc7c00;
      }
    }
  }
  .about-wrapper {
    margin: 100px 0 0 150px;
    max-width: 600px;
  }
  .about {
    font-size: 60px;
    font-family: 'Rubik Dirt', cursive;
    color: #161414;
  }
  @media screen and (max-width: 800px) {
    img {
      width: 35%;
    }
  }
  @media screen and (max-width: 600px) {
    .about {
      font-size: 40px;
    }
    .about-wrapper {
      margin: 100px 0 0 20px;
    }
  }
  @media screen and (max-width: 300px) {
    nav {
      margin: 0;
    }
  }
`;
export default Profile;
