import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
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
    axiosWithAuth()
      .post("/login", this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/login");
      })
      .catch(err => console.log(err));
  };

  render() {
      console.log("running");
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
  border: 2px solid black;
  margin-right: 5px;
  align-items: center;
`;

const TheBtn = styled.button`
  align-items: center;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 1.5rem;
  margin-left: 15px;
  height: 3rem;
  width: 7rem;
`;
