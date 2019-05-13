import React from 'react';
import {Modal} from "react-bootstrap";
import Avatar from "../relationsSection";

const RelationModal = ({relation,show, handleClose}) => {
    return (
        <Modal show={show} onHide={handleClose} className="my-modal">
            <Modal.Header closeButton>
                <Modal.Title>
                    <div className="row ml-2 mr-0 mt-3">
                        <Avatar src={relation.img} className="big-avatar"/>
                        <div>
                            <div className="ml-2 mt-2"> {relation.author} </div>
                        </div>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img
                    src={relation.img}
                    alt={relation.img}
                    className="relation-show"
                />
            </Modal.Body>
            <Modal.Footer>
                <i className="fa fa-eye"/>
                <span>55</span>
            </Modal.Footer>
        </Modal>
    );
};

export default RelationModal;