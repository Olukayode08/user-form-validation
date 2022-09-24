import React from 'react';
import styled from 'styled-components';

const Profile = () => {
  return (
    <>
      <section>
        <Wrapper>
          <h1>You are welcome</h1>
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
