import React from 'react';
import 'normalize.css';
import styled from 'styled-components';

const CreditsWrapper = styled.div`
display: flex;
justify-content: start;
`
const AllCredits = styled.div`
text-align: left;
line-height: 150%;
padding: 0px 20px;
color: #e1e1e1;
`;

const CastMember = styled.div`
display: inline-block;
width: 60%;
`
const CastName = styled.h2`
display: block;
margin-bottom: 5px;
margin-top: 0px;
font-size: 1.2em;
`
const SectionTitle = styled.h2`
font-size: 1.6em;
display: block;
color: #D2691E;
margin-bottom: 10px;
margin-top: 30px;
`;

const JobTitle = styled.p`
`

export const Credits = props => {
  if (Object.keys(props.movieCreditsData).length) {
    const movieWriters = props.movieCreditsData.crew.filter(data => data.job.toLowerCase() === "writer")
    const movieDirectors = props.movieCreditsData.crew.filter(data => data.job.toLowerCase() === "director")
    return (
      <AllCredits>
        <SectionTitle>Featured Crew</SectionTitle>
        <CreditsWrapper>
          {
            movieWriters.map((writer) => {
              return (
                <CastMember key={writer.id}>
                  <CastName>{writer.name}</CastName>
                  <JobTitle>writer</JobTitle>
                </CastMember>
              )
            })
          }
          {
            movieDirectors.map((director) => {
              return (
                <CastMember key={director.id}>
                  <CastName>{director.name}</CastName>
                  <JobTitle>Director</JobTitle>
                </CastMember>
              )
            })
          }
        </CreditsWrapper>
      </AllCredits>
    );
  }
  return null;
}
