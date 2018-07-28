import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
  @media (min-width: 320px) {
    padding-left: 0px;
  }
`;

const ListElement = styled.li`
  margin-bottom: 0px;
  text-decoration: none;
`;

const NavLink = styled(Link)`
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
  @media (min-width: 320px) {
    font-size: 1em !important;
  }
  @media (min-width: 425px) {
    font-size: 1.3em !important;
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

let Count = styled.span`
width: 25px;
height: 25px;
line-height: 25px;
position: absolute;
border-radius: 50%;
-moz-border-radius: 50%;
-webkit-border-radius: 50%;
top: 0%;
right: 18%;
background-color: #D2691E;
color: #ffffff;
@media (min-width: 320px) and (max-width: 425px) {
  font-size: 1em !important;
  width: 22px;
  height: 22px;
  line-height: 22px;
  right: 20%;
}
`;

const DashboardWrapper = styled.ul`
position: relative;
`

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
@media (min-width: 320px) {
  font-size: 1em !important;
  margin-right: 0px;
}
@media (min-width: 425px) {
  font-size: 1.3em !important;
}

`;

const AppNav = props => {
  const appLinks = [
    <DropDownLink className={"dropDownMenu"}>Movies<Icon><FontAwesome name={"fa fa-caret-down"} size="lg" /></Icon>
      <ul className={"dropDownList"}>
        <li><Link to="/movies/coming-soon">Coming Soon</Link></li>
        <li><Link to="/movies/now-playing">Now Playing</Link></li>
        <li><Link to="/movies/popular">Popular</Link></li>
      </ul>
    </DropDownLink>,
    <DashboardWrapper>
      <NavLink to="/dashboard">Dashboard</NavLink>
      {props.bookmarkCount > 0 && <Count>{props.bookmarkCount}</Count>}
    </DashboardWrapper>,
    <NavLink to="/community">Community</NavLink>,
    <NavLink lastbtn="true" to="/">Log out</NavLink>
  ];

  const homePageLinks = [
    <NavLink to="/login">Login</NavLink>,
    <NavLink lastbtn="true" to="/signup">Signup</NavLink>
  ]

  let links;
  props.loggedIn ? links = appLinks : links = homePageLinks;
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

const mapStateToProps = state => ({
  bookmarkCount: state.movies.bookmarkCount,
  loggedIn: state.users.loggedIn
});

export default connect(mapStateToProps, null)(AppNav);


