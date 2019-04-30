import React, {Component} from 'react';
import PhotoOwner from "./photoOwner";
import PhotoSection from "../photoSection";
import CommentsSection from "../commentsSection";

class Post extends Component {
    constructor(props) {
        super(props)

        this.state = {
            height: 0
        }
    }

    render(){
        const {size, posts, comments, handleLike, liked} = this.props;

        return (
            <div>
                {posts.map(post =>
                    <div className="post mb-2">
                        <PhotoOwner
                            post={post}
                        />
                        <div className="row" >
                            <PhotoSection
                                post={post}
                                onLike={handleLike}
                                liked={liked}
                            />
                            <CommentsSection
                                height={this.getHeight}
                                comments={comments}
                            />
                        </div>

                        <CommentsSection
                            comments={comments}
                            size={size}
                        />
                    </div>
                )}
            </div>
        );
    }


};

export default Post;