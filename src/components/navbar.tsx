import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import styled from 'styled-components';

const Nav = styled.nav`
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  left: 0;
  height: 55px;
  width: 100%;
  background-color: white;
  border-top: 1px solid rgb(235, 235, 235);
  div,
  button {
    width: 40px;
    color: black;
    svg {
    }
  }
`;

export default function Navbar() {
  const navigate = useNavigate();
  const onLogOut = () => {
    const ok = confirm('로그아웃?');
    if (ok) {
      auth.signOut();
      navigate('/login');
    }
  };

  return (
    <Nav>
      <Link to='/'>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-5 h-5'
          >
            <path
              fillRule='evenodd'
              d='M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      </Link>
      <Link to='/profile'>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-5 h-5'
          >
            <path d='M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z' />
          </svg>
        </div>
      </Link>
      <button onClick={onLogOut}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='w-5 h-5'
        >
          <path
            fillRule='evenodd'
            d='M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z'
            clipRule='evenodd'
          />
          <path
            fillRule='evenodd'
            d='M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z'
            clipRule='evenodd'
          />
        </svg>
      </button>
    </Nav>
  );
}
