import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import MovieImg1 from "../../assets/movie-img1.jpg";
import MovieImg2 from "../../assets/movie-img2.jpg";
import MovieImg3 from "../../assets/movie-img3.jpg";
import "../../styles/main.css"

const Wrapper = styled.div`
width: 100%;
height: 400px;  
`

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

const Image = styled.img`
max-width: auto !important;
max-height: 100% !important;
`
const HeadingText = styled.div`
position: absolute;
z-index: 1;
width: 50%;
margin: 0 auto;
top: 25%;
left: 25%;
right: 25%;
background-color: #080808a1;
`

const Text = styled.h2`
  padding: 30px;
  color: #ffffff !important;
`
export const HeadingSection = () => {
  return (
    <Wrapper>
      <HeadingText>
        <Text>Find Your favorite movies</Text>
      </HeadingText>
      <Carousel>
        <Carousel.Item>
          <Image  src={MovieImg2} />
        </Carousel.Item>
        <Carousel.Item>
          <Image  src={MovieImg3} />
        </Carousel.Item>
        <Carousel.Item>
          <Image  src={MovieImg1} />
        </Carousel.Item>
      </Carousel>
    </Wrapper>
  );
}

export default connect(null)(HeadingSection);
