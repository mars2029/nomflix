import React from "react";
import styled from "styled-components";
import PropsType from "prop-types";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
`;
const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  error,
  loading,
  handleSubmit,
  updateTerm
}) => (
  <Container>
    <Helmet>
      <title>Search | Nomflix</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies or Tv show..."
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>

    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Search Results - Movies">
            {movieResults.map(movie => (
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
        {tvResults && tvResults.length > 0 && (
          <Section title="Search Results - Movies">
            {tvResults.map(show => (
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
      </>
    )}
    {error && <Message text={error} color="#e74c3c" />}
    {movieResults &&
      tvResults &&
      movieResults.length === 0 &&
      tvResults.length === 0 && <Message text={`Not found `} color="#95a5a6" />}
  </Container>
);

SearchPresenter.PropsType = {
  movieResults: PropsType.array,
  tvResults: PropsType.array,
  searchTerm: PropsType.string,
  error: PropsType.string,
  loading: PropsType.bool.isRequired,
  handleSubmit: PropsType.func.isRequired,
  updateTerm: PropsType.func.isRequired
};

export default SearchPresenter;
