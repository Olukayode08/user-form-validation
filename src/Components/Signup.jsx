import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';
const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmP, setconfirmP] = useState('');
    const [error, setError] = useState('')

    const {createUser} = useContext(Context)
  
    const submitForm = async (e)=>{
    e.preventDefault()
    setError('')
    try {
        await createUser(username, email, password, confirmP, phone );
    } catch (error) {
        setError('')
    }
  }
    return (
      <>
        <section>
          <Wrapper>
            <Link to='/'>Go back</Link>
            <h1>Hello user Sign up</h1>
            <form onSubmit={submitForm}>
              <div className='form-action'>
                <label htmlFor='username'>Username</label>
                <input
                  type='text'
                  id='username'
                  name='username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className='form-action'>
                <label htmlFor='phone'>Phone number</label>
                <input
                  type='text'
                  id='phone'
                  name='phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className='form-action'>
                <label htmlFor='email'>Email</label>
                <input
                  type='text'
                  id='email'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='form-action'>
                <label htmlFor='password'>Password</label>
                <input
                  type='text'
                  id='password'
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='form-action'>
                <label htmlFor='confirm'>Confirm Password</label>
                <input
                  type='text'
                  id='confirmP'
                  name='confirmP'
                  value={confirmP}
                  onChange={(e) => setconfirmP(e.target.value)}
                />
              </div>
              <button>Sign-up</button>
            </form>
            <div className='account'>
              <p>Do you have an account?</p>
              <Link to='/login'>Sign-in</Link>
            </div>
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
  .form-action{
    display: flex;
    flex-direction: column;
  }
    input{
        width: 300px;
        height: 30px;
    }
    button{
        width: 310px;
        height: 30px;
        color: #fff;
        background: #000;
        margin: 10px 0;
    }
    .account{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;
export default Signup;
