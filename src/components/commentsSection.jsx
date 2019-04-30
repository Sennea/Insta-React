import React from 'react';
import ScrollBar from "react-perfect-scrollbar";
import {NavLink} from "react-router-dom";

const CommentsSection = ({comments, size, height}) => {
    console.log("heh-fromComment", height);

    return (
        <div style= {{height: {height}}}
             className={size === 0 ? "col-md-12 d-lg-none comment-section-sm" : "col-4 comment-section d-none d-lg-block"}>
            <ScrollBar>
                {comments.map(comment =>
                    <div className="mb-4">
                        <div className="row m-0">
                            <i className="fa fa-user-circle fa-2x"/>
                            <NavLink to="/account"
                                     className="font-weight-bold link-style ml-2">{comment.author}</NavLink>
                        </div>
                        <p className="pr-3">{comment.text}</p>
                    </div>
                )}
            </ScrollBar>
        </div>
    );
};

export default CommentsSection;