import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
`;
const Logo = styled.span`
  color: #ffffff;
  font-size: 25px;
  margin-left: 30px;
  font-weight: 900;
  cursor: pointer;
`;

const MenuItem = styled.li`
  font-size: 14px;
  font-weight: bold;
  margin-right: 30px;
  color: #e5e5e5;
  cursor: pointer;
`;

const Header = () => {
  return (
    <Container>
      <Logo>
        MA<span style={{ color: "#ff9100" }}>MAD</span>
      </Logo>
      <Menu>
        <MenuItem>HOME</MenuItem>
        <MenuItem>ABOUT</MenuItem>
      </Menu>
    </Container>
  );
};

export default Header;
