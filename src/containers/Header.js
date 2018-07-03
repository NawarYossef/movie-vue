import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'normalize.css';
import styled from 'styled-components';
import '../styles/main.css';
import AppNav from '../components/AppNav';
import Title from '../components/Title';
import HamburgerButton from "../components/HamburgerButton";

const AppHeader = styled.header`
width: 100%;
z-index: 1;
position: fixed;
top: 0;
background-color: #081C24;
padding: 15px 0px;
border-bottom: 1px solid #D2691E;
@media (min-width: 320px) {
  padding: 25px 0px;
}
@media (min-width: 768px) {
  padding: 15px 0px;
}
`;

const HeaderWrapper = styled.div`
max-width: 90%;
margin: 0 auto;
height: 100%;
display: flex;
align-items: center;
@media (min-width: 320px) {
  flex-direction: column;
}
@media (min-width: 375px) {
  flex-direction: column;
}
@media (min-width: 425px) {
  flex-direction: column;
}
@media (min-width: 768px) {
  flex-direction: row;
}

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


export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hamburgerState: "not-active",
      visible: false
    }
  }

  handleSidebarHide = () => this.setState({ visible: false })

  handleButtonClick = () => {
    this.state.hamburgerState === "not-active" ?
      this.setState({
        hamburgerState: "is-active",
        visible: !this.state.visible
      }) :
      this.setState({
        hamburgerState: "not-active",
        visible: !this.state.visible
      })
  }
  render() {
    const { visible } = this.state

    return (
      <AppHeader>
        <HeaderWrapper>
          <Title />
          <AppNav />
        </HeaderWrapper>
      </AppHeader>
    );
  }
}
    // <HamburgerButton hamburgerState={this.state.hamburgerState} onClick={this.handleHamburgerClick} />
