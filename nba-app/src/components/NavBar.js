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
      {/* <H1>NBA</H1> <H1>Career</H1> <H1>Longevity</H1> <H1>Predictor</H1> */}
      <NavLinks>
      <Link><NavLink className="nav-link" to={"/"}>Home</NavLink></Link>
      <Link><NavLink to={"/login"}>Log-In</NavLink></Link>
      <Link><NavLink to={"/register"}>Register</NavLink></Link>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;

// const H1 = styled.h1`
//   // font-size: 3rem;
//   // margin: 3px;
//   // padding: 3px;
//   // align-items: center;
// `;

const Nav = styled.nav `
    height: 6vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
    background-color: #272123;
    font-size: 16px;
`
const NavLogo = styled.div `
    margin: 20px;
`
const Logo = styled.p `
    color: white;
`
const NavLinks = styled.div `
    display: flex;
    width: 15%;
    justify-content: space-between;
    margin: 20px;
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