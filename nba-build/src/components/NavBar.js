import React from "react";

import styled from "styled-components";

const NavContainer = styled.nav`
    // position: fixed;
    width: 100%;
    height: 6vh;
    z-index: 999;
    background-color: #272123;
    .flex(row, flex-end, center);
    a {
        margin-right: 20px;
        text-decoration: none;
        color: white;
        -webkit-transition-duration: 0.7s;
        transition-duration: 0.7s;
    }
    a:hover {
        letter-spacing: 1px;
        cursor: pointer;
    }
    @media @tablet {
        .flex(row, center, center);
    }
}
`;

function NavBar(){
    return(
        <NavContainer>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Start</a>
            <a href="#">Contact</a>
            <a href="#">NBA</a>
        </NavContainer>
    )
}

export default NavBar;