import React, {Component} from 'react';
import {getPosts} from "../services/fakePosts";
import {getComment, getComments} from "../services/fakeComents";

class Photos extends Component {
    state = {
        posts:[],
        comments:[],
    };

    componentDidMount() {
        const posts = [...getPosts()];
        const comments = [...getComments()];
        this.setState({posts, comments});
    }


    render() {
        const {posts, comments} = this.state;

        return (
            <div>
                {posts.map(post =>
                    <div className="row-8">
                        <div className="col-8">
                            <i className="fa fa-user-circle-o"/>
                            <a> {post.author} </a>
                        </div>
                        <div className="row-4">
                            <img src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg" className="rounded mb-5" width="200"/>
                            {comments.map(comment =>
                                <div >
                                    <i className="fa fa-user-circle m-3"/>
                                    <a className="font-weight-bold">{comment.author}</a>
                                    <p>{comment.text}</p>
                                </div>
                            )}
                        </div>

                    </div>
                )}


            </div>
        );
    }
}

export default Photos;