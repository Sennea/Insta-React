import React, {Component} from 'react';
import {getComments} from "../services/fakeComents";
import {addRelation, getRelations} from "../services/relationsService";
import {addPhoto, deletePhoto, getPhotos} from "../services/photoService";
import {getUsers} from "../services/personServicce";
import Post from "./common/post";
import RelationsSection from "./relationsSection";
import RelationModal from "./common/relationModal";
import http from '../services/httpService';
import config from '../config.json'
import {authHeader} from "../services/userService";

class Photos extends Component {

    state = {
        photos: [],
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
        imgFile: null,
        imgPreview: null,
        whichRelationToShow: {},
        show: false,
    };

    async componentDidMount() {
        const {data: photosData} = await getPhotos();
        const photos = [...photosData];

        const user = JSON.parse(localStorage.getItem("user"));

        photos.forEach(photo => {
            const value = user.user.meta.liked.indexOf(photo.id) > -1 ? "liked" : user.user.meta.disliked.indexOf(photo.id) > -1 ? "disliked" : "";
            photo.liked = value === "liked";
        });

        const {data: relationsData} = await getRelations();
        const relations = [...relationsData];

        const {data: personsData} = await getUsers();
        const persons = [...personsData];

        const comments = [...getComments()];
        this.setState({ photos, comments, relations, persons});
    }



    render() {
        const {comments, relations, size, imgPreview, addingRelation, whichRelationToShow, show, photos} = this.state;
        const {user} = this.props;
        return (
            <div className="container col-12 row m-auto p-auto">

                {!user &&
                <h1 className="mt-2 text-center">
                    Login to see posts!
                </h1>
                }

                {user &&
                <React.Fragment>
                <div className="col-12 col-lg-9">
                    <div className=" mt-4 relations-sm col-md-12 d-lg-none pl-0 pr-0 ml-auto mr-auto">
                        <RelationsSection
                            relations={relations}
                            size={size}
                            handleAdd={this.handleNewRelation}
                            showModal={this.showModal}
                        />
                    </div>

                    <div className="input-group col-12 mt-4 mb-2">
                        <div className="input-group-prepend clickable"
                             onClick={this.handleCancel}>
                            <span className="input-group-text background-pink" id="customFileLang">Cancel</span>
                        </div>
                        <div className="custom-file"
                             onChange={(e) => this.handleNewPost(e)}>
                            <input type="file" className="custom-file-input" id="customFileLang"
                                   ref={input => this.addingElement = input}/>
                            <label className="custom-file-label" htmlFor="customFileLang">Choose file</label>
                        </div>
                        <div className="input-group-prepend clickable"
                             onClick={!addingRelation ?
                                 (e) => this.handleAddPost(e) :
                                 (e) => this.handleAddRelation(e)}>
                            <span className="input-group-text background-pink" id="customFileLang">Post</span>
                        </div>
                    </div>
                    {imgPreview &&
                    <div className="col-11 ml-lg-4 m-auto rounded row new-post-border rounded justify-content-center ">
                        <img src={imgPreview} alt={imgPreview} className="rounded clickable embed-responsive-item p-2 post-preview"/>
                    </div>
                    }
                    <div className="col-12 mt-4 ">
                        {
                            photos.length === 0 && !imgPreview ?
                            <div className="col-12 text-center justify-content-center d-flex align-items-center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                            :
                            null
                        }

                        <Post
                            user={user}
                            photos={photos}
                            size={size}
                            comments={comments}
                            handleLike={this.handleLike}
                            handleCommentDelete={this.handleCommentDelete}
                            handlePostDelete={this.handlePostDelete}
                            handleCommentSubmit={this.handleCommentSubmit}
                        />
                    </div>

                </div>

                <div className="col-3 relations mt-4 d-none d-lg-block sticky-top p-0">
                    <RelationsSection
                        relations={relations}
                        handleAdd={this.handleNewRelation}
                        showModal={this.showModal}

                    />
                </div>

                {show &&
                <RelationModal
                    relation={whichRelationToShow}
                    handleClose={this.handleClose}
                    show={show}
                    seconds={3}
                />
                }

                </React.Fragment>}

            </div>
        );
    }







    handleLike = async (photo) =>{
        const photos = [...this.state.photos];
        console.log(photos)
        const index = photos.indexOf(photo);
        photos[index] = {...photos[index]};
        const user = JSON.parse(localStorage.getItem("user"));
        const previous = user.user.meta.liked.indexOf(photo.id) > -1 ? "liked" : user.user.meta.disliked.indexOf(photo.id) > -1 ? "disliked" : "";

        if(previous === "liked"){
           const index = user.user.meta.liked.indexOf(photo.id);
           user.user.meta.liked.splice(index);

        }else if(previous === "disliked"){
            const index = user.user.meta.disliked.indexOf(photo.id);
            user.user.meta.disliked.splice(index);
        }


        let after = "";

        if(previous === "liked" )
            after = "disliked";
        else if(previous === "disliked"|| previous === "")
            after = "liked";

        const requestParams = {
            headers: authHeader()
        };


        const data = after === "liked" ? {liked: photo.id} : {disliked: photo.id};
        await http.put(config.apiEndpoint + "/users/updateMeta", data, requestParams);

        after === "liked" ? user.user.meta.liked.push(photo.id) : user.user.meta.disliked.push(photo.id);

        localStorage.setItem("user", JSON.stringify(user));

        const like = after === "liked" ? 1 : -1;

        await http.put(config.apiEndpoint + "/photos/" + photo.id + "/updateLikes", {likes: like}, requestParams);

        photos[index].liked = !photos[index].liked;
        photos[index].likes = after === "liked" ? photos[index].likes + 1: photos[index].likes - 1;
        this.setState({photos});
    };

    handleCommentDelete = (comment) => {
        const comments = this.state.comments.filter(c => c._id !== comment._id);
        this.setState({comments});
    };

    handlePostDelete = async(photo) => {
        const originalPhotos = this.state.photos;
        const photos = this.state.photos.filter(p => p.id !== photo.id);
        this.setState({photos});

        try{
            await deletePhoto(photo.id);

        }catch (e) {
            this.setState({posts: originalPhotos})
        }
    };

    handleNewPost = (event) =>{
        const postAdding = !this.state.postAdding;
        this.setState({postAdding});

        const imgFile = event.target.files[0];
        const imgPreview = URL.createObjectURL(event.target.files[0]);
        this.setState({imgPreview:imgPreview, imgFile: imgFile});
    };

    handleNewRelation= () =>{
        this.addingElement.click();
        const addingRelation = !this.state.addingRelation;
        this.setState({addingRelation});
    };

    handleAddPost = async () =>{
        const img = this.state.imgFile;
        const originalPhotos = [ ...this.state.photos];
        if(img) {
            try {
                const newPhoto = await addPhoto(img);
                const photos = [newPhoto, ...this.state.photos];
                const imgPreview = null;
                this.setState({photos, imgPreview});

            } catch (e) {
                const imgPreview = null;
                this.setState({photos: originalPhotos, imgPreview});
            }
        }

    };


    handleAddRelation = async () =>{
        const img = this.state.imgFile;
        const originalRelations = [ ...this.state.relations];
        if(img) {
            try {
                const newRelation = await addRelation(img);
                const relations = [newRelation, ...this.state.relations];
                const imgPreview = null;
                const addingRelation = !this.state.addingRelation;
                this.setState({relations, imgPreview, addingRelation});

            } catch (e) {
                const imgPreview = null;
                const addingRelation = !this.state.addingRelation;
                this.setState({photos: originalRelations, imgPreview, addingRelation});
            }
        }
    };

    handleCancel = () => {
        const imgPreview = null;
        this.setState({imgPreview});
    };



    handleCommentSubmit = (text) =>{
        const comment= {_id: "igrwrgrgegergregd24", author: 'Kasia', text: text};
        const comments = [comment,...this.state.comments];
        this.setState({comments});
    };

    showModal = (relation) => {
        this.setState({whichRelationToShow: relation, show: true });
    };

    handleClose = () => {
        this.setState({ show: false });
        this.handleRelationViewsChange(this.state.whichRelationToShow);
    };

    handleRelationViewsChange = async (relation) =>{

        const requestParams = {
            headers: authHeader()
        };

        relation.numberOfViews++;

        const data = {numberOfViews: relation.numberOfViews};
        console.log("data", data);
        await http.put(config.apiEndpoint + "/relations/"+ relation.id + "/updateViews", data, requestParams);

        const relations = [...this.state.relations];
        const index = relations.indexOf(relation);
        relations[index]= {...relation};
        this.setState({relations});
    };
}

export default Photos;