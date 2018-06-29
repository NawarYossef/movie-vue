import React from 'react';
import { Link } from 'react-router-dom';
import PopcornImage from '../assets/cinema-icon.png'
import 'normalize.css';
import styled from 'styled-components';
import AppNav from './AppNav';

const AppHeader = styled.header`
width: 100%;
z-index: 1;
position: fixed;
top: 0;
background-color: #081C24;
padding: 15px 0px;
border-bottom: 1px solid #D2691E;
`;

const HeaderWrapper = styled.div`
max-width: 90%;
margin: 0 auto;
height: 100%;
display: flex;
align-items: center;
`;

const WrapperForAppTitle = styled(Link)`
flex: auto;
display: flex;
align-items: center;  
text-align: initial;
&:hover {
  text-decoration: none;
}
`;

const AppTitle = styled.h1`
margin: 0px;
color: #ffffff;
font-size: 2.6em;
display: inline-block;
text-decoration: none;
`;


export default function Header() {

    return (
      <AppHeader>
        <HeaderWrapper>
          <WrapperForAppTitle to={"/"}>
            <AppTitle>MovieVue</AppTitle>
          <img src={PopcornImage} className={'headerImage'} alt=""/>
          </WrapperForAppTitle>
          <AppNav/>
        </HeaderWrapper>
      </AppHeader>
    );
}
