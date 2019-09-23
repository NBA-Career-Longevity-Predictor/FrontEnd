import React from 'react';
import styled from 'styled-components';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Form = styled.div `
    width: 600px;
    margin: 0 auto;
    background-color: silver;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.h1 `
`
const FormGroup = styled.div `
    width: 500px;
    margin: 0 auto;
`
const Label = styled.p `
    width: auto;
    margin: 10px 0;
    font-size: 1.4rem;
`
const Input = styled.input `
    width: 80%;
    height: 25px;
    font-size: 1.2rem;
`
const Checkbox = styled.input `

`
const Button = styled.button `
    margin-bottom: 25px;
    width: 100px;
    height: 40px;
    border-radius: 5px;
`
export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <Title>Register</Title>
        <FormGroup>
          <Label for="exampleEmail">Name: </Label>
          <Input type="input" name="name" id="name" placeholder="Zion" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Last Name: </Label>
          <Input type="input" name="lastName" id="lastName" placeholder="Williamson" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email: </Label>
          <Input type="email" name="email" id="email" placeholder="nba@longevity.com" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password: </Label>
          <Input type="password" name="password" id="password" placeholder="Enter a password with at least 8 characters" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Confirm Password: </Label>
          <Input type="password" name="password" id="confirm" placeholder="Confirm password" />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Checkbox type="checkbox" />
            Subscribe for more updates!
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}