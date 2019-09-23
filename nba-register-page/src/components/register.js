import React from 'react';
import styled from 'styled-components';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Form = styled.div `
    width: 800px;
    margin: 0 auto;
`
const FormGroup = styled.div `
    width: 600px;
`
const Label = styled.p `
    width: 25%;
`
const Input = styled.input `
    width: 80%;
    height: 25px;
    font-size: 1.4rem;
`
const Button = styled.button `
`
export default class Example extends React.Component {
  render() {
    return (
      <Form>
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
          <Input type="password" name="password" id="password" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Confirm Password: </Label>
          <Input type="password" name="password" id="confirm" placeholder="" />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />
            Subscribe for more updates!
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}