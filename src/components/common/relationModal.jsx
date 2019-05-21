import React, {Component} from 'react';
import {Modal} from "react-bootstrap";
import config from "../../config";


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
            <Modal show={show} onHide={() => handleClose()}>
                <div className="progress mt-1">
                    <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        style={{width: percentSeconds + "%"}}
                    />
                </div>

                <Modal.Header closeButton>

                    <Modal.Title>
                        <span className="float-left"> {relation.userName}</span>
                    </Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <img
                        src={`${config.apiEndpoint}/relations/${relation.id}`}
                        alt={`${config.apiEndpoint}/relations/${relation.id}`}
                        className="relation-show"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <i className="fa fa-eye ml-5 align-bottom right"/>
                    <span className="float-right">{relation.numberOfViews}</span>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default RelationModal;
