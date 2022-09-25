import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Profile = () => {
  return (
    <>
      <section>
        <Wrapper>
          <h1>My name is Olukayode</h1>

          <Link to='/'>Logout</Link>
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
`;
export default Profile;
