import React from 'react';
import {Link} from "react-router-dom";
import config from '../../config.json'


const PhotoOwner = ({photo}) => {
    return (
        <Link to={`/account/${photo.user}`} className="col person-photo pl-4 pt-3">
            <i className="fa fa-user-circle-o fa-2x mt-2 mb-2"/>
            <div className="link-style d-inline-block ml-2" > {photo.userName} </div>
        </Link>
    );
};

export default PhotoOwner;