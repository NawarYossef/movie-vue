import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Footer } from "./Footer"
import { Main } from "./Main"
import styled from 'styled-components';
import "../../styles/main.css"

const Wrapper = styled.div`
width: 100%;
height: 100vh;
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
      <Wrapper className={"background"}>
        <Main />
        <Footer />
      </Wrapper>
    );
  };
};

export default connect(null)(LandingPage);
