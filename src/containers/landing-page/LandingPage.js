import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Footer } from "./Footer"
import { Main } from "./Main"
import { HeadingSection } from './HeadingSection';
import styled from 'styled-components';
import "../../styles/main.css"

const Wrapper = styled.div`
position: relative;
width: 100%;
height: 100%;
background-color: #081C24;
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
      <Wrapper>
        <HeadingSection />
        <Main />
        <Footer />
      </Wrapper>
    );
  };
};

export default connect(null)(LandingPage);
