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
        const {size, posts, comments, handleLike, handleCommentDelete, handleCommentSubmit} = this.props;

        return (
            <div>
                {posts.map(post =>
                    <div className="post mb-2"
                        key={post._id}>
                        <PhotoOwner
                            post={post}
                        />
                        <div className="row" >
                            <PhotoSection
                                post={post}
                                onLike={handleLike}
                                liked={post.liked}
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