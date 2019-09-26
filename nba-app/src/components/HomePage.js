import React from "react";

// import { Link } from "react-router-dom";
// import HomeImage from "../images/HomeImage.jpg";
import SearchForm from "../components/SearchForm";
import Player from "./Player";

import styled from "styled-components";

const Container = styled.div`
  background-image: url("HomeImage.jpg");
  background-size: contain;
  background-repeat: no-repeat;
`;

function HomePage() {
  return (
    <Container>
      {/* <div>
        <SearchForm />
      </div>
      {player.length > 0 ? (
        player.map(e => <Player key={e.id} player={e} />)
      ) : (
        <p>Waiting for search</p>
      )} */}
    </Container>
  );
}

export default HomePage;
