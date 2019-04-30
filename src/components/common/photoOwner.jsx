import React from 'react';
import {Link} from "react-router-dom";

const PhotoOwner = ({post}) => {
    return (
        <div className="col person-photo mb-2 pl-4 pt-3">
            <i className="fa fa-user-circle-o fa-2x"/>
            <Link className="link-style text-left " to={`/account/${post.author}`}> {post.author} </Link>
        </div>
    );
};

export default PhotoOwner;