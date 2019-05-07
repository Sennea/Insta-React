import React from 'react';
import Joi from "joi-browser"
import Form from "./common/form";
import {NavLink} from "react-router-dom";


class LoginForm extends Form {

    state={
        data:{
            username:'',
            password:''
        },
        errors: {}
    };

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password"),
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
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderButton('Login!', 'btn btn-primary btn-block'  )}
                </form>
                <NavLink to="/register" className="btn btn-primary btn-block mt-2">Create Account</NavLink>
                <div className="forget text-center d-block">Forget password?</div>
            </div>
        );
    }
}

export default LoginForm;
