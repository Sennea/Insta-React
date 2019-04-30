import React, {Component} from 'react';
import posed from 'react-pose';

const TIME = 500;

const Star = posed.i({
    visible: {
        opacity: 1,
        transition: { duration: 300 }
    },
    hidden: {
        opacity: 0,
        transition: { duration: 300 }
    }
});


class PhotoSection extends Component {

    state = {
        show : false,
        height: ''
    };

    showStar = () => {

        this.setState({show: true}, () => {
            setTimeout(function () {
                this.setState({show: false});
            }.bind(this), TIME);
        })
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.liked !== this.props.liked && this.props.liked === true) {
            if (this.props.liked) {
                this.showStar();
            }
        }
        if(prevProps.height !== this.props.height){
            if(this.element){
                const height = this.element.clientHeight;
                this.setState({height: height})
                console.log("heh-cDu", this.element.clientHeight )
            }
        }
    }

    componentDidMount() {
        if(this.element){
            const height = this.element.clientHeight;
            console.log("heh-cDm" , height);

            this.setState({height: height})
        }
    }

    getHeight(){
        console.log("heh-getHeight" , this.state.height);
        return this.state.height;
    }

    render()
    {
        const {post, onLike} = this.props;
        return (
            <div className="col-md-12 pl-4 pr-4 col-lg-8 "
                 ref={ element => {this.element = element}}>
                <div className="img-container pl-3" >
                    <img
                         src={post.img}
                         alt={post.img}
                         className="rounded clickable" width="100%"
                         onDoubleClick={()  => {
                             onLike(post);
                         }}/>
                    {
                        <Star className="fa fa-star like-star fa-3x" pose={this.state.show ? 'visible' : 'hidden'}/>
                    }
                </div>


                <div className="row pl-4 mt-2 mb-2">
                    <div className="col-4 clickable"
                         onDoubleClick={() => onLike(post)}>
                        <i className={post.liked === true ? "fa fa-star" : "fa fa-star-o"}/>
                        <a className="ml-2">{post.numberOfLikes}</a>
                    </div>
                    <div className="col-4">
                        <i className="fa fa-comment-o"/>
                        <a className="ml-2">{post.numberOfComments}</a>
                    </div>
                    <div className="col-4">
                        <i className="fa fa-eye"/>
                        <a className="ml-2">{post.numberOfViews}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default PhotoSection;