import React, {Component} from 'react';
import {getPosts} from "../services/fakePosts";
import {getComments} from "../services/fakeComents";
import {getRelations} from "../services/fakeRelation";
import RelationsSection from "./relationsSection";
import {getPersons} from "../services/fakePersons";

import Post from "./common/post";

class Photos extends Component {

    state = {
        posts: [],
        comments: [],
        relations: [],
        persons: [],
        filteredPersons: [],
        size: 0,
        liked: 0,
        searchQuery: '',
        postAdding: false,
        modalIsOpen: false,
        addingRelation: false,
        imgPreview: null,
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
        const {posts, comments, relations, size, imgPreview, addingRelation} = this.state;
        return (
            <div className="container col-12 row m-auto p-auto">

                <div className=" mt-4 relations-sm col-md-12 d-lg-none pl-0 pr-0 ml-auto mr-auto">
                    <RelationsSection
                        relations={relations}
                        size={size}
                        handleAdd={this.handleNewRelation}
                    />
                </div>


                <div className="input-group col-lg-8 col-md-12 mt-4 mb-2">
                    <div className="input-group-prepend clickable"
                         onClick={this.handleCancel}>
                        <span className="input-group-text background-pink" id="customFileLang">Cancel</span>
                    </div>
                    <div className="custom-file"
                         onChange= {(e) => this.handleNewPost(e)}>
                        <input type="file" className="custom-file-input" id="customFileLang"
                               ref={input => this.addingElement = input}/>
                        <label className="custom-file-label" htmlFor="customFileLang">Choose file</label>
                    </div>
                    <div className="input-group-prepend clickable"
                         onClick={ !addingRelation?
                             (e) => this.handleAddPost(e) :
                             (e) => this.handleAddRelation(e)}>
                        <span className="input-group-text background-pink" id="customFileLang">Post</span>
                    </div>
                </div>
                {imgPreview &&
                <div className="col-lg-7 col-md-12 ml-lg-4 m-auto rounded row new-post-border  p-2 embed-responsive embed-responsive-16by9">
                    <img src={imgPreview} alt={imgPreview} className="rounded embed-responsive-item p-2 "/>
                </div>
                }



                <div className="col-lg-8 col-md-12 mt-4 ">
                    <Post
                        size={size}
                        posts={posts}
                        comments={comments}
                        handleLike={this.handleLike}
                        handleCommentDelete={this.handleCommentDelete}
                        handlePostDelete={this.handlePostDelete}
                        handleCommentSubmit={this.handleCommentSubmit}
                    />
                </div>
                <div className="col-3 offset-1 relations mt-4 d-none d-lg-block sticky-top p-0">
                    <RelationsSection
                        relations={relations}
                        handleAdd={this.handleNewRelation}
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
        posts[index].numberOfLikes = posts[index].liked === true? posts[index].numberOfLikes+1: posts[index].numberOfLikes-1;
        this.setState({posts});
    };

    handleCommentDelete = (comment) => {
        const comments = this.state.comments.filter(c => c._id !== comment._id);
        this.setState({comments});
    };

    handlePostDelete = (post) => {
        const posts = this.state.posts.filter(p => p._id !== post._id);
        this.setState({posts});
    };

    handleNewPost = (event) =>{
        const postAdding = !this.state.postAdding;
        this.setState({postAdding});

        const img = URL.createObjectURL(event.target.files[0]);
        this.setState({imgPreview:img});
    };

    handleNewRelation= () =>{
        this.addingElement.click();
        const addingRelation = !this.state.addingRelation;
        this.setState({addingRelation});
    };

    handleAddPost = () =>{
        const img = this.state.imgPreview;
        if(img){
            const post = {
            _id: 'fwfwafwwff2rherr32t',
            author: 'Kasia',
            img: img,
            numberOfComments: 0,
            numberOfViews: 0,
            numberOfLikes: 0
        };
        const posts=[post, ...this.state.posts];
        const imgPreview = null;
        this.setState({posts, imgPreview});}
    };


    handleAddRelation = () =>{
        const img = this.state.imgPreview;
        if(img){
            const relation = {
                _id: 'fwfwafwwff2r32t',
                author: 'Kasia',
                img: img,
            };
        const relations=[relation, ...this.state.relations];
        const imgPreview = null;
        const addingRelation = !this.state.addingRelation;
        this.setState({relations, imgPreview, addingRelation});}
    };

    handleCancel = () => {
        const imgPreview = null;
        this.setState({imgPreview});
    };

    handleSelect = () =>{
        this.setState({searchQuery: ''})
    };

    handleCommentSubmit = (text) =>{
        const comment= {_id: "igrwrgrgegergregd24", author: 'Kasia', text: text};
        const comments = [comment,...this.state.comments];
        this.setState({comments});
    };
}

export default Photos;