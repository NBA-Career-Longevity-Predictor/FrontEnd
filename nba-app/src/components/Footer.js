import React from "react";
import styled from "styled-components";

const Footer = styled.div `
    width: 100%;
    height: 6vh;
    z-index: 999;
    background-color: #272123;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 16px;
`

const Copy = styled.p `
    color: white;
    margin: 0 20px;
`


function FooterBar(){
    return(
        <Footer>
            <Copy>© NBA Career Longevity Predictor</Copy>
        </Footer>
    )
}
export default FooterBar;