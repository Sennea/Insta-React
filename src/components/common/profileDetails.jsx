import React from 'react';
import {Link} from "react-router-dom";

const ProfileDetails = ({person, size}) => {
    return (
        <div>
            <img alt={person._id} src="https://images.wallpaperscraft.com/image/tiger_face_stone_eyes_predator_92029_1280x720.jpg" className={size === 0? "person-image-cropper-sm mt-3" : "person-image-cropper mt-4"} />
            {size === 0? (<p className="text-small"> {person.author}</p>) : (<h3> {person.author}</h3>)}


            <div className="darker-background">
            <i className="fa fa-picture-o detail-border-top d-block pt-4 mb-4">
                <div className="ml-2 d-inline-block">{person.photos.length} </div>
            </i>
            <Link
                className="fa fa-camera-retro link-style detail-border-bottom d-block mb-4 pb-4"
                to={`/albums/${person.author}`}>
                <div className="ml-2 d-inline-block">{person.albums.length} </div>
            </Link>
            </div>
        </div>
    );
};

export default ProfileDetails;