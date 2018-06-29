import React from 'react';
import { Link } from 'react-router-dom';
import PopcornImage from '../assets/cinema-icon.png'
import 'normalize.css';
import styled from 'styled-components';


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


export default function Title() {

  return (
    <WrapperForAppTitle to={"/"}>
      <AppTitle>MovieVue</AppTitle>
      <img src={PopcornImage} className={'headerImage'} alt="" />
    </WrapperForAppTitle>
  );
}
