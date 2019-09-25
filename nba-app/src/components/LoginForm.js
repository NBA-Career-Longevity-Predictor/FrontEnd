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
        // console.log("banana");
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div>
          <FormHeader>Log In</FormHeader>
          <form onSubmit={this.login}>
            <FormFields>
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
            </FormFields>
          </form>
          <FormButton>Log in</FormButton>
        </div>
      </div>
    );
  }
}

export default Login;

const TheInput = styled.input`
  text-decoration: inherit;
  text-align: center;
  // padding: 10px;
  border-radius: 7px;
  padding-left: 11px;
  font-size: 1.5rem;
  margin: 20px;
  height: 2.5rem;
  border: 2px solid black;
  transition: 0.2s ease-in;
  &:hover {
    color: white;
    background: black;
    // transition: 0.2s ease-in;
  }
`;

const FormButton = styled.button`
  width: 50%;
  height: 18%;
  border: 2px solid black;
  border-radius: 20px;
  font-size: 1.2rem;
  margin: auto;
  max-height: 100%;
  max-width: 100%;
  transition: 0.2s ease-in;
  margin-top: 15px;
  &:hover {
    color: white;
    background: black;
  }
`;

const FormFields = styled.div`
  // background-color: blue;
  // padding: 20px;
  border-radius: 0 0 10px 10px;
  height: 15rem;
  // border: 4px solid black;
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
`;
// input{
//     ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
//         color: black;
//       }
//     text-decoration: inherit;
//     text-align: center;
//     // padding: 10px
//     border-radius: 7px;
//     padding-left: 11px
//     font-size: 1.5rem;
//     margin: 20px
//     height: 2.5rem;
//     border: 2px solid black;
//     transition: 0.2s ease-in;

//     &:hover{
//         color: white;
//         background: black;
//         transition: 0.2s ease-in;
//         ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
//             color: white;
//           }
//     }
// }
// .error{
//     margin: 0;
//     padding: 0;
//     font-size: 15px;
// }
// `;

const FormHeader = styled.h1`
  // padding: 20px;
  border-radius: 10px 10px 0 0;
  font-size: 3.5rem;
  width: 400px;
  margin: auto;
  text-align: center;
  // border: 4px solid black;
  color: black;
  margin-top: 10rem;
`;

// const FormContainer = styled.div`
//   height: 100%;
// `;