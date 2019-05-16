import React, {Component} from 'react';
import {Modal} from "react-bootstrap";
import Avatar from '@material-ui/core/Avatar';


class RelationModal extends Component {

    constructor(props){
        super(props);
        this.tick = this.tick.bind(this);
        this.state = {
            seconds: props.seconds,
            percentSeconds: 100,
        }
    }

    componentDidMount(){
        this.timer = setInterval(this.tick, 100);
    }

    tick(){
        if (this.state.seconds > 0) {
            this.setState({percentSeconds: (this.state.seconds-0.5)*100/5});
            this.setState({seconds: this.state.seconds -0.1});
        } else {
            clearInterval(this.timer);
            this.props.handleClose();
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const {relation, handleClose, show} = this.props;
        const {percentSeconds} = this.state;

        return (
            <Modal show= {show} onHide={() => handleClose()} className="my-modal">
                <div className="progress mt-1">
                    <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        style={{width: percentSeconds+"%"}}
                    />
                </div>

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
                    <span>{relation.numberOfViews}</span>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default RelationModal;
