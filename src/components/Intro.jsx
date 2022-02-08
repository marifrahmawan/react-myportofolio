import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 800px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(
    30% 50% at 50% 100%,
    rgb(26, 26, 26) 0%,
    rgba(227, 204, 255, 0) 100%
  );
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Terminal = styled.div`
  width: 80%;
  height: 75%;
  border: 3px solid gray;
  background-color: #07078f;
`;

const TerminalTop = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid gray;
`;

const TerminalTopText = styled.span`
  color: #ffffff;
  margin-left: 5px;
  font-size: 9px;
`;

const TerminalTopBoxItem = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  justify-content: flex-end;
`;

const TerminalButton = styled.span`
  height: 100%;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 15px;
  font-weight: 900;
  margin: 0 3px;
  cursor: default;
`;

const TerminalBody = styled.div`
  color: white;
  background-color: transparent;
`;

const TerminalBodyText = styled.p`
  margin: 10px 5px;
  background-color: transparent;
  font-size: 9px;
`;

const Typing = styled.div`
  font-size: 9px;
  background-color: transparent;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;

  animation: typewriter 4s steps(44) 1s 1 normal both;

  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;

const ContactMeText = styled.h1`
  color: #ffffff;
  font-size: 15px;
  margin: 20px 10px;
`;

const Social = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
`;

const SocialBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialItem = styled.div`
  width: 90px;
  height: 90px;
  background-color: #242424;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s all ease;
  cursor: pointer;

  :hover {
    transform: scale(1.3, 1.3);
    transition: 0.5s all ease;
  }
`;

const Intro = () => {
  const TwitterLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      focusable="false"
      color="rgb(255, 255, 255)"
      style={{
        userSelect: "none",
        width: "50px",
        backgroundColor: "transparent",
        display: "inline-block",
        fill: "rgb(255, 255, 255)",
        flexShrink: 0,
      }}
    >
      <g color="rgb(255, 255, 255)" weight="regular">
        <path
          d="M128,88.00288a40.00668,40.00668,0,0,1,76.67148-16.00327L240,72l-32.26239,32.2625A128.00746,128.00746,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,87.9862,48Z"
          fill="none"
          stroke="rgb(255, 255, 255)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </g>
    </svg>
  );

  const InstagramLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      focusable="false"
      color="rgb(255, 255, 255)"
      style={{
        userSelect: "none",
        width: "50px",
        backgroundColor: "transparent",
        display: "inline-block",
        fill: "rgb(255, 255, 255)",
        flexShrink: 0,
      }}
    >
      <g color="rgb(255, 255, 255)" weight="regular">
        <circle
          cx="128"
          cy="128"
          r="40"
          fill="none"
          stroke="rgb(255, 255, 255)"
          strokeMiterlimit="10"
          strokeWidth="16"
        ></circle>
        <rect
          x="36"
          y="36"
          width="184"
          height="184"
          rx="48"
          strokeWidth="16"
          stroke="rgb(255, 255, 255)"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        ></rect>
        <circle cx="180" cy="75.99998" r="12"></circle>
      </g>
    </svg>
  );

  const GithubLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      focusable="false"
      color="rgb(255, 255, 255)"
      style={{
        userSelect: "none",
        width: "50px",
        backgroundColor: "transparent",
        display: "inline-block",
        fill: "rgb(255, 255, 255)",
        flexShrink: 0,
      }}
    >
      <g color="rgb(255, 255, 255)" weight="regular">
        <path
          d="M84,240a24,24,0,0,0,24-24V168"
          fill="none"
          stroke="rgb(255, 255, 255)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M172,240a24,24,0,0,1-24-24V168"
          fill="none"
          stroke="rgb(255, 255, 255)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M152,168h16a24,24,0,0,1,24,24v8a24,24,0,0,0,24,24"
          fill="none"
          stroke="rgb(255, 255, 255)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M104,168H88a24,24,0,0,0-24,24v8a24,24,0,0,1-24,24"
          fill="none"
          stroke="rgb(255, 255, 255)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M111.825,63.99934A51.9599,51.9599,0,0,0,68,40a51.90058,51.90058,0,0,0-3.48841,44.7036A49.25789,49.25789,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.25769,49.25769,0,0,0-8.5116-27.29639A51.90061,51.90061,0,0,0,188,40a51.95992,51.95992,0,0,0-43.82535,23.99983Z"
          fill="none"
          stroke="rgb(255, 255, 255)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </g>
    </svg>
  );

  return (
    <Container>
      <Left>
        <Terminal>
          <TerminalTop>
            <TerminalTopText>C:\LOSEDOWS\system69\cmd.exe</TerminalTopText>
            <TerminalTopBoxItem>
              <TerminalButton>
                <hr
                  style={{
                    width: "40%",
                    height: "2px",
                    backgroundColor: "white",
                  }}
                />
              </TerminalButton>
              <TerminalButton>x</TerminalButton>
            </TerminalTopBoxItem>
          </TerminalTop>
          <TerminalBody>
            <TerminalBodyText>
              Macrohard (R) Losedows NT(TM) [Version 0.0.12]
            </TerminalBodyText>
            <TerminalBodyText>
              ©️ 1969 Macrohard Corporation. All rights reserved.
            </TerminalBodyText>
            <br />
            <TerminalBodyText>
              <Typing>C:\Losedows{">"}Testing the animation</Typing>
            </TerminalBodyText>
          </TerminalBody>
        </Terminal>
      </Left>
      <Right>
        <Social>
          <ContactMeText>CONTACT ME </ContactMeText>
          <SocialBox>
            <SocialItem>{InstagramLogo}</SocialItem>
            <SocialItem>{TwitterLogo}</SocialItem>
            <SocialItem>{GithubLogo}</SocialItem>
          </SocialBox>
        </Social>
      </Right>
    </Container>
  );
};

export default Intro;
