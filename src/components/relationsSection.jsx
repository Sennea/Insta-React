import React, {Component} from 'react';
import {Modal} from "react-bootstrap";
import ScrollBar from "react-perfect-scrollbar";
import Avatar from '@material-ui/core/Avatar';

class RelationsSection extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    render() {
        const  {relations, size} = this.props;
        return (

            <ScrollBar className="side-scroll-parent">
                {size !== 0 ?
                    <div className="col-12 row relation-top m-0 clickable p-0 text-dark">
                        <i className="fa fa-plus fa-2x mt-2 ml-2 d-inline-block"/>
                        <span className="d-inline-block text-center ml-2 mt-2">Dodaj do relacji</span>
                    </div>
                    :
                    <figure className="relation-left pl-2 clickable  float-left">
                        <i className="fa fa-plus fa-2x mt-2 ml-3 d-inline-block"/>
                        <figcaption>
                            <div className="d-inline-block ml-2 mt-2 d-block  justify-content-center">Dodaj</div>
                        </figcaption>
                    </figure>
                }
                {
                    relations.map((relation, index) => {
                            let className = "";
                            if (size === 0) {
                                if (index === 0)
                                    className = "side-scroll mr-5 ml-2";
                                else if (index === relations.length - 1)
                                    className = "side-scroll mr-2";
                                else
                                    className = "side-scroll mr-5";
                            } else
                                className = "float-none";


                        return <div
                            key={relation._id}
                            className={className}>
                            {size === 0 ?
                                <div onClick={this.handleShow}
                                     className="clickable">
                                    <figure>
                                        <Avatar src={relation.img} className="big-avatar-sm ml-3 mt-2"/>
                                        <figcaption className="link-style">
                                            <div className="text-center">
                                                <div className="ml-2 mt-2"> {relation.author} </div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div> :
                                <div onClick={this.handleShow}
                                     className="link-style row ml-2 mr-0 mt-3 clickable">
                                    <Avatar src={relation.img} className="big-avatar"/>
                                    <div>
                                        <div className="ml-2 mt-2"> {relation.author} </div>
                                    </div>
                                </div>
                            }

                            <Modal show={this.state.show} onHide={this.handleClose} className="my-modal">
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
                        </div>;
                        }
                    )
                }

            </ScrollBar>
        );
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

}

export default RelationsSection;

