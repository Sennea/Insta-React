import React from 'react';

const Albums = ({personPosts}) => {
    return (
        <div>
            {personPosts.map(album =>
                <figure className="col-lg-4 float-left col-md-6 col-sm-12">
                    <img src={album.img} className="album" alt={album._id}/>
                    <figcaption className="album-title text-center">{album._id}</figcaption>
                </figure>
            )}
        </div>
    );
};

export default Albums;