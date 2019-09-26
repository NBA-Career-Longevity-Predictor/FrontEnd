import React from "react";
import axios from "axios";
import styled from "styled-components";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      search: "",
      data: []
    };
  }
  componentDidMount() {
    axios
      .get("https://nba-career-longevity.herokuapp.com/player/{name}")
      .then(res => {
        this.setState({ data: this.getPlayerData });
      })
      .catch(err => console.log(err));
  }

  handleInputChange = e => {
    this.setState({ name: e.target.value });
  };

  onSearch = e => {
    e.preventDefault();
    this.setState({ search: this.name });
  };

  getPlayerData = e => {
      e.preventDefault();
      this.setState({ data: this.getPlayerData })
  }

  render() {
    return (
      <section>
        <form onSubmit={this.onSearch}>
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
      </section>
    );
  }
}

export default Search;

const Input = styled.input`
  margin-top: 30px;
`;