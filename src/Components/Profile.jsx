import React, { useContext } from 'react';
import styled from 'styled-components';
import { FormContext } from '../context/Context';
import { Link } from 'react-router-dom';
import { GiLoveMystery } from 'react-icons/gi';


const Profile = () => {
  const { logout, clearDetails } = useContext(FormContext);

  return (
    <>
      <section>
        <Wrapper>
          <nav>
            <p className='name'>Olukayode</p>
            <div>
              {logout && (
                <Link to='/' className='link' onClick={logout}>
                  <button onClick={clearDetails}>Logout</button>
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
            Made with <GiLoveMystery /> Olukayode
          </footer>
        </Wrapper>
      </section>
    </>
  );
};
const Wrapper = styled.section`
  position: relative;
  height: 100vh;
  button{
    background: transparent;
    border: none;
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
  }
  footer {
    text-align: center;
    margin: auto;
  }
`;
export default Profile;
