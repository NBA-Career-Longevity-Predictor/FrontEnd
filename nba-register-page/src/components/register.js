import React from 'react';
import styled from 'styled-components';

const Form = styled.div `
    width: 600px;
    height: 88vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.h1 `
    width: 410px;
    text-align: center;
    font-size: 3.5rem;
`
const FormGroup = styled.div `
    width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Label = styled.p `
    width: 100%;
    margin: 0 auto;
    text-align: center;
    font-size: 1.2rem;
`
const Input = styled.input `
    width: 400px;
    height: 2.5rem;
    font-size: 1.2rem;
    margin: 15px 0;
    border-radius: 7px;
    border: 2px solid black;
    text-align: center;
    transition: 0.2s ease-in;
    &:hover{
        color: white;
        background: black;
    }
`
const Checkbox = styled.input `

`
const Button = styled.button `
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

    &:hover{
      color: white;
      background: black;
    }
`
export default class Register extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Title>Register</Title>
          <Input type="input" name="name" id="name" placeholder="Name" required/>
          <Input type="input" name="lastName" id="lastName" placeholder="Last Name" required/>
          <Input type="email" name="email" id="email" placeholder="Email" required/>
          <Input type="password" name="password" id="password" placeholder="Password" required/>
          <Input type="password" name="password" id="confirm" placeholder="Confirm password" required/>
          <Label check>
            <Checkbox type="checkbox" />
            Subscribe for more updates!
          </Label>
          <Button>Register now!</Button>  
        </FormGroup>
      </Form>
    );
  }
}