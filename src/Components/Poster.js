import React from "react";
import styled from "styled-components";
import PropsType from "prop-types";
import { Link } from "react-router-dom";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});

  background-size: cover;
  background-position: center center;
  height: 180px;
  border-radius: 4px;
  transition: opacity 0.1s ease-in-out;
`;

const Rating = styled.span`
  bottom: 5px;
  position: absolute;
  right: 5px;
  opacity: 0;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;
const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : require("../assets/noimage.jpg")} />

        <Rating>
          <span role="img" aria-label="rating">
            ⭐
          </span>{" "}
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>{title.length > 18 ? `${title.substring(0, 15)}...` : title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.PropsType = {
  id: PropsType.number.isRequired,
  imageUrl: PropsType.string,
  title: PropsType.string.isRequired,
  rating: PropsType.number.isRequired,
  year: PropsType.string,
  isMovie: PropsType.bool
};

export default Poster;
