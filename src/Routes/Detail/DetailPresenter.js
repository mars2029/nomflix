import React from "react";
import PropsType from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Helmet from "react-helmet";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  position: relative;
  padding: 50px;
`;
const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(3px);
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;
const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 14px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 25px;
    
  ::-webkit-scrollbar {
    height: 0px; /* remove scrollbar space */
    background:rgba(0,0,0,0.2);
    ); /* optional: just make scrollbar invisible */
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(204, 204, 214,0.4);
  }
  overflow-y: scroll;

`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 10px;
`;

const Item = styled.span``;

const ItemContainer = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.div`
  font-size: 12px;
  opacity: 0.7;
  line-height: 2;
  width: 50%;
  margin-bottom: 20px;
`;

const H4 = styled.h4`
  width: 100%;
  font-size: 20px;
  font-weight: 300;
  margin: 20px 0;
`;

const Videos = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-gap: 10px;
`;

const Icon = styled.img`
  display: flex;

  width: 35px;
  height: 35px;
`;
const Link = styled.a``;

const Productions = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-gap: 10px;
`;

const PIcon = styled.div`
  background-image: url(${props => props.comps});
  height: 50px;
  width: 50px;
  background-size: cover;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  background-position: center center;
  margin-bottom: 10px;
`;
const PIconText = styled.h4`
  font-size: 14px;
  max-width: 100px;
  text-align: center;
`;

const SeasonsContent = styled.div`
  width: 60%;
  overflow: hidden;

  display: flex;
  ::-webkit-scrollbar {
    width: 0px; /* remove scrollbar space */
    background:rgba(0,0,0,0.2);
    ); /* optional: just make scrollbar invisible */
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(204, 204, 214,0.4);
  }
  overflow-x: scroll;
`;
const SeasonGrid = styled.div`
  &:not(:last-of-type) {
    margin-right: 15px;
    margin-bottom: 10px;
  }
`;
const SeasonIcon = styled.div`
  background-image: url(${props => props.seasonicon});
  height: 100px;
  width: 100px;
  background-size: cover;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5%;
  background-position: center center;
  margin-bottom: 10px;
`;
const SeasonTitle = styled.div`
  font-size: 14px;
  max-width: 100px;
  text-align: center;
`;

const DetailPresenter = ({ result, error, loading, isMoive }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Helmet>
        <title>{result.original_title ? result.original_title : result.original_name} | Nomflix</title>
      </Helmet>

      <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
      <Content>
        <Cover bgImage={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require("../../assets/noimage.jpg")} />
        <Data>
          <Title>{result.original_title ? result.original_title : result.original_name}</Title>
          <ItemContainer>
            <Item>{result.release_date ? result.release_date.substring(0, 4) : result.first_air_date.substring(0, 4)}</Item>
            <Divider>•</Divider>
            <Item>{result.runtime ? result.runtime : result.episode_run_time[0]} min </Item>
            <Divider>•</Divider>
            <Item>{result.genres && result.genres.map((genre, index) => (index === result.genres.length - 1 ? genre.name : `${genre.name} / `))} </Item>
            <Divider>•</Divider>
            <Item>{`⭐️ ${result.vote_average} / 10 `}</Item>
            {result.imdb_id && (
              <>
                <Divider>•</Divider>
                <Link target="_blank" href={`https://www.imdb.com/title/${result.imdb_id}`}>
                  <Icon src={require("../../assets/imdb.png")} />
                </Link>
              </>
            )}
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          {result.seasons && result.seasons.length > 0 && (
            <>
              <H4> Seasons </H4>
              <SeasonsContent>
                {result.seasons &&
                  result.seasons.length > 0 &&
                  result.seasons.map((season, index) => {
                    return (
                      <SeasonGrid key={index}>
                        <SeasonIcon seasonicon={season.poster_path ? "https://image.tmdb.org/t/p/original/" + season.poster_path : require("../../assets/noimage.jpg")}> </SeasonIcon>
                        <SeasonTitle>{season.name}</SeasonTitle>
                      </SeasonGrid>
                    );
                  })}
              </SeasonsContent>
            </>
          )}
          <H4> Teasers </H4>
          <Videos>
            {result.videos &&
              result.videos.results.length > 0 &&
              result.videos.results.slice(0, 2).map((video, index) => {
                return <iframe key={index} title={video.name} width="320px" height="200px" src={`https://www.youtube.com/embed/${video.key}`} frameBorder="0" allowFullScreen />;
              })}
          </Videos>
          <H4> Production Companies </H4>
          <Productions>
            {result.production_companies &&
              result.production_companies.length > 0 &&
              result.production_companies.map((company, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <PIcon comps={company.logo_path ? "https://image.tmdb.org/t/p/original/" + company.logo_path : require("../../assets/noimage.jpg")}> </PIcon>
                    <PIconText>{company.name}</PIconText>
                  </div>
                );
              })}
          </Productions>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.PropsType = {
  result: PropsType.array,
  error: PropsType.string,
  loading: PropsType.string,
  isMoive: PropsType.object
};

export default DetailPresenter;
