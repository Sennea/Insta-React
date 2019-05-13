import React, {Component} from 'react';
import PhotoOwner from "./photoOwner";
import PhotoSection from "../photoSection";
import CommentsSection from "../commentsSection";

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            height: 0,
        }
    }

    render(){
        const {size, posts, comments, handleLike, handleCommentDelete, handleCommentSubmit, handlePostDelete} = this.props;

        return (
            <div>
                {posts.map(post =>
                    <div className="post mb-2"
                         onMouseEnter={this.handleDeleteButtonShow}
                         onMouseLeave={this.handleDeleteButtonShow}
                         key={post._id}>

                        <PhotoOwner
                            post={post}
                        />
                        <div className="row">
                            <PhotoSection
                                post={post}
                                onLike={handleLike}
                                liked={post.liked}
                                onDelete={handlePostDelete}
                            />
                            <CommentsSection
                                height={this.getHeight}
                                comments={comments}
                                onDelete={handleCommentDelete}
                                onCommentSubmit={handleCommentSubmit}
                            />
                        </div>

                        <CommentsSection
                            comments={comments}
                            size={size}
                            onDelete={handleCommentDelete}
                            onCommentSubmit={handleCommentSubmit}
                        />

                    </div>
                )}
            </div>
        );
    }
}

export default Post;