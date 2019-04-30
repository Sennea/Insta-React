const posts = [

    {
        _id: "5b21ca3eeb7f6fbccd471815",
        author: "Person 1" ,
        numberOfComments: 3,
        numberOfViews: 4,
        numberOfLikes: 6,
        img: "https://images.wallpaperscraft.com/image/raccoon_paws_animal_funny_103443_1280x720.jpg",
    },

    {
        _id: "5b21ca3eeb7f6fbccd471817",
        author: "Person 2" ,
        numberOfComments: 123,
        numberOfViews: 42,
        numberOfLikes: 346,
        img: "https://images.wallpaperscraft.com/image/tree_fog_nature_beautiful_84257_1280x720.jpg",
    },

    {
        _id: "5b21ca3eeb7f6fbcc234d471819",
        author: "Person 3" ,
        numberOfComments: 23,
        numberOfViews: 432,
        numberOfLikes: 35,
        img: "https://images.wallpaperscraft.com/image/kitten_fluffy_face_rose_grass_look_85837_1280x720.jpg"
    },

    {
        _id: "5b21ca321eeb7f6fb421ccd471815",
        author: "Person 4" ,
        numberOfComments: 55,
        numberOfViews: 21,
        numberOfLikes: 9,
        img: "https://images.wallpaperscraft.com/image/bridge_sun_beams_light_morning_river_park_fairy_tale_48376_1280x720.jpg"
    },

    {
        _id: "5b21ca463eeb7f6fbccd471815",
        author: "Person 5" ,
        numberOfComments: 55,
        numberOfViews: 21,
        numberOfLikes: 9,
        img: "https://images.wallpaperscraft.com/image/curiosity_butterfly_frog_flower_93791_1280x720.jpg"
    },


    {
        _id: "5b21ca3ee43b7f6fbccd471815",
        author: "Person 6" ,
        numberOfComments: 55,
        numberOfViews: 21,
        numberOfLikes: 9,
        img: "https://images.wallpaperscraft.com/image/tiger_face_stone_eyes_predator_92029_1280x720.jpg"
    },

    {
        _id: "5b21ca3e72eb7f6fbccd471815",
        author: "Person 7" ,
        numberOfComments: 55,
        numberOfViews: 21,
        numberOfLikes: 9,
        img: "https://images.wallpaperscraft.com/image/cat_cute_lie_71887_1280x720.jpg"
    },

    {
        _id: "5b21ca3eeb7f6fbccd471815",
        author: "Person 8" ,
        numberOfComments: 55,
        numberOfViews: 21,
        numberOfLikes: 9,
        img: "https://images.wallpaperscraft.com/image/panda_bear_branch_tree_99785_1280x720.jpg"
    },

    {
        _id: "5b21ca3eeb7f6fbccd471815",
        author: "Person 9" ,
        numberOfComments: 235,
        numberOfViews: 35,
        numberOfLikes: 13,
        img: "https://images.wallpaperscraft.com/image/owl_tree_nature_85975_1280x720.jpg"
    },

    {
        _id: "5b21ca3e72eb7253f6fbccd471815",
        author: "Person 1" ,
        numberOfComments: 55,
        numberOfViews: 21,
        numberOfLikes: 9,
        img: "https://images.wallpaperscraft.com/image/cat_cute_lie_71887_1280x720.jpg"
    },

    {
        _id: "5b21ca3eeb7f6f235bccd471815",
        author: "Person 1" ,
        numberOfComments: 55,
        numberOfViews: 21,
        numberOfLikes: 9,
        img: "https://images.wallpaperscraft.com/image/panda_bear_branch_tree_99785_1280x720.jpg"
    },

    {
        _id: "5b21ca3eeb7f6fbcc235d471815",
        author: "Person 1" ,
        numberOfComments: 235,
        numberOfViews: 35,
        numberOfLikes: 13,
        img: "https://images.wallpaperscraft.com/image/owl_tree_nature_85975_1280x720.jpg"
    }
];

export function getPosts(){
    return posts;
}

export  function getPost(id){
    return posts.find(p=> p._id === id);
}

export  function getPersonPosts(author){
    return posts.filter(p=> p.author === author);
}