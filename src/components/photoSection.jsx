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
        hovered: false
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
    }

    componentDidMount() {

    }


    render()
    {
        const {post, onLike, onDelete} = this.props;
        const {hovered} = this.state;
        return (
            <div className="col-md-12 pl-4 pr-4 col-lg-8 text-center "
                 onMouseEnter={this.handleDeleteButtonShow}
                 onMouseLeave={this.handleDeleteButtonShow}>
                {hovered && <i
                    className="fa fa-minus-circle float-right text-lighter clickable delete-photo"
                    aria-hidden="true"
                    onClick={() => onDelete(post)}
                />}
                <div className="img-container pl-3">
                    <img
                        ref={(imageElement) => this.imageElement = imageElement}
                        src={post.img}
                        onLoad={() => {
                            const height = this.imageElement.clientHeight;
                            console.log("HEIGHT FROM PHOT" , height);
                            this.props.getHeight(post._id, height)
                        }}
                        alt={post.img}
                        className="rounded clickable embed-responsive embed-responsive-16by9 post-size"
                        onDoubleClick={() => {
                            onLike(post);
                        }}
                    />

                    {
                        <Star className="fa fa-star like-star fa-3x clickable" onDoubleClick={() => {
                            onLike(post);
                        }} pose={this.state.show ? 'visible' : 'hidden'}/>
                    }
                </div>


                <div className="row pl-4 mt-2 mb-2">
                    <div className="col-6 clickable"
                         onDoubleClick={() => onLike(post)}>
                        <i className={post.liked === true ? "fa fa-star" : "fa fa-star-o"}/>
                        <div className="ml-2 d-inline-block">{post.numberOfLikes}</div>
                    </div>
                    <div className="col-6">
                        <i className="fa fa-comment-o"/>
                        <div className="ml-2 d-inline-block">{post.numberOfComments}</div>
                    </div>
                </div>
            </div>
        );
    }

    handleDeleteButtonShow = () =>{
        const hovered = !this.state.hovered;
        this.setState({hovered});
    }
}

export default PhotoSection;