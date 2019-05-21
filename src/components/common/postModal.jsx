import React from 'react';
import {Modal} from "react-bootstrap";
import PhotoOwner from "./photoOwner";
import config from '../../config.json'


const PostModal = ({handleClose, show, photo}) => {
    return (
        <Modal show={show} onHide={() => handleClose()} size={'lg'}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <PhotoOwner
                        photo={photo}/>
                </Modal.Title>

            </Modal.Header>
            <Modal.Body>
                <img src={`${config.apiEndpoint}/photos/${photo.id}`}
                     alt={`${config.apiEndpoint}/photos/${photo.id}`}
                     className="rounded clickable embed-responsive embed-responsive-16by9 post-size mr-5"
                />
            </Modal.Body>
        </Modal>
    );
};

export default PostModal;