import React from 'react';
import { Link } from 'react-router-dom';
import 'normalize.css';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import '../styles/main.css';

const NavBar = styled.nav`
  flex: auto;
`;

const List = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style-type: none;
  margin-bottom: 0px;
`;

const ListElement = styled.li`
  margin-bottom: 0px;
  text-decoration: none;
`;

const NavLink = styled(Link) `
  color: #ffffff;
  font-size: 1.3em !important;
  display: block;
  margin-right: ${props => props.lastbtn ? '0px' : '60px'};
  &:hover {
    color: #d9d9d9;
    text-decoration: none;
  }
  &:visited, &:active {
    color: #d9d9d9;
    text-decoration: none;
  }
`;

const Icon = styled.div`
display: inline-block;
margin-left: 5px;
`;

let DropDownContent = styled.div`
display: none;
position: absolute;
background-color: #f9f9f9;
min-width: 160px;
box-shadow: 0;
`;

const DropDownLink = styled.nav`
color: #ffffff;
font-size: 1.3em !important;
position: relative;
display: block;
margin-right: 60px;
margin-bottom: 0px;
&:hover ${DropDownContent} {
  display: block;
  color: #d9d9d9;
  cursor: pointer;
  text-decoration: none;
}
&:visited {
  color: #d9d9d9;
  text-decoration: none;
}
`;

export default function AppNav() {

  const links = [
    <DropDownLink className={"dropDownMenu"}>Movies<Icon><FontAwesome name={"fa fa-caret-down"} size="lg" /></Icon>
      <ul className={"dropDownList"}>
      <li><Link to="/movies/coming-soon">Coming Soon</Link></li>
      <li><Link to="/movies/now-playing">Now Playing</Link></li>
      <li><Link to="/movies/popular">Popular</Link></li>
      </ul>
    </DropDownLink>,
    <NavLink to="/dashboard">Dashboard</NavLink>,
    <NavLink lastbtn="true" to="/community">Community</NavLink>
  ];

  return (
    <NavBar>
      <List>
        {links.map((link, idx) => {
          return (
            <ListElement key={idx.toString()} className="link">
              {link}
            </ListElement>
          );
        })}
      </List>
    </NavBar>
  );
}
