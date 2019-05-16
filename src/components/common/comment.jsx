import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Comment extends Component {
    state={
        hovered: false
    };

    render() {
        const {comment, onDelete} = this.props;
        const {hovered} = this.state;

        return (
            <div className={hovered ? "background-dark p-2 rounded pb-0 mr-2" : " p-2 mr-2"}
                 onMouseEnter={this.handleClassNameChange}
                 onMouseLeave={this.handleClassNameChange}
            >
                <div className="">
                    <i className="fa fa-user-circle fa-2x"/>
                    <NavLink to="/account"
                             className="font-weight-bold link-style ml-2">{comment.author}</NavLink>
                    {hovered && <i
                        className="fa fa-minus-circle float-right text-lighter clickable"
                        aria-hidden="true"
                        onClick={() => {
                            onDelete(comment);
                            this.setState({hovered: false});
                        }}
                    />}
                </div>
                <p className="pr-3 comment-text">{comment.text}</p>
            </div>
        );
    }

    handleClassNameChange = () =>{
        const hovered = !this.state.hovered;
        this.setState({hovered});
    };
}

export default Comment;