import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
`;

const CardWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Body = () => {
  return (
    <Container>
      <CardWrapper>
        <Card />
        <Card />
        <Card />
      </CardWrapper>
    </Container>
  );
};

export default Body;
