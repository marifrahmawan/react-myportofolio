import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #ffffff;
  background: radial-gradient(
    50% 100% at 50% 100%,
    rgb(26, 26, 26) 0%,
    rgba(227, 204, 255, 0) 100%
  );
`;

const Text = styled.span`
  font-size: 10px;
  margin: 10px 0;
  background-color: transparent;
`;

const Footer = () => {
  return (
    <Container>
      <Text>
        ©️ 2022 BY MA<span style={{ color: "#ff9100" }}>MAD</span>{" "}
      </Text>
      <Text>
        MADE WITH{" "}
        <a
          style={{
            color: "#ffffff",
            fontSize: "10px",
            backgroundColor: "transparent",
          }}
          href="https://reactjs.org"
        >
          @REACTJS
        </a>
      </Text>
    </Container>
  );
};

export default Footer;
