import React from "react";
import styled from "styled-components";
import PropsType from "prop-types";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message.js";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 20px 20px;
`;

const HomePresenter = ({ nowPlaying, upComing, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Helmet>
        <title>Movies | Nomflix</title>
      </Helmet>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {upComing && upComing.length > 0 && (
        <Section title="UPComming">
          {upComing.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {error && <Message text={error} color="#e74c3c" />}
    </Container>
  );

HomePresenter.PropsType = {
  nowPlaying: PropsType.array,
  upComing: PropsType.array,
  popular: PropsType.array,
  error: PropsType.bool.isRequired,
  loading: PropsType.string
};

export default HomePresenter;
