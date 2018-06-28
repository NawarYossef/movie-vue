import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Footer } from "./Footer"
import { HeadingSection } from './HeadingSection';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import "../../styles/main.css"

const Main = styled.main`
background-image: url("../../assets/landing-page-img.jpg");
width: 100%;
height: 100vh;
margin: 0px;
padding-top: 100px;
`
export class LandingPage extends Component {

  componentDidMount = () => {
    this.changeFooterPosition();
  }

  changeFooterPosition = () => {
    document.querySelector("footer").style.position = "absolute";
  }

  render() {
    return (
      <Main className={"background"}>
        <HeadingSection />
        <Footer />
      </Main>
    );
  };
};

export default connect(null)(LandingPage);
