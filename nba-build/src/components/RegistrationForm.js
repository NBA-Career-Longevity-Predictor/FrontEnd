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
margin-top: 3rem;
`;

const FormFields = styled.div`

// padding: 20px;
border-radius: 0 0 10px 10px;
height: 34rem;
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
height: 8%;
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
// margin-bottom: 0rem;
`;

const FormContainer = styled.div`
height: 82.5vh;
`;


const RegistrationForm = ({ values, errors, touched, status }) => {

    const [ registration, setRegistration ] = useState([]);
    useEffect(() => {
        if(status){
            setRegistration([...registration, status]);
        }
    }, [status]);

    return(
        
        <div className="formik-form">
            <FormContainer>
            <FormHeader>Register</FormHeader>

            <Form>
                <FormFields>
                <Field 
                value={values.Name || ""}
                type="text" 
                name="FirstName" 
                // onChange={handleChange}
                placeholder="First Name" 
                />
                {touched.FirstName && errors.FirstName && (
                <p className="error">{errors.FirstName}</p>)}

                <Field type="text" name="LastName" placeholder="Last Name" />
                {touched.LastName && errors.LastName && (
                <p className="error">{errors.LastName}</p>)}

                <Field type="text" name="Email" placeholder="Email" />
                {touched.Email && errors.Email && (
                <p className="error">{errors.Email}</p>)}

                <Field type="password" name="Password" placeholder="Password" />
                {touched.Password && errors.Password && (
                <p className="error">{errors.Password}</p>)}

                <Field type="text" name="ConfirmPassword" placeholder="Confirm Password" />
                {touched.ConfirmPassword && errors.ConfirmPassword && (
                <p className="error">{errors.ConfirmPassword}</p>)}

                <FormButton>Log in</FormButton>
                </FormFields>
                
            </Form>

            <Bottom class="bottom-form">
                <p>Already have an account? <Link to="/LoginForm/" className="home-button">Login</Link></p>
                <p><a href="#" >Recover Password</a></p>
            </Bottom>

 
            </FormContainer>
            
            {registration.map(registrations => (
                <ul key={registrations.id}>
                    <li>FirstName: {registrations.FirstName}</li>
                    <li>LastName: {registrations.LastName}</li>
                    <li>Email: {registrations.Email}</li>
                    <li>Password: {registrations.Password}</li>
                    <li>ConfirmPassword: {registrations.ConfirmPassword}</li>

                </ul>
            ))}
        </div>
    )
}


const FormikRegistrationForm = withFormik({
    mapPropsToValues({ FirstName, LastName, Email, Password, ConfirmPassword}){
        return{
            FirstName: FirstName || "",
            LastName: LastName || "",
            Email: Email || "",
            Password: Password || "",
            ConfirmPassword: ConfirmPassword || ""
        };
    },
    validationSchema: Yup.object().shape({
        FirstName: Yup.string().required(),
        LastName: Yup.string().required(),
        Email: Yup.string().required(),
        Password: Yup.string().required(),
        ConfirmPassword: Yup.string().required(),
    }),
    handleSubmit(values, {setStatus}){
        axios.post("https://reqres.in/api/users/", values)
        .then(response => {
            setStatus(response.data);
            console.log("POST Res", response.data)
        })
        .catch(error => console.log("POST Err", error.response));
    }
})(RegistrationForm);

console.log("HOC", FormikRegistrationForm);

export default FormikRegistrationForm;