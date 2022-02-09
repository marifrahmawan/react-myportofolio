import React from "react";
import { Link } from "react-router-dom";
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

const Nav = styled(Link)`
  text-decoration: none;
  color: #e5e5e5;
  transition: all 0.3s ease;

  :hover {
    color: #ff9100;
    transition: all 0.3s ease;
  }
`;

const Header = () => {
  return (
    <Container>
      <Logo>
        MA<span style={{ color: "#ff9100" }}>MAD</span>
      </Logo>
      <Menu>
        <MenuItem>
          <Nav to="/">HOME</Nav>
        </MenuItem>
        <MenuItem>
          <Nav to="/about">ABOUT</Nav>
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Header;
