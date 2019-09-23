import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

class Register extends React.Component {
  state = {
    credentials: {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      email: ""
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

  register = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/register", this.state.credentials)
      .then(res => {
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
        <form onSubmit={this.register}>
          <TheInput
            type="text"
            name="firstname"
            value={this.state.credentials.firstname}
            placeholder=" First Name"
            onChange={this.handleChange}
          />
          <TheInput
            type="text"
            name="lastname"
            value={this.state.credentials.lastname}
            placeholder=" Last Name"
            onChange={this.handleChange}
          />
          <TheInput
            type="text"
            name="username"
            value={this.state.credentials.username}
            placeholder=" Username"
            onChange={this.handleChange}
          />
          <TheInput
            type="password"
            name="password"
            value={this.state.credentials.password}
            placeholder=" Password"
            onChange={this.handleChange}
          />
          <TheInput
            type="email"
            name="email"
            value={this.state.credentials.email}
            placeholder=" Email"
            onChange={this.handleChange}
          />
          <TheBtn>Register</TheBtn>
        </form>
      </div>
    );
  }
}

export default Register;

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
