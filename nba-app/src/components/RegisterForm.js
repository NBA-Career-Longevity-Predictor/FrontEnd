import React from "react";
import styled from "styled-components";
import axios from "axios";

class Register extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
      useremail: ""
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
    // axiosWithAuth("https://nba-career-longevity.herokuapp.com")
      axios.post("https://nba-career-longevity.herokuapp.com/createnewuser", this.state.credentials)
      .then(res => {
        // localStorage.setItem("token", res.data.payload);
        this.props.history.push("/login");
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
          <TheInput2
            type="email"
            name="useremail"
            value={this.state.credentials.useremail}
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
  align-items: center;
  border: 2px solid black;
  margin-right: 5px;
  padding-left: 5px;
`;

const TheInput2 = styled.input`
  align-items: center;
  border: 2px solid black;
  margin-right: 5px;
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
