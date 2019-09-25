import React from "react";

import styled from "styled-components";

import { Link } from "react-router-dom";

const NavContainer = styled.nav`
    // position: fixed;
    width: 100%;
    height: 6vh;
    z-index: 999;
    background-color: #272123;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    .flex(row, flex-end, center);
    a {
        margin-right: 20px;
        text-decoration: none;
        color: white;
        transition: 0.2s ease-in;


    }
    a:hover {
        letter-spacing: 5px;
        cursor: pointer;
    }
    @media @tablet {
        .flex(row, center, center);
    }
}
.logo{
color: white;
display: flex;
justify-: flex-start;
}

a:nth-child(6) {
    // color: lime;
    padding: 0 5px 0 5px;
    border: 1px solid white;
    border-radius: 15px;
    background: white;
    color: black;
    &:hover{
        border: 1px solid #272123;
        background: #272123;
        color: white;
        padding-left: 10px;

    }
    
  }
`;

function NavBar(){
    return(
        
        <NavContainer>
            <a href="#">Logo</a>
            <Link to="/" className="home-button">Home</Link>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <Link to="/RegistrationForm/" className="Register Link">Register</Link>
            <Link to="/LoginForm/" className="Login Link">Login</Link>
        </NavContainer>
    )
}

export default NavBar;