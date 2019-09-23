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
    <nav className="navbar">
      <h1>NBA Career Longevity Predictor</h1>
      <TheP><NavLink to={"/"}>Home</NavLink></TheP>
      <TheP><NavLink to={"/login"}>Log-In</NavLink></TheP>
      <TheP><NavLink to={"/register"}>Register</NavLink></TheP>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;

const TheP =styled.p`
  font-size: 3rem;
`;