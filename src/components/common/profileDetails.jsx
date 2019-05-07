import React from 'react';
import {Link} from "react-router-dom";

const ProfileDetails = ({person, size}) => {
    return (
        <div>
            <img alt={person._id} src={person.img} className={size === 0? "person-image-cropper-sm mt-3" : "person-image-cropper mt-4"} />
            {size === 0? (<p className="text-small"> {person.author}</p>) : (<h3> {person.author}</h3>)}


            <div className="darker-background">
            <i className="fa fa-picture-o detail-border-top d-block pt-4 mb-4">
                <div className="ml-2 d-inline-block">{person.numberOfPosts} </div>
            </i>
            <i className="fa fa-star d-block mb-4">
                <div className="ml-2 d-inline-block">{person.numberOfLikes} </div>
            </i>
            <i className="fa fa-users d-block mb-4">
                <div className="ml-2 d-inline-block">{person.numberOfFriends} </div>
            </i>
            <Link
                className="fa fa-camera-retro link-style detail-border-bottom d-block mb-4 pb-4"
                to={`/albums/${person.author}`}>
                <div className="ml-2 d-inline-block">{person.numberOfAlbums} </div>
            </Link>
            </div>
        </div>
    );
};

export default ProfileDetails;