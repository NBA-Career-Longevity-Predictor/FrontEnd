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
    axios
      .post(
        "https://nba-career-longevity.herokuapp.com/createnewuser",
        this.state.credentials
      )
      .then(res => {
        console.log("register")
        // localStorage.setItem("token", res.data.payload);
        this.props.history.push("/login");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Form>
          <form>
            <FormGroup>
              <Title>Register</Title>
              <Input
                type="text"
                name="username"
                value={this.state.credentials.username}
                placeholder=" Username"
                onChange={this.handleChange}
              />
              <Input
                type="password"
                name="password"
                value={this.state.credentials.password}
                placeholder=" Password"
                onChange={this.handleChange}
              />
              <Input
                type="email"
                name="useremail"
                value={this.state.credentials.useremail}
                placeholder=" Email"
                onChange={this.handleChange}
              />
              <Label check>
                <Checkbox type="checkbox" />
                Subscribe for more updates!
              </Label>
              <Button onClick={this.register}>Register</Button>
            </FormGroup>
          </form>
        </Form>
      </div>
    );
  }
}

export default Register;

const Form = styled.div`
  width: 600px;
  height: 88vh;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  width: 200px;
  text-align: center;
  font-size: 3.5rem;
  color: white;
  background-color: black;
  opacity: 0.7;
`;

const FormGroup = styled.div`
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Label = styled.p`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 1.2rem;
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

const Checkbox = styled.input``;

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
