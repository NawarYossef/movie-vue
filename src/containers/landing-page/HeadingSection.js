import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import "../../styles/main.css"

const Content = styled.ul`
width: 80%;
background-color: #eeeeeee6;
padding: 0px;
margin: 100px auto 0 auto;
list-style: none;
display: flex;
flex-wrap: wrap;  
align-items: flex-start;
margin-top: 100px;
border-radius: 3px;
list-style-type: none !important;
`;

const Article = styled.li`
color: #B8534E;
display: flex;
flex: 1;
flex-direction: column;
margin-bottom: 0px !important;
padding: 10px;
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

export const HeadingSection = () => {
  return (
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
  );
}

export default connect(null)(HeadingSection);
