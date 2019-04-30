import React, {Component} from 'react';
import Joi from "joi-browser";
import Form from "./common/form";
import {NavLink} from "react-router-dom";


class RegisterForm extends Form {
    state = {
        data: {
            username: '',
            password: '',
            name: ''
        },
        errors: {}
    };

    schema = {
        username: Joi.string().required().email().label('Username'),
        password: Joi.string().required().min(5).label('Password'),
        name: Joi.string().required().label('Name')
    };

    doSubmit = () => {
        //call server
        console.log("Submitted");
    };


    render() {
        return (
            <div className="offset-lg-3 col-lg-6 mt-5 offset-sm-1 col-sm-10">
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', "password")}
                    {this.renderInput('name', 'Name')}
                    {this.renderButton('Register','btn btn-primary btn-block ')}
                </form>
                <NavLink to="/login" className="forget">Already have an Account? Login now!</NavLink>
            </div>
        );
    }
}

export default RegisterForm;