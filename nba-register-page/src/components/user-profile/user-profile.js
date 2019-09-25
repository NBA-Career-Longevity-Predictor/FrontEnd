
import React from 'react';
import styled from 'styled-components';
import Placeholder from './images/placeholder.jpg'

const Card = styled.div `
    width: 1000px;
    height: 88vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
`
const CardImg = styled.img `
    width: 40%;
    height: 70%;
    margin: 0 20px;
    border-radius: 10px;
`

const CardBody = styled.div `
    width: 40%;
    height: 70%;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    
`
const CardTitle = styled.h1 `
    text-align: center;
    padding-bottom: 5px;
    border-bottom: 1px solid black;    

`
const CardSubtitle = styled.p `
    font-size: 1.4rem;

`
const CardLink = styled.a `
    color: black;
`

const CardText = styled.p `
    font-size: 1.2rem;
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
const Password = styled.p `
    display: none;
`

const UserProfile = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={Placeholder} alt="Card image cap" />
        <CardBody>
          <CardTitle>Stephen Curry{props.name}</CardTitle> 
          <CardSubtitle>Username: {props.username} </CardSubtitle>
          <CardSubtitle>Favorite Player: {props.favoritePlayer}</CardSubtitle>
          <CardSubtitle>Favorite Team: {props.favoriteTeam}</CardSubtitle>
          <CardSubtitle>E-mail: <CardLink href="">chef.curry@inthehouse.com{props.email}</CardLink></CardSubtitle>
          <CardSubtitle>Contact: <CardLink href="">+123 I-SHOOT-3S{props.contact}</CardLink></CardSubtitle>
          <CardText>Bio: Chef Curry shoots 3's and wins games{props.bio}</CardText>
          <Password>Password: {props.password}</Password>
          <Button type="submit">Update info</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserProfile;