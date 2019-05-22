import React from 'react';
import {addPhoto, deletePhoto, getPhotos} from "../services/photoService";
import {getUser} from "../services/personServicce";
import {getComments} from "../services/fakeComents";
import ProfileDetails from "./common/profileDetails";
import Post from "./common/post";
import Photos from "./photos";
import {getMyPhotosId} from "../services/userService";

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

        person.photos.forEach(photo => {
            photos.push({id: photo}) ;
        });

        this.setState({person, photos : photos});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.author !== this.props.match.params.author){
            const comments = [...getComments()];

            const author = this.props.match.params.author;
            const person = getUser(author);
            //if(!person) return this.props.history.replace('not-found');
            this.setState({person});


            const personPosts = [...getMyPhotosId(person.author)];
            console.log(personPosts);
            person.numberOfPosts = personPosts.length;
            let number= 0;
            personPosts.map(p => number += p.likes);
            person.likes =number;
            this.setState({personPosts, comments});
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
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default AccountSection;