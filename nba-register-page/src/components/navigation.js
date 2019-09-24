import React from "react";
import styled from "styled-components";

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
const Link = styled.a `
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


function NavBar(){
    return(
        <Nav>
        <NavLogo>
            <Logo>Logo</Logo>
        </NavLogo>
        <NavLinks>
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Start</Link>
            <Link href="#">Contact</Link>
            <Link href="#">NBA</Link>
        </NavLinks>
        </Nav>
    )
}
export default NavBar;