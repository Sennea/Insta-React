import React, {Component} from 'react';
import {getPosts} from "../services/fakePosts";
import {getComments} from "../services/fakeComents";
import {getRelations} from "../services/fakeRelation";
import RelationsSection from "./relationsSection";
import Post from "./common/post";
import {getPersons} from "../services/fakePersons";
import {Link} from "react-router-dom";

class Photos extends Component {
    state = {
        posts:[],
        comments:[],
        relations: [],
        persons: [],
        filteredPersons: [],
        size: 0,
        liked: 0,
        searchQuery: '',
        add: false
    };

    componentDidMount() {
        const posts = [...getPosts()];
        const comments = [...getComments()];
        const relations = [...getRelations()];
        const persons = [...getPersons()];
        this.setState({posts, comments, relations, persons});
    }


    getSearchedData(){
        const {persons, searchQuery} = this.state;

        let filtered = [...getPersons()];
        if(searchQuery)
            filtered = persons.filter(
                p => p.author.toLowerCase().startsWith(searchQuery.toLowerCase())
            );

        return {filteredPersons: filtered};
    }

    render() {
        const {posts, comments, relations, size, liked, add} = this.state;
        return (
            <div className="container col-12 row">

                {add=== false ? <i
                    className="fa fa-plus-circle fa-2x m-2"
                    aria-hidden="true"
                    onClick={this.handleAddPost}
                /> : null}

                {add === true ? <div className="input-group col-6 offset-3 mt-3 row">
                    <div className="input-group-prepend clickable" onClick={this.handleAddPost}>
                        <span className="input-group-text navbar-bg" id="inputGroupFileAddon01">Cancel</span>
                    </div>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                    </div>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="inputGroupFile01"
                               aria-describedby="inputGroupFileAddon01"/>
                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                    </div>
                </div> : null}

                <div className=" row relations-sm col-md-12 d-lg-none mt-2 p-0 ml-3 d-block">
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
                        liked={liked}
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

    handleSearch = (query) =>{
        this.setState({searchQuery: query});
    };

    handleLike = (post) =>{
        const posts = [...this.state.posts];
        const index = posts.indexOf(post);
        posts[index] = {...posts[index]};
        posts[index].liked = !posts[index].liked;
        const liked = posts[index].liked;
        posts[index].numberOfLikes = posts[index].liked === true? posts[index].numberOfLikes+1: posts[index].numberOfLikes-1;
        this.setState({posts, liked});
    };

    handleSelect = () =>{
        this.setState({searchQuery: ''})
    };

    handleAddPost = () =>{
        let add = this.state.add;
        add = !add;
        this.setState({add});

    }
}

export default Photos;