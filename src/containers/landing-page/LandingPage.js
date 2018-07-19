import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Main } from "./Main"
import styled from 'styled-components';
import "../../styles/main.css"

const Wrapper = styled.div`
width: 100%;
height: 100%;
position: relative;
`
export class LandingPage extends Component {

  componentDidMount = () => {
    document.body.style.backgroundColor = "url('../../assets/landing-page-img.jpg')";
  }
  render() {
    return (
      <Wrapper>
        <Main />
      </Wrapper>
    );
  };
};

export default connect(null)(LandingPage);
