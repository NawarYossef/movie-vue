import React from 'react';
import 'normalize.css';
import styled from 'styled-components';

const PhotosWrapper = styled.div`
display: flex;
width: 100%;
margin: 0 auto 100px auto;
justify-content: space-around;
@media (min-width: 320px) {
  flex-direction: column;
  margin-bottom: 200px;
}
@media (min-width: 1024px) {
  flex-direction: row;
}
`
const AllActors = styled.div`
display: block;
text-align: left;
line-height: 150%;
width: 70%;
margin: 0 auto;
padding: 0px 20px;
color: #e1e1e1;
@media (min-width: 768px) {
  width: 95%;
}
@media (min-width: 1024px) {
  width: 95%;
}

`;

const CastMember = styled.div`
display: inline-block;
text-align: center;
@media (min-width: 320px) and (max-width: 767px) {
  width: 70%;
  margin: 0 auto;
  display: block;
  margin-top: 10px;
}
`

const Photo = styled.img`
margin-bottom: 10px;
width: 140px;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
border-radius: 3px;
@media (min-width: 320px) {
  width: 140px;
}
@media (min-width: 425px) and (max-width: 767px) {
  width: 250px;
}
@media (min-width: 768px) and (max-width: 1023px) {
  width: 300px;
}
`;

const SectionTitle = styled.h2`
color: #D2691E;
font-size: 1.6em;
display: block;
margin-top: 0px;
margin-bottom: 0px;
padding-left: 10px !important;
@media (min-width: 320px) {
 text-align: center;
}
@media (min-width: 1024px) {
 text-align: left;
}
`;
const ActorName = styled.h5`
font-size: 1em;
text-align: center;
display: block;
margin-bottom: 1  0px;
margin-top: 30px;
`;


export const ActorsPhotos = props => {
  if (Object.keys(props.movieCreditsData).length) {
    const actors = props.movieCreditsData.cast.slice(0, 6)
    return (
      <AllActors>
        <SectionTitle>Cast</SectionTitle>
        <PhotosWrapper>
          {
            actors.map((actor) => {
              return (
                <CastMember key={actor.id}>
                  <ActorName>{actor.name}</ActorName>
                  <Photo src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} />
                </CastMember>
              )
            })
          }
        </PhotosWrapper>
      </AllActors>
    );
  }
  return null;
}
