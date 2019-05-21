import React from 'react';
import Joi from "joi-browser";
import Form from "./common/form";
import {NavLink} from "react-router-dom";
import {addUser} from "../services/personServicce";


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
        password: Joi.string().required().min(6).label('Password'),
        name: Joi.string().required().label('Name')
    };

    doSubmit = async () => {
        try{
            const res = await addUser(this.state.data);
            localStorage.setItem('user', res.data);
            window.location='/';
        }catch (e) {
            if(e.response && e.response.status === 400){
                const errors = {...this.state.errors};
                errors.username = e.response.data;
                this.setState({errors})
            }
        }
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
                <NavLink to="/login" className="forget text-center d-block">Already have an Account? Login now!</NavLink>
            </div>
        );
    }
}

export default RegisterForm;