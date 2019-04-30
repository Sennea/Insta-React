import React, {Component} from 'react';
import {getPosts} from "../services/fakePosts";
import {getComments} from "../services/fakeComents";
import {getRelations} from "../services/fakeRelation";
import RelationsSection from "./relationsSection";
import Post from "./common/post";

class Photos extends Component {
    state = {
        posts:[],
        comments:[],
        relations: [],
        size: 0,
        liked: 0
    };

    componentDidMount() {
        const posts = [...getPosts()];
        const comments = [...getComments()];
        const relations = [...getRelations()];
        this.setState({posts, comments, relations});
    }


    render() {
        const {posts, comments, relations, size, liked} = this.state;
        return (
            <div className="container col-12 row">
                <div className="relations-sm col-md-12 d-lg-none mt-2 p-0 ml-3 d-block">
                    <RelationsSection
                        relations={relations}
                        size={size}
                    />
                </div>
                <div className="col-lg-8 col-md-12 mt-4 ">
                    <Post
                        size={size}
                        posts={posts}
                        comments={comments}
                        handleLike={this.handleLike}
                        liked ={liked}
                    />
                </div>
                <div className="col-3 offset-1 relations pr-2 mt-4 d-none d-lg-block sticky-top">
                    <RelationsSection
                        relations={relations}
                    />
                </div>
            </div>
        );
    }

    handleLike = (post) =>{
        const posts = [...this.state.posts];
        const index = posts.indexOf(post);
        posts[index] = {...posts[index]};
        posts[index].liked = !posts[index].liked;
        const liked = posts[index].liked;
        posts[index].numberOfLikes = posts[index].liked === true? posts[index].numberOfLikes+1: posts[index].numberOfLikes-1;
        this.setState({posts, liked});
    }
}

export default Photos;