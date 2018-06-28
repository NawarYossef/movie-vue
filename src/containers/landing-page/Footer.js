import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

const Wrapper = styled.footer`
position: relative;
background-color: #081C24;
bottom: 0;
left: 0;
right: 0;
width: 100%;
padding: 2%;
border-top: 1px solid #D2691E;
`

const NavMenu = styled.ul`
width: 60%;
margin: 0 auto;
li-style: none;
display: flex;
flex-wrap: wrap;  
align-items: flex-start;
justify-content: space-around;
list-style-type: none !important;
`
const Anchor = styled(Link)`
color: #ffffff;
font-size: 1.3em;
  &:hover {
    text-decoration: none;
    color: #d9d9d9;
  }
`
export const Footer = () => {
  return (
    <Wrapper>
      <NavMenu>
        <li><Anchor to="/movies/coming-soon">Coming Soon</Anchor></li>
        <li><Anchor to="/movies/now-playing">Now Playing</Anchor></li>
        <li><Anchor to="/movies/popular">Popular</Anchor></li>
      </NavMenu>
    </Wrapper>
  );
}

export default connect(null)(Footer);
