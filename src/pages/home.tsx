import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import styled from 'styled-components';

const Header = styled.header`
  height: 60px;
  background-color: white;
  border-bottom: 1px solid rgb(235, 235, 235);
`;

export default function Home() {
  return (
    <Header>
      <h1>홈</h1>
    </Header>
  );
}
