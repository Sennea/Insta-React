import React from 'react';
import {Modal} from "react-bootstrap";
import PhotoOwner from "./photoOwner";

const PostModal = ({handleClose, show, post}) => {
    return (
        <Modal show={show} onHide={() => handleClose()} size={'lg'}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <PhotoOwner
                        post={post}/>
                </Modal.Title>

            </Modal.Header>
            <Modal.Body>
                <img src={post.img}
                     alt={post.author}
                     className="rounded clickable embed-responsive embed-responsive-16by9 post-size mr-5"
                />
            </Modal.Body>
        </Modal>
    );
};

export default PostModal;