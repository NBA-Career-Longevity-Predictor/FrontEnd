import React, { useState, useEffect } from "react";

import {  withFormik, Form, Field } from "formik";

import * as Yup from "yup";

import axios from "axios";

import styled from "styled-components";

const FormHeader = styled.h1`
// padding: 20px;
border-radius: 10px 10px 0 0;
background-image: url(/paradise.jpg); 
font-size: 3.5rem;
width: 400px;
margin: auto;
text-align: center;
// border: 4px solid black;
color: black;
margin-top: 7.2rem;
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
    
    // padding: 10px
    border-radius: 7px;
    padding-left: 11px
    font-size: 1.5rem;
    margin: 20px
    height: 2.5rem;
    border: 2px solid black;
};
`;

const FormButton = styled.button`
width: 50%;
padding: 0;
border: 2px solid black;
border-radius: 20px;
font-size: 1.7rem;
margin: auto;
max-height: 100%;
max-width: 100%;
`;

// const DropDown = styled.div`
// width: 100%;
// height: 5.5rem;
// .specialty-dropdown{
//     height: 6rem;
//     max-width: 100%;
//     width: 95.5%
//     font-size: 2rem;
//     margin: 10px
//     height: 3rem;
//     border: 2px solid black;
// }
// `;

// const TermsText = styled.div`
// padding-left: 11px
// font-size: 2rem;
// margin: 10px
// height: 3rem;
// border: 2px solid black;
// background: #F8F8F8;
// border-radius: 7px;
// `;

const UserForm = ({ values, errors, touched, status }) => {

    const [ user, setUser ] = useState([]);
    useEffect(() => {
        if(status){
            setUser([...user, status]);
        }
    }, [status]);

    return(
        <div className="formik-form">
            <FormHeader>Log in</FormHeader>

            <Form>
                <FormFields>
                <Field type="text" name="Name" placeholder="User Name" />
                {touched.Name && errors.Name && (
                <p className="error">{errors.Name}</p>)}
            
                {/* <Field type="text" name="Email" placeholder="Email" />
                {touched.Email && errors.Email && (
                <p className="error">{errors.Email}</p>)} */}

                <Field type="text" name="Password" placeholder="Password" />
                {touched.Password && errors.Password && (
                <p className="error">{errors.Password}</p>)}

                {/* <DropDown>
                <Field component="select" className="specialty-dropdown" name="diet">
                <option>Specialty</option>
                <option value="JavaScript">JavaScript</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                </Field>
                </DropDown> */}
{/* 
                <TermsText className="terms-of-service">Terms of Service
                </TermsText>

                <label className="checkbox-container">
                <Field type="checkbox" name="Terms" checked={values.Terms} />
                {touched.Terms && errors.Terms && (
                <p className="error">{errors.Terms}</p>)}
                   <span className="checkmark" />
                </label> */}
                       
                <FormButton>Submit</FormButton>
                </FormFields>
            </Form>

            <div>
                <p>Don't have an account? <a href="#" >Register</a></p>
                <p><a href="#" >Recover Password</a></p>
            </div>
            
            {user.map(users => (
                <ul key={users.id}>
                    <li>Name: {users.Name}</li>
                    <li>Email: {users.Email}</li>
                    <li>Password: {users.Password}</li>
                </ul>
            ))}
        </div>
    )
}


const FormikUserForm = withFormik({
    mapPropsToValues({ Name, Email, Password, Terms}){
        return{
            Name: Name || "",
            Email: Email || "",
            Password: Password || "",
            Terms: Terms || ""
        };
    },
    validationSchema: Yup.object().shape({
        Name: Yup.string().required(),
        Email: Yup.string().required(),
        Password: Yup.string().required(),
        Terms: Yup.string().required()
    }),
    handleSubmit(values, {setStatus}){
        axios.post("https://reqres.in/api/users/", values)
        .then(response => {
            setStatus(response.data);
            console.log("POST Res", response.data)
        })
        .catch(error => console.log("POST Err", error.response));
    }
})(UserForm);

console.log("HOC", FormikUserForm);

export default FormikUserForm;