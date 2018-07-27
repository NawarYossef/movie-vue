import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../history';
import styled from 'styled-components';

const TitleWrapper = styled.div`
width:  100%;
text-align: left;
`;

const SectionTitle = styled.h2`
color: #D2691E;
font-size: 3em;
text-align: center;
margin-top: 100px;
`;

const SectionWrapper = styled.section`
background-color: #051929;
width: 100%;
height: 100vh;
margin: 0px;
padding-top: 100px;
`
const MoviesWrapper = styled.ul`
width: 80%;
padding: 0px;
margin: 0px auto 0 auto;
list-style: none;
display: flex;
flex-wrap: wrap;  
align-items: flex-start;
justify-content: space-between;
`;

export class Community extends Component {
  componentDidMount = () => {
    this.userLoggedInCheck();
  }

  userLoggedInCheck = () => {
    !this.props.loggedIn && history.push('/')
  }

  render() {
    return (
      <SectionWrapper>
        <MoviesWrapper>
          <TitleWrapper>
            <SectionTitle>*Feature coming soon</SectionTitle>
          </TitleWrapper>
        </MoviesWrapper>
      </SectionWrapper>
    );
  };
};

const mapStateToProps = state => ({
  loggedIn: state.users.loggedIn
});
export default connect(mapStateToProps, null)(Community);
