import React from 'react';
import {getPhotos} from "../services/photoService";
import {getUser} from "../services/personServicce";
import ProfileDetails from "./common/profileDetails";
import Post from "./common/post";
import Photos from "./photos";

class AccountSection extends Photos {
    state={
        person: {},
        photos: [],
        comments: [],
        personPosts: [],
        size: 0,
        liked: 0
    };

    async componentDidMount () {
        const author = this.props.match.params.author;
        const person = await getUser(author);
        let photos = [];
        const {data: photosData} = await getPhotos();
        person.photos.forEach(photo => {
            photosData.forEach(photoAll => {
                if(photoAll.id === photo)
                    photos.push(photoAll) ;
            })

        });

        const user = JSON.parse(localStorage.getItem("user"));

        photos.forEach(photo => {
            const value = user.user.meta.liked.indexOf(photo.id) > -1 ? "liked" : user.user.meta.disliked.indexOf(photo.id) > -1 ? "disliked" : "";
            photo.liked = value === "liked";
        });

        this.setState({person, photos : photos});
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.author !== this.props.match.params.author){
            const author = this.props.match.params.author;
            const person = await getUser(author);
            let photos = [];
            const {data: photosData} = await getPhotos();
            person.photos.forEach(photo => {
                photosData.forEach(photoAll => {
                    if(photoAll.id === photo)
                        photos.push(photoAll) ;
                })

            });

            const user = JSON.parse(localStorage.getItem("user"));

            photos.forEach(photo => {
                const value = user.user.meta.liked.indexOf(photo.id) > -1 ? "liked" : user.user.meta.disliked.indexOf(photo.id) > -1 ? "disliked" : "";
                photo.liked = value === "liked";
            });

            this.setState({person, photos : photos});
        }
    }


    render() {
        const {person,personPosts, comments, size, photos} = this.state;
        let user = {};
        user.user = person;
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 profile-space sticky-top ">
                        <div className="d-none d-md-block mr-auto ml-auto text-center">
                            {
                                person.photos &&
                                <ProfileDetails
                                    person={person}
                                />
                            }
                        </div>
                        <div className="d-block d-md-none ml-auto mr-auto text-center">
                            {
                                person.photos &&
                                <ProfileDetails
                                    person={person}
                                    size={size}
                                />
                            }
                        </div>
                    </div>
                    <div className="col-md-8 offset-md-1 col-10 mt-2">
                        <div className="col-12">
                            <Post
                                fromAccount = {true}
                                user ={user}
                                size={size}
                                photos={photos}
                                posts={personPosts}
                                comments={comments}
                                handleLike={this.handleLike}
                                handleCommentDelete={this.handleCommentDelete}
                                handleCommentSubmit={this.handleCommentSubmit}
                                handlePostDelete={this.handlePostDelete}

                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default AccountSection;