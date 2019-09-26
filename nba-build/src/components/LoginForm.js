import React, { useState, useEffect } from "react";

import {  withFormik, Form, Field } from "formik";

import * as Yup from "yup";

import axios from "axios";

import styled from "styled-components";

import { Link } from "react-router-dom";

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

const FormFields = styled.div`

// padding: 20px;
border-radius: 0 0 10px 10px;
height: 15rem;
// border: 4px solid black;
width: 400px;
display: flex;
flex-direction: column;
margin: 20px auto;
input{
    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: black;
      }
    text-decoration: inherit;
    text-align: center;
    // padding: 10px
    border-radius: 7px;
    padding-left: 11px
    font-size: 1.5rem;
    margin: 20px
    height: 2.5rem;
    border: 2px solid black;
    transition: 0.2s ease-in;
    
    &:hover{
        color: white;
        background: black;
        transition: 0.2s ease-in;
        ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            color: white;
          }
    }
}
.error{
    margin: 0;
    padding: 0;
    font-size: 15px;
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
&:hover{
    color: white;
    background: black;
}
`;

const Bottom = styled.div`
// margin-bottom: 5rem;
`;

const FormContainer = styled.div`
height: 70vh;
`;


const LoginForm = ({ values, errors, touched, status }) => {

    const [ login, setLogin ] = useState([]);
    useEffect(() => {
        if(status){
            setLogin([...login, status]);
        }
    }, [status]);

    return(
        <div className="formik-form">
            <FormContainer>
            <FormHeader>Log in</FormHeader>

            <Form>
                <FormFields>
                <Field type="text" name="Name" placeholder="User Name" />
                {touched.Name && errors.Name && (
                <p className="error">{errors.Name}</p>)}

                <Field type="text" name="Password" placeholder="Password" />
                {touched.Password && errors.Password && (
                <p className="error">{errors.Password}</p>)}

                <FormButton>Log in</FormButton>
                </FormFields>
            </Form>

            <Bottom class="bottom-form">
                <p>Don't have an account? <Link to="/RegistrationForm" className="register-button">Register</Link></p>
                <p><a href="#" >Recover Password</a></p>
            </Bottom>
            </FormContainer>
            
            {login.map(logins => (
                <ul key={logins.id}>
                    <li>Name: {logins.Name}</li>
                    <li>Password: {logins.Password}</li>
                </ul>
            ))}
        </div>
    )
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ Name, Password}){
        return{
            Name: Name || "",
            Password: Password || ""
        };
    },
    validationSchema: Yup.object().shape({
        Name: Yup.string().required(),
        Password: Yup.string().required(),
    }),
    handleSubmit(values, {setStatus}){
        axios.post("https://reqres.in/api/users/", values)
        .then(response => {
            setStatus(response.data);
            console.log("POST Res", response.data)
        })
        .catch(error => console.log("POST Err", error.response));
    }
})(LoginForm);

console.log("HOC", FormikLoginForm);

export default FormikLoginForm;