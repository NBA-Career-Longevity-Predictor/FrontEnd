import React from "react";

import styled from "styled-components";

const HeaderContainer = styled.header`
font-size: 200px;
h1{
    display: none;
}
`;

function Header(){
    return(
        <HeaderContainer>
            <h1>Header!</h1>
        </HeaderContainer>
    )
}

export default Header;