import styled from 'styled-components';
import Navbar from './navbar';
import { Outlet } from 'react-router-dom';

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
`;

export default function Layout() {
  return (
    <Wrapper>
      <Outlet />
      <Navbar></Navbar>
    </Wrapper>
  );
}
