import React from "react";
import axios from "axios";
import styled from "styled-components";
import Player from "./Player";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      search: "",
      data: []
    };
  }

  handleInputChange = e => {
    this.setState({ name: e.target.value });
  };

  getPlayerData = e => {
    e.preventDefault();
    axios
      .get(
        `https://nba-career-longevity.herokuapp.com/player/${this.state.name}`
      )
      .then(res => {
        console.log(res.data);
        this.setState({ data: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <section>
        <form>
          <div>
            <Input
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.name}
              name="name"
            />
            <button type="submit">Search</button>
            <button onClick={this.getPlayerData}>Player Data</button>
          </div>
        </form>
        <Player props={this.state.data}/>
      </section>
    );
  }
}

export default Search;

const Input = styled.input`
  margin-top: 30px;
`;
