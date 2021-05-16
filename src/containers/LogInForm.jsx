import React, {useState, useField} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Header from './shared/Header'
import styled from 'styled-components'
import {useFormik,Formik, yupToFormErrors , Form} from 'formik'
import * as Yup from 'yup';


const LoginInForm =()=>{

    const validate=values=>{
        const errors={}

        if(!values.email){
            errors.email='Email is required'
        }else if(values.email.length<4){
            errors.email='Email must be at least 4 characters'
        }

        if(!values.password){
            errors.password='Password is required'
        }else if(values.password.length<8){
            errors.password='Password must be at least 8 characters'
        }

        return errors;
    }

    const formik= useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validate,
        onSubmit: values =>{
            alert(JSON.stringify(values,null,2))
        }
    })

    return(
        
        <div>
            <Header/>
            <div className="login">
            <h1>Login</h1>
            <form className="login_form" onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} id="email" name="email"/>
                {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div>:null}
                <label htmlFor="password">Password</label>
                <input type="password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} id="password" name="password"/>
                {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div>:null}
                <Link to={`/home`}>
                <button className="login-btn" type="submit" disabled={!(formik.isValid && formik.dirty)} ><strong>Login</strong></button>
                </Link>
            </form>
            </div>
        </div>
    )

};

export default LoginInForm;