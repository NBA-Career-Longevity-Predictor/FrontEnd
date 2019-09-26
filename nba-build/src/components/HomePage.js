import React from "react";

import { Link } from "react-router-dom";

// import HomeImage from "../images/HomeImage.jpg";

import SearchForm from "../components/SearchForm";

import styled from "styled-components";

const Container = styled.div`
background-image: url("HomeImage.jpg");
background-size: contain;
background-repeat: no-repeat;
}
`;

function HomePage(){
    return(
        <Container>
        {/* <h1>Home Page!</h1> */}
        
        <div>

        {/* <StyledSearch> */}
        <SearchForm />
        {/* </StyledSearch> */}

        <p>Already have an account? <Link to="/LoginForm/" className="home-button">Login</Link></p>
        <p>Don't have an account? <Link to="/RegistrationForm/" className="register-button">Register</Link></p>

        </div>
    </Container>
    )
}

export default HomePage;

