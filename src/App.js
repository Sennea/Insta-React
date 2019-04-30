import React from 'react';
import './App.css';
import NavBar from "./components/navBar";
import {Route,Switch,Redirect} from "react-router-dom";
import NotFound from "./components/notFound";
import Photos from "./components/photos";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import AccountSection from "./components/accountSection";
import AlbumsSection from "./components/albumsSection";


function App() {
  return (
      <React.Fragment>
            <NavBar/>
                <Switch>
                    <Route path="/photos" component={Photos}/>
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/register" component={RegisterForm}/>
                    <Route path="/albums/:author" component={AlbumsSection}/>
                    <Route path="/account/:author" component={AccountSection}/>
                    <Route path="/not-found" component={NotFound}/>
                    <Redirect from="/" exact to="/photos"/>
                    <Redirect to="/not-found"/>
                </Switch>
      </React.Fragment>
  );
}

export default App;
