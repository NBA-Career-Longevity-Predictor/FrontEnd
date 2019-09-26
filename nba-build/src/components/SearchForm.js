import React, { useState, useEffect } from "react";

import {  withFormik, Form, Field } from "formik";

import * as Yup from "yup";

import axios from "axios";

import styled from "styled-components";

const FormFields = styled.div`
opacity: 0.85;
padding-top: 7rem;
border-radius: 0 0 10px 10px;
width: 400px;
display: flex;
flex-direction: column;
margin: auto;
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
        color: black;
        background: #F3492D;
        transition: 0.2s ease-in;
        ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            color: white;
          }
    }
}
.error{
    border-radius: 8px;
    width: 45%;
    opacity: .7;
    border: 1px solid white;
    background: black;
    color: white;
    margin: auto;
    padding: 5px;
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
&:hover{
    color: black;
    background: #B06CE1;
    // background-image: linear-gradient(#B06CE1, #F3492D);
}
`;


const FormContainer = styled.div`
height: 50vh;
`;


const SearchForm = ({ values, errors, touched, status }) => {

    const [ search, setSearch ] = useState([]);
    useEffect(() => {
        if(status){
            setSearch([...search, status]);
        }
    }, [status]);

    return(
        <div className="formik-form">
            <FormContainer>

            <Form>
                <FormFields>
                <Field type="search" name="Search" placeholder="Search Players" />
                {touched.Search && errors.Search && (
                <p className="error">{errors.Search}</p>)}

                <FormButton>Enter</FormButton>
                </FormFields>
            </Form>

            </FormContainer>
            
            {search.map(searches => (
                <ul key={searches.id}>
                    <li>Search: {searches.Search}</li>
                </ul>
            ))}
        </div>
    )
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ Search }){
        return{
            Search: Search || ""
  
        };
    },
    validationSchema: Yup.object().shape({
        Search: Yup.string().required(),
    }),
    handleSubmit(values, {setStatus}){
        axios.post("https://reqres.in/api/users/", values)
        .then(response => {
            setStatus(response.data);
            console.log("POST Res", response.data)
        })
        .catch(error => console.log("POST Err", error.response));
    }
})(SearchForm);

console.log("HOC", FormikLoginForm);

export default FormikLoginForm;