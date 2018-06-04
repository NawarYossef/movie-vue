import React from 'react';
import { Link } from 'react-router-dom';
import 'normalize.css';
import styled from 'styled-components';
import AppNav from './AppNav';

const AppHeader = styled.header`
width: 100%;
background-color: #081C24;
padding: 15px 0px;
`;

const HeaderWrapper = styled.div`
max-width: 90%;
margin: 0 auto;
height: 100%;
display: flex;
align-items: center;
`;

const WrapperForAppTitle = styled.div`
flex: auto;
text-align: initial;
`;

const AppTitle = styled.h1`
margin: 0px;
color: #ffffff;
`;


export default function Header() {
  return (
    <AppHeader>
      <HeaderWrapper>
        <WrapperForAppTitle>
          <AppTitle>MovieVue</AppTitle>
        </WrapperForAppTitle>
        <AppNav />
      </HeaderWrapper>
    </AppHeader>
  );
}
