import React, {Component} from 'react';
import {Route,Switch,Redirect, } from "react-router-dom";
import {ToastContainer} from "react-toastify";
import NavBar from "./components/navBar";
import NotFound from "./components/notFound";
import Photos from "./components/photos";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import AccountSection from "./components/accountSection";
import AlbumsSection from "./components/albumsSection";
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import Logout from "./components/logout";

class App extends Component {
    state= {

    };

    componentDidMount() {
        try{
            const user = JSON.parse(localStorage.getItem('user'));
           // console.log(user.user.name);
            this.setState({user})
        }catch (e) {
        }
    }

    render() {
        return (
            <React.Fragment>
                <ToastContainer/>
                <NavBar
                    user={this.state.user}
                />
                <Switch>
                    <Route
                        path="/photos"
                        render={props => <Photos {...props} user={this.state.user}/>}/>
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/logout" component={Logout}/>
                    <Route path="/register" component={RegisterForm}/>
                    <Route path="/albums/:author" component={AlbumsSection}/>
                    <Route path="/account/:author" component={AccountSection}/>
                    <Route path="/not-found" component={NotFound}/>
                    <Redirect from="/account/not-found" exact to="/not-found"/>
                    <Redirect from="/" exact to="/photos"/>
                    <Redirect to="/not-found"/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
