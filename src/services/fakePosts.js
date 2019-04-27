const posts = [

    {
        _id: "5b21ca3eeb7f6fbccd471815",
        author: "Person 1" ,
        numberOfComments: 3,
        numberOfViews: 4,
        numberOfLikes: 6,
    },

    {
        _id: "5b21ca3eeb7f6fbccd471817",
        author: "Person 2" ,
        numberOfComments: 123,
        numberOfViews: 42,
        numberOfLikes: 346,
    },

    {
        _id: "5b21ca3eeb7f6fbccd471819",
        author: "Person 3" ,
        numberOfComments: 23,
        numberOfViews: 432,
        numberOfLikes: 35,
    },

    {
        _id: "5b21ca3eeb7f6fbccd471815",
        author: "Person 4" ,
        numberOfComments: 55,
        numberOfViews: 21,
        numberOfLikes: 9,
    }
];

export function getPosts(){
    return posts;
}

export  function getPost(id){
    return posts.find(p=> p._id === id);
}