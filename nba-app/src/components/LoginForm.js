import React from "react";
import { axiosLoginAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    // console.log("nick")
    // axiosWithAuth("https://nba-career-longevity.herokuapp.com/users/username")
    axiosLoginAuth()
      .post("/login",
        `grant_type=password&username=${this.state.credentials.username}&password=${this.state.credentials.password}`,
        this.state.credentials
      )
      .then(res => {
        // console.log("banana");
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <br />
        <br />
        <form onSubmit={this.login}>
          <TheInput
            type="text"
            name="username"
            value={this.state.credentials.username}
            placeholder=" insert username"
            onChange={this.handleChange}
          />
          <TheInput
            type="password"
            name="password"
            value={this.state.credentials.password}
            placeholder=" insert password"
            onChange={this.handleChange}
          />
          <TheBtn>Log in</TheBtn>
        </form>
      </div>
    );
  }
}

export default Login;

const TheInput = styled.input`
  align-items: center;
  border: 2px solid black;
  margin-right: 5px;
  padding-left: 5px;
`;

const TheBtn = styled.button`
  align-items: center;
  border: 3px solid black;
  border-radius: 4px;
  font-size: 1.5rem;
  margin-left: 15px;
  height: 3rem;
  width: 7rem;
`;
