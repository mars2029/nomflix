import React from "react";
import PropsType from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Span = styled.span`
  color: ${props => props.color};
  font-weight: 600;
`;

const Message = ({ text, color }) => {
  return (
    <Container>
      <Span color={color}>{text}</Span>
    </Container>
  );
};

Message.PropsType = {
  text: PropsType.string.isRequried,
  color: PropsType.string.isRequired
};

export default Message;
