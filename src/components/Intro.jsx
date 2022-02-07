import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: radial-gradient(
    30% 50% at 50% 100%,
    rgb(26, 26, 26) 0%,
    rgba(227, 204, 255, 0) 100%
  ); */
`;

const Terminal = styled.div`
  width: 45%;
  height: 80%;
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

const Intro = () => {
  return (
    <Container>
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
            Macrohard (R) Losedows NT(TM) [Version 0.0.1]
          </TerminalBodyText>
          <TerminalBodyText>
            (c) 1969 Macrohard Corporation. All rights reserved.
          </TerminalBodyText>
        </TerminalBody>
      </Terminal>
    </Container>
  );
};

export default Intro;
