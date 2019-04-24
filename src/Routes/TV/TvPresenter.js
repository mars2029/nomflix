import React from "react";
import styled from "styled-components";
import PropsType from "prop-types";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "Components/Message.js";
import Poster from "Components/Poster";
import Helmet from "react-helmet";
const Container = styled.div`
  padding: 0px 20px;
`;

const TvPresenter = ({ topRated, popular, airingToday, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Helmet>
        <title>TV | Nomflix</title>
      </Helmet>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated">
          {topRated.map(show => (
            <Poster
              key={show.id}
              id={show.id}
              imageUrl={show.poster_path}
              title={show.original_name}
              rating={show.vote_average}
              year={show.release_date && show.release_date.substring(0, 4)}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map(show => (
            <Poster
              key={show.id}
              id={show.id}
              imageUrl={show.poster_path}
              title={show.original_name}
              rating={show.vote_average}
              year={show.release_date && show.release_date.substring(0, 4)}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map(show => (
            <Poster
              key={show.id}
              id={show.id}
              imageUrl={show.poster_path}
              title={show.original_name}
              rating={show.vote_average}
              year={show.release_date && show.release_date.substring(0, 4)}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {error && <Message text={error} color="#e74c3c" />}
    </Container>
  );
TvPresenter.PropsType = {
  topRated: PropsType.array,
  popular: PropsType.array,
  airingToday: PropsType.array,
  error: PropsType.string,
  loading: PropsType.bool.isRequired
};

export default TvPresenter;
