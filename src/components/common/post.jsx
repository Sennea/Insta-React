import React, {Component} from 'react';
import PhotoOwner from "./photoOwner";
import PhotoSection from "../photoSection";
import CommentsSection from "../commentsSection";

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageElementHeight: 0,
            imageElementHeightTab: [{}],
            tmpTab: [{}],
        }
    }

    getImageElementHeight = (id, imageElementHeight) => {
        let tab = this.state.tmpTab;
        const object = {id: id, height: imageElementHeight};
        tab.push(object);
        this.setState({tmpTab: tab});
        if(this.state.tmpTab.length === this.props.posts.length)
            this.setState({imageElementHeightTab: this.state.tmpTab});

    };

    kasia = (post) => {
        let result = this.state.imageElementHeightTab.find(obj => {
            return obj.id === post._id;
        });
        if(result){
            return result.height;
        }
        return null;
    };

    render(){
        const {size, posts, comments, handleLike, handleCommentDelete, handleCommentSubmit, handlePostDelete} = this.props;


        return (
            <div>
                {posts.map((post, index) =>
                    {
                        const postHeight = this.kasia(post);
                    return <div className="post mb-2"
                         onMouseEnter={this.handleDeleteButtonShow}
                         onMouseLeave={this.handleDeleteButtonShow}
                         key={post._id}>

                        <PhotoOwner
                            post={post}
                        />
                        <div className="row">
                            <PhotoSection
                                getHeight={this.getImageElementHeight}
                                post={post}
                                onLike={handleLike}
                                liked={post.liked}
                                onDelete={handlePostDelete}
                            />
                            <CommentsSection
                                height={postHeight}
                                comments={comments}
                                onDelete={handleCommentDelete}
                                onCommentSubmit={handleCommentSubmit}
                            />
                        </div>
{/*
                        <CommentsSection
                            comments={comments}
                            size={size}
                            onDelete={handleCommentDelete}
                            onCommentSubmit={handleCommentSubmit}
                        />*/}

                    </div>
                    }
                )}
            </div>
        );
    }
}

export default Post;