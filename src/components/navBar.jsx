import {NavLink} from "react-router-dom";
import React from 'react';
import Photos from "./photos";
import SearchBoxPerson from "./searchBoxPerson";
import config from "../config";
class NavBar extends Photos {
    render() {
        const {user} = this.props;


        return (
            <div className="sticky-top">
                <div className="navbar navbar-expand-sm navbar-light navbar-bg sticky-top">
                    <NavLink className="navbar-brand ml-4" to="/photos">
                        <i className="fa fa-camera-retro"/>
                    </NavLink>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                            {!user &&
                            <React.Fragment>
                                <NavLink className="nav-link nav-item" to="/login">
                                    Login
                                </NavLink>
                                <NavLink className="nav-link nav-item" to="/register">
                                    Register
                                </NavLink>
                            </React.Fragment>}

                            {user &&
                            <React.Fragment>
                                <NavLink className="nav-link nav-item" to={`${config.apiEndpoint}/users/${user.id}`}>
                                    {user.user.name}
                                </NavLink>
                                <NavLink className="nav-link nav-item" to="/logout">
                                    Logout
                                </NavLink>
                            </React.Fragment>}


                                <SearchBoxPerson
                                />

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;