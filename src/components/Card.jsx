import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: calc((100% / 2) - 20px);
  margin-bottom: 40px;
  margin-left: 10px;
  margin-right: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 400px;
  color: #ffffff;
  position: relative;
  z-index: 0;
  cursor: pointer;
  border: none;
  background: radial-gradient(
    50% 70% at 50% 100%,
    rgb(26, 26, 26) 0%,
    rgba(227, 204, 255, 0) 100%
  );
`;

const Img = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const Text = styled.div`
  margin-top: 10px;
  bottom: 100px;
  font-size: 9px;
  background-color: transparent;
`;

const Card = () => {
  return (
    <Container>
      <Img src="https://cdn.dribbble.com/users/1904192/screenshots/17452640/media/8fa15a11a19a2356cebee2ca2e3d3417.png?compress=1&resize=1200x900&vertical=top" />
      <Text>Test Test Test Test</Text>
    </Container>
  );
};

export default Card;
