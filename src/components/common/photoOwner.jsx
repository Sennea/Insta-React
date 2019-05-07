import React from 'react';
import {Link} from "react-router-dom";

const PhotoOwner = ({post}) => {
    return (
        <Link to={`/account/${post.author}`} className="col person-photo pl-4 pt-3">
            <i className="fa fa-user-circle-o fa-2x mt-2 mb-2"/>
            <div className="link-style d-inline-block ml-2" > {post.author} </div>
        </Link>
    );
};

export default PhotoOwner;