import React, {Component} from 'react';
import {getPerson} from "../services/fakePersons";
import {getPersonPosts} from "../services/fakePosts";
import ProfileDetails from "./common/profileDetails";
import {getComments} from "../services/fakeComents";
import Albums from "./common/albums";

class AlbumsSection extends Component {


    state = {
        person: [],
        comments: [],
        personPosts: [],
        size: 0
    };

    componentDidMount() {
        const comments = [...getComments()];

        const author = this.props.match.params.author;
        const person = getPerson(author);
        if(!person) return this.props.history.replace('not-found');
        this.setState({person});

        const personPosts = [...getPersonPosts(person.author)];
        console.log(personPosts);
        person.numberOfPosts = personPosts.length;
        let number= 0;
        personPosts.map(p => number += p.numberOfLikes);
        person.numberOfLikes =number;
        this.setState({personPosts, comments});
    }


    render() {
        const {person, personPosts, size} = this.state;
        console.log(person);
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 profile-space sticky-top ">
                        <div className="d-none d-md-block mr-auto ml-auto text-center">
                            <ProfileDetails
                                person={person}
                            />
                        </div>
                        <div className="d-block d-md-none ml-auto mr-auto text-center">
                            <ProfileDetails
                                person={person}
                                size={size}
                            />
                        </div>
                    </div>
                    <div className="col-10 mt-4 p-0 m-0">
                        <Albums
                            personPosts={personPosts}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default AlbumsSection;