import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogout } from '../actions/users';
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


const HomePageNavbar = () => {

  const homePageLinks = [
    <NavLink to="/login">Login</NavLink>,
    <NavLink lastbtn="true" to="/signup">Signup</NavLink>
  ]

  return (
    <NavBar>
      <List>
        {homePageLinks.map((link, idx) => {
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

const mapDispatchToProps = dispatch => ({
  userLogout: () => dispatch(userLogout())
});

const mapStateToProps = state => ({
  bookmarkCount: state.movies.bookmarkCount,
  loggedIn: state.users.loggedIn
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageNavbar);


