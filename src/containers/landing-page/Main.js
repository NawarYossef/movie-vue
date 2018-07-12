import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import "../../styles/main.css"

const MainSection = styled.main`
width: 100%;
height: 100%;
padding-bottom: 100px;
padding-top: 220px;
`

const Content = styled.ul`
width: 80%;
padding: 0px 0px;
background-color: #eeeeeee6;
padding: 0px;
margin: 0px auto 0px auto;
list-style: none;
display: flex;
flex-wrap: wrap;  
align-items: flex-start;
border-radius: 3px;
list-style-type: none !important;
@media (min-width: 320px) {
  flex-direction: column;
  top: 20%;
}
@media (min-width: 768px) {
  flex-direction: row;
  top: 35%;
}
`;

const Article = styled.li`
color: #B8534E;
display: flex;
flex: 1;
flex-direction: column;
margin-bottom: 0px !important;
padding: 80px;
@media (min-width: 320px) {
  padding: 40px;
  margin: 0 auto;
}
@media (min-width: 850px) {
  padding: 80px;
}
`
const Icon = styled.div`
flex: 1;
font-size: 3em;
`;

const Text = styled.p`
font-size: 0.5em !important;
`
const FirstText = styled.p`
font-size: 1.4em !important;
`

export const Main = () => {
  return (
    <MainSection>
      <Content>
        <Article>
          <Icon>
            <FontAwesome name="video" />
          </Icon>
          <FirstText>Find your favorite movies</FirstText>
        </Article>
        <Article>
          <Icon>
            <FontAwesome name="bookmark" />
            <Text>Save movies to your dashboard</Text>
          </Icon>
        </Article>
        <Article>
          <Icon>
            <FontAwesome name="comments" />
            <Text>Enjoy free membership to our chat community</Text>
          </Icon>
        </Article>
      </Content>
    </MainSection>
  );
}

export default connect(null)(Main);
