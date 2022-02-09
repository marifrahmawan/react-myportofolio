import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: calc((100% / 2) - 20px);
  margin-bottom: 40px;
  margin-left: 10px;
  margin-right: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 420px;
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
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const TopBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  background-color: transparent;
`;

const Title = styled.h1`
  margin-top: 10px;
  font-size: 12px;
  background-color: transparent;
`;

const Date = styled.div`
  margin-top: 10px;
  font-size: 9px;
  color: #a1a1a1ff;
  background-color: transparent;
`;

const BottomBox = styled.p`
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 9px;
  background-color: transparent;
  color: #ffffff;
  text-align: justify;
  line-height: 1.6;
`;

const Card = () => {
  return (
    <Container>
      <Img src="https://cdn.dribbble.com/users/1904192/screenshots/17452640/media/8fa15a11a19a2356cebee2ca2e3d3417.png?compress=1&resize=1200x900&vertical=top" />
      <TopBox>
        <Title>Title</Title>
        <Date>29.10.98</Date>
      </TopBox>
      <BottomBox>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sint.
        Quisquam ea optio, nostrum porro, dolorem architecto sapiente
        repellendus officia nihil vitae eligendi cum illum odit culpa provident
        deserunt quaerat.
      </BottomBox>
    </Container>
  );
};

export default Card;
