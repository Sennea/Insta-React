import React, {Component} from 'react';
import ScrollBar from "react-perfect-scrollbar";
import Comment from "./common/comment";


class CommentsSection extends Component {
    state={
        text: ''
    };

    render() {
        // eslint-disable-next-line
        const {comments, size, onDelete, onCommentSubmit, height} = this.props;
        const {text} = this.state;
        return (
            <div
                className={size === 0 ? "col-md-12 d-lg-none comment-section-sm " : "col-4 comment-section d-none d-lg-block img-responsive"}>
                <ScrollBar>
                    <div className="form-group pr-4"
                    >
                    <textarea className="form-control noresize"
                              rows="2"
                              placeholder="Type in new comment..."
                              value={text}
                              onChange={this.handleChange}
                              onKeyPress={(e)=> {
                                  if(e.key === "Enter" && !e.shiftKey){
                                      text !== '' && onCommentSubmit(text);
                                      this.setState({text: ''})
                                  }
                              }}
                              onDoubleClick={() => {
                                  text !== '' && onCommentSubmit(text);
                                  this.setState({text: ''})
                              }}
                    />
                    </div>

                    {comments.map(comment =>
                        <Comment
                            key={comment._id}
                            comment={comment}
                            onDelete={onDelete}
                        />
                    )}
                </ScrollBar>
            </div>
        );
    }
    handleChange = (e) =>{
        const text = e.target.value;
        this.setState({text});
    }
}

export default CommentsSection;