import React, {Component} from 'react';
import {getPerson} from "../services/fakePersons";
import {getPersonPosts, getPosts} from "../services/fakePosts";
import {getComments} from "../services/fakeComents";
import ProfileDetails from "./common/profileDetails";
import Post from "./common/post";

class AccountSection extends Component {
    state={
        name: 'Person 1',
        person: [],
        comments: [],
        personPosts: [],
        size: 0,
        liked: 0
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.author !== this.props.match.params.author){
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
    }


    render() {
        const {person,personPosts, comments, size, liked} = this.state;
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
                    <div className="col-md-8 offset-md-1 col-10 mt-2">
                        <div className="col-12">
                            <Post
                                size={size}
                                posts={personPosts}
                                comments={comments}
                                handleLike={this.handleLike}
                                liked={liked}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    handleLike = (post) =>{
        const posts = [...this.state.personPosts];
        const index = posts.indexOf(post);
        posts[index] = {...posts[index]};
        posts[index].liked = !posts[index].liked;
        const liked = posts[index].liked;
        posts[index].numberOfLikes = posts[index].liked === true? posts[index].numberOfLikes+1: posts[index].numberOfLikes-1;
        this.setState({personPosts: posts, liked});
    }

}

export default AccountSection;