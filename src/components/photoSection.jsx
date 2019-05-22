import React, {Component} from 'react';
import PostModal from "./common/postModal";
import posed from 'react-pose';
import config from '../config.json'

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
        showStar : false,
        hovered: false,
        showModal: false,
    };

    showStar = () => {
        this.setState({showStar: true}, () => {
            setTimeout(function () {
                this.setState({showStar: false});
            }.bind(this), TIME);
        })
    };

    componentDidMount() {
        const userStorage = JSON.parse(localStorage.getItem("user"));
        this.setState({userStorage});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.liked !== this.props.liked && this.props.liked === true) {
            if (this.props.liked) {
                this.showStar();
            }
        }
    }

    render()
    {
        const {photo, onLike, onDelete,size} = this.props;
        const {hovered, showModal} = this.state;

        return (
            <div className="col-md-12 pl-4 pr-4 col-lg-8 text-center "
                 onMouseEnter={this.handleDeleteButtonShow}
                 onMouseLeave={this.handleDeleteButtonShow}>

                {hovered && this.state.userStorage.user.id === photo.user && <i
                    className={size === 0 ? "fa fa-minus-circle float-right text-lighter clickable delete-photo-sm" :
                        "fa fa-minus-circle float-right text-lighter clickable delete-photo"}
                    onClick={() => onDelete(photo)}
                />}

                {showModal &&
                <PostModal
                    show={showModal}
                    handleClose={this.handleModalShow}
                    photo={photo}
                />
                }

                <div className="img-container ml-3 mr-3">
                    <img
                        src={`${config.apiEndpoint}/photos/${photo.id}`}
                        alt={`${config.apiEndpoint}/photos/${photo.id}`}
                        className="rounded clickable embed-responsive embed-responsive-16by9 post-size"
                        onDoubleClick={() => {
                            onLike(photo);
                        }}
                    />
                    {
                        <Star className="fa fa-star like-star fa-3x clickable" onDoubleClick={() => {
                            onLike(photo);
                        }} pose={this.state.showStar ? 'visible' : 'hidden'}/>
                    }
                </div>


                <div className="row pl-4 mt-2 mb-2">
                    <div className="col-4 clickable"
                         onClick={()=>this.handleModalShow()}>
                        <i className="fa fa-eye"/>
                        <div className="ml-2 d-inline-block"/>
                    </div>
                    <div className="col-4 clickable"
                         onDoubleClick={() => onLike(photo)}>
                        <i className={photo.liked === true ? "fa fa-star" : "fa fa-star-o"}/>
                        <div className="ml-2 d-inline-block">{photo.likes}</div>
                    </div>
                    <div className="col-4">
                        <i className="fa fa-comment-o"/>
                        <div className="ml-2 d-inline-block">{photo.comments}</div>
                    </div>
                </div>
            </div>
        );
    }

    handleModalShow = () => {
        this.setState({showModal: !this.state.showModal});
    };

    handleDeleteButtonShow = () =>{
        const hovered = !this.state.hovered;
        this.setState({hovered});
    }
}

export default PhotoSection;