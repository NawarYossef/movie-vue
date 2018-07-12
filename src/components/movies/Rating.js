import React, { Component } from 'react';
import axios from 'axios';
import Imdb from '../../assets/imdb.png'
import RottenTomatoe from '../../assets/rotten-tomatoe.png'
import MetaCritic from '../../assets/metacritic.png'
import 'normalize.css';
import styled from 'styled-components';

const RatingsWrapper = styled.ul`
display: flex;
padding-left: 45px;
margin-top: 30px;
text-align: left;
width: 50%;
justify-content: space-between;
@media (min-width: 320px) and (max-width: 767px) {
  width: 100%;
  padding-left: 0px;
}
@media (min-width: 768px){
  width: 80%;
}
@media (min-width: 1024px){
  width: 50%;
}
`

const SingleRating = styled.li`
display: inline-block;
width:  30px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;

`
const ImdbRating = styled.li`
display: inline-block;
width:  30px;
height: 35px;
display: flex;
align-items: center;
justify-content: center;

`
const RatingImg = styled.img`
width: 100%;
margin-right: 5px;
margin: 0 auto;
`;

const Score = styled.h5`
font-size: 1.3em;
text-align: center;
display: inline-block;
`;


export class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allRatings: []
    }
  }

  componentDidMount = () => {
    const movieTitle = this.props.movieData.title;
    const url = `http://www.omdbapi.com/?t=${movieTitle}&plot=full&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
    axios.get(url)
      .then(res => {
        this.setState({
          allRatings: [
            [
              "Imdb",
              (res.data.imdbRating + "/10"),
              "../../assets/imdb.png"
            ],
            [
              "RottenTomatoe",
              res.data.Ratings[1]["Value"],
              "../../assets/rotten-tomatoe.png"
            ],
            [
              "MetaCritic",
              (res.data.Ratings[0]["Value"].split("/")[0]),
              "../../assets/metacritic.png"
            ]
          ]
        })
      })
      .catch(function (err) {
        console.log(err);
      })
  }
  render() {  
    if (this.state.allRatings.length) {
      return (
        <RatingsWrapper>
          <ImdbRating key={this.state.allRatings[0]}>
            <RatingImg src={Imdb} />
            <Score>{this.state.allRatings[0][1]}</Score>
          </ImdbRating>

          <SingleRating key={this.state.allRatings[1]}>
            <RatingImg src={RottenTomatoe} />
            <Score>{this.state.allRatings[1][1]}</Score>
          </SingleRating>

          <SingleRating key={this.state.allRatings[2]}>
            <RatingImg src={MetaCritic} />
            <Score>{this.state.allRatings[2][1]}</Score>
          </SingleRating>
        </RatingsWrapper>
      );
    } else {
      return null;
    }
  }
}