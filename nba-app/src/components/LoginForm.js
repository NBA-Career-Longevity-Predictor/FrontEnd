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
    axiosLoginAuth()
      .post(
        "/login",
        `grant_type=password&username=${this.state.credentials.username}&password=${this.state.credentials.password}`,
        this.state.credentials
      )
      .then(res => {
        console.log("hello");
        console.log(res.data);
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/home");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Form>
          <form>
            <FormGroup>
            <Title>Log In</Title>
              <Input
                type="text"
                name="username"
                value={this.state.credentials.username}
                placeholder=" insert username"
                onChange={this.handleChange}
              />
              <Input
                type="password"
                name="password"
                value={this.state.credentials.password}
                placeholder=" insert password"
                onChange={this.handleChange}
              />
            </FormGroup>
          <Button onClick={this.login}>Log in</Button>
          </form>
        </Form>
      </div>
    );
  }
}

export default Login;

const Form = styled.div`
  width: 600px;
  min-height: 88vh;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  width: 410px;
  text-align: center;
  font-size: 3.5rem;
`;

const FormGroup = styled.div`
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 25rem;
  height: 2.75rem;
  font-size: 1.2rem;
  margin: 15px 0;
  border-radius: 7px;
  border: 2px solid black;
  text-align: center;
  transition: 0.2s ease-in;
  &:hover {
    color: white;
    background: black;
  }
`;

const Button = styled.button`
  width: 50%;
  height: 40px;
  border: 2px solid black;
  border-radius: 20px;
  font-size: 1.2rem;
  margin: auto;
  max-height: 100%;
  max-width: 100%;
  transition: 0.2 s ease-in;
  margin-top: 15px;
  background: white;

  &:hover {
    color: white;
    background: black;
  }
`;
