import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase';
import styled from 'styled-components';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import GithubButton from '../components/github-button';
import GoogleButton from '../components/google-button';
import { FirebaseError } from 'firebase/app';

export default function CreateAccount() {
  const user = auth.currentUser;
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { email, password } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
      setInputs({ email: '', password: '' });
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError(error.message);
        setInputs({ email: '', password: '' });
      }
    } finally {
      setLoading(false);
    }
  };

  if (user) {
    return <Navigate to='/' />;
  }

  return (
    <Wrapper>
      <h1>Nwitter</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={email}
          name='email'
          type='email'
          placeholder='email'
        />
        <input
          onChange={onChange}
          value={password}
          name='password'
          type='password'
          placeholder='password'
        />
        {isLoading ? (
          <button type='submit'>회원가입 중입니다</button>
        ) : (
          <button type='submit'>회원가입</button>
        )}
      </form>
      <div>
        <GithubButton />
        <GoogleButton />
      </div>
      {error ? <span>{error}</span> : null}
      <Link to='/login'>계정이 있으신가요?</Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  h1 {
    margin-bottom: 50px;
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;

    input {
      width: 300px;
      height: 40px;
      padding: 0 15px;
      margin-bottom: 10px;
      font-size: 16px;
      border-radius: 20px;
      outline: none;
      border: 1px solid rgb(223, 223, 223);
    }

    button {
      width: 300px;
      height: 40px;
      border: 1px solid rgb(223, 223, 223);
      border-radius: 20px;
      background-color: #3d3c42;
      color: white;
      font-size: 16px;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    margin-bottom: 20px;

    button {
      height: 30px;
      width: 140px;
      font-size: 14px;
      border: 1px solid rgb(223, 223, 223);
      border-radius: 20px;
      /* text-transform: uppercase; */
      /* background-color: #a6d1e6; */
      /* color: white; */
    }
  }

  span {
    font-size: 14px;
    margin-bottom: 15px;
    color: tomato;
    text-align: center;
  }

  a {
    font-size: 14px;
  }
`;
