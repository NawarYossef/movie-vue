import React from 'react';
import { Link } from 'react-router-dom';
import 'normalize.css';
import styled from 'styled-components';

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
`;

const NavLink = styled(Link)`
  color: #C7670E;
  display: block;
  margin-right: ${props => props.lastbtn ? '0px' : '60px'};
  &:hover {
    color: #555;
  }
  &.active {
    color: #555;
  }
`;

export default function AppNav(props) {
  const links = [
    <NavLink to="/popular">Popular</NavLink>,
    <NavLink to="/in-theaters">In Theaters</NavLink>,
    <NavLink lastbtn="true" to="/coming-soon">Coming Soon</NavLink>
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
