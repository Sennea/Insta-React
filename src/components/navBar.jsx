import {NavLink} from "react-router-dom";

import React, {Component} from 'react';
import Photos from "./photos";
import SearchBoxPerson from "./searchBoxPerson";

class NavBar extends Photos {
    render() {
        const {searchQuery} = this.state;
        const {filteredPersons: filtered} = this.getSearchedData();

        return (
            <div className="sticky-top">
                <nav className="navbar navbar-expand-sm navbar-light navbar-bg sticky-top">
                    <NavLink className="navbar-brand ml-4" to="/photos">
                        <i className="fa fa-camera-retro"/>
                    </NavLink>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item col-2">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item col-2">
                                <NavLink className="nav-link" to="/register">Register</NavLink>
                            </li>
                            <li className="nav-item col-10">
                                <SearchBoxPerson
                                    value={searchQuery}
                                    onChange={this.handleSearch}
                                    filtered={filtered}
                                    handleSelect={this.handleSelect}
                                />
                            </li>
                            <li className="nav-item col-2">
                                <i
                                    className="fa fa-plus-circle fa-2x"
                                    aria-hidden="true"
                                    onClick={this.handleAddPost}
                                />
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;