import React, {Component} from 'react';
import PhotoOwner from "./photoOwner";
import PhotoSection from "../photoSection";
import CommentsSection from "../commentsSection";
import config from "../../config";

class Post extends Component {

    render(){
        const {size, photos, comments, fromAccount, handleLike, handleCommentDelete, handleCommentSubmit, handlePostDelete, user} = this.props;
        return (
            <div>
                {photos.map((photo) =>
                    {
                        return <div className="post mb-2"
                                    key={photo.id}>

                            {!fromAccount && <PhotoOwner
                                photo={photo}
                            /> }
                            {fromAccount && <div className="mt-2"/>}
                            <div className="row">
                                <PhotoSection
                                    user={user}
                                    photo={photo}
                                    size={size}
                                    onLike={handleLike}
                                    liked={photo.liked}
                                    onDelete={handlePostDelete}
                                />

                                <CommentsSection
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

                        </div>;
                    }
                )}
            </div>
        );
    }
}

export default Post;