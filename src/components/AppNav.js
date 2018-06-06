import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'normalize.css';
import FontAwesome from 'react-fontawesome';
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

const NavLink = styled(Link) `
  color: #ffffff;
  display: block;
  margin-right: ${props => props.lastbtn ? '0px' : '60px'};
  &:hover {
    color: #d9d9d9;
  }
  &.active {
    color: #d9d9d9;
  }
`;
const DropDownLink = styled.div`
color: #ffffff;
position: relative;
display: block;
margin-right: 60px;
&:hover {
  color: #d9d9d9;
  cursor: pointer;
}
&.active {
  color: #d9d9d9;
}
`;

const Icon = styled.div`
display: inline-block;
margin-left: 5px;
`;

const SubLink = styled(Link) `
float: none;
color: black;
padding: 12px 16px;
text-decoration: none;
display: block;
text-align: left;
&:hover {
  background-color: #ddd;
}
`;

let DropDownContent = styled.div`
display: none;
background-color: #f9f9f9;
min-width: 160px;
box-shadow: 0;
`;
export default class AppNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownMenuClicked: false
    };
  }

  handleDropDownMenu() {
    if (this.state.dropDownMenuClicked) {
      DropDownContent = styled.div`
      display: none;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0;
      `;
      this.setState({ dropDownMenuClicked: false });
    } else {
      DropDownContent = styled.div`
        display: block;
        position: absolute;
        right: 30%;
        top: 50%;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0;
        `;
      this.setState({ dropDownMenuClicked: true })
    }
  }

  toggleMenu() {
    this.setState({ dropDownMenuClicked: false });
  }

  render() {
    const links = [
      <DropDownLink
        onClick={this.handleDropDownMenu.bind(this)}
      >Movies<Icon><FontAwesome className={"fa fa-caret-down"} size="1" /></Icon></DropDownLink>,
      <DropDownContent>
        <SubLink to="/movies/coming-soon">Coming Soon</SubLink>
        <SubLink to="/movies/now-playing">Now Playing</SubLink>
        <SubLink to="/movies/popular">Popular</SubLink>
      </DropDownContent>,
      <NavLink onClick={this.toggleMenu.bind(this)} to="/dashboard">Dashboard</NavLink>,
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

}
