import React from 'react';
import {Link} from "react-router-dom";

const ProfileDetails = ({person, size}) => {
    return (
        <div>
            <img src={person.img} className={size === 0? "person-image-cropper-sm mt-3" : "person-image-cropper mt-4"} />
            {size === 0? (<p className="text-small"> {person.author}</p>) : (<h3> {person.author}</h3>)}


            <div className="darker-background">
            <i className="fa fa-picture-o detail-border-top d-block pt-4 mb-4">
                <a className="ml-2 ">{person.numberOfPosts} </a>
            </i>
            <i className="fa fa-star d-block mb-4">
                <a className="ml-2 ">{person.numberOfLikes} </a>
            </i>
            <i className="fa fa-users d-block mb-4">
                <a className="ml-2 ">{person.numberOfFriends} </a>
            </i>
            <Link
                className="fa fa-camera-retro link-style detail-border-bottom d-block mb-4 pb-4"
                to={`/albums/${person.author}`}>
                <a className="ml-2">{person.numberOfAlbums} </a>
            </Link>
            </div>
        </div>
    );
};

export default ProfileDetails;