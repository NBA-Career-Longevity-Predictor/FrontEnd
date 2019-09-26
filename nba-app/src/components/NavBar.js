import React from "react";
import { NavLink } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";
import styled from "styled-components";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <Nav>
      <NavLogo>
        <Logo>Logo</Logo>
      </NavLogo>
      <H1>NBA</H1> <H1>Career</H1> <H1>Longevity</H1> <H1>Predictor</H1>
      <NavLinks>
      <Link><NavLink to={"/"}>Home</NavLink></Link>
      <Link><NavLink to={"/login"}>Log-In</NavLink></Link>
      <Link><NavLink to={"/register"}>Register</NavLink></Link>
      </NavLinks>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </Nav>
  );
};

export default Navbar;

const H1 = styled.h1`
  font-size: 3rem;
  margin: 3px;
  padding: 3px;
  align-items: center;
`;

const Nav = styled.nav `
    width: 100%;
    height: 6vh;
    z-index: 999;
    background-color: #272123;
    display: flex;
    flex-direction: row;
    font-size: 16px;
`
const NavLogo = styled.div `
    display: flex;
    align-items: center;
    width: auto;
`
const Logo = styled.p `
    color: white;
    margin: 0 20px;
`
const NavLinks = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
`
const Link = styled.p `
    margin-right: 20px;
    text-decoration: none;
    color: white;
    -webkit-transition-duration: 0.7s;
    transition-duration: 0.7s;
    &:hover {
        letter-spacing: 1px;
        cursor: pointer;
    }
`