import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: calc((100% / 2) - 20px);
  margin-top: 40px;
  margin-left: 10px;
  margin-right: 10px;
  height: 500px;
  background-color: blue;
`;

const Card = () => {
  return <Container>Image</Container>;
};

export default Card;
