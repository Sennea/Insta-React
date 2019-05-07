const relations = [

    {
        _id: "5b21ca3eeb7f6fberj546kccd471815",
        author: "Person 1" ,
        img: "https://images.wallpaperscraft.com/image/raccoon_paws_animal_funny_103443_1280x720.jpg",
    },

    {
        _id: "5b21ca3eeb7f6fbe4ejefccd471817",
        author: "Person 2" ,
        img: "https://images.wallpaperscraft.com/image/tree_fog_nature_beautiful_84257_1280x720.jpg",
    },

    {
        _id: "5b21ca3eeb7f6fbcc2rejjtnjejeje34d471819",
        author: "Person 3" ,
        img: "https://images.wallpaperscraft.com/image/kitten_fluffy_face_rose_grass_look_85837_1280x720.jpg"
    },

    {
        _id: "5b21ca321eeb5u4j5trth7f6fb421ccd471815",
        author: "Person 4" ,
        img: "https://images.wallpaperscraft.com/image/bridge_sun_beams_light_morning_river_park_fairy_tale_48376_1280x720.jpg"
    },

    {
        _id: "5b21ca463eeb7f6fbrtjrtjccd471815",
        author: "Person 5" ,
        img: "https://images.wallpaperscraft.com/image/curiosity_butterfly_frog_flower_93791_1280x720.jpg"
    },


    {
        _id: "5b21ca3ee43b7f6fbccdrtjrtj124471815",
        author: "Person 6" ,
        numberOfComments: 55,
        numberOfViews: 21,
        numberOfLikes: 9,
        img: "https://images.wallpaperscraft.com/image/tiger_face_stone_eyes_predator_92029_1280x720.jpg"
    },

    {
        _id: "5b21ca3e72eb7f6fbccd47352351815",
        author: "Person 7" ,
        img: "https://images.wallpaperscraft.com/image/cat_cute_lie_71887_1280x720.jpg"
    },

    {
        _id: "5b21ca3eeb7f6fbccd4711241245815",
        author: "Person 8" ,
        img: "https://images.wallpaperscraft.com/image/panda_bear_branch_tree_99785_1280x720.jpg"
    },

    {
        _id: "5b21ca3eeb7f6fb2352352ccd471815",
        author: "Person 9" ,
        img: "https://images.wallpaperscraft.com/image/owl_tree_nature_85975_1280x720.jpg"
    },

    {
        _id: "5b21ca3eeb7f6f346346h3hbcc25d471815",
        author: "Person 1" ,
        img: "https://images.wallpaperscraft.com/image/raccoon_paws_animal_funny_103443_1280x720.jpg",
    },

    {
        _id: "5b21ca3eeb7f6ffwebccheherhd471817",
        author: "Person 2" ,
        img: "https://images.wallpaperscraft.com/image/tree_fog_nature_beautiful_84257_1280x720.jpg",
    },

    {
        _id: "5b21ca3eeb7weff6fbcc234sgerkd471819",
        author: "Person 3" ,
        img: "https://images.wallpaperscraft.com/image/kitten_fluffy_face_rose_grass_look_85837_1280x720.jpg"
    },

    {
        _id: "5b21ca321eebwfe7f6fbioio;21ccd471815",
        author: "Person 4" ,
        img: "https://images.wallpaperscraft.com/image/bridge_sun_beams_light_morning_river_park_fairy_tale_48376_1280x720.jpg"
    },

    {
        _id: "5b21ca463eeb7f6fwefbccd78ouy471815",
        author: "Person 5" ,
        img: "https://images.wallpaperscraft.com/image/curiosity_butterfly_frog_flower_93791_1280x720.jpg"
    },


    {
        _id: "5b21ca3ee43qeb7f6fbccd452355tyktyk71815",
        author: "Person 6" ,
        numberOfComments: 55,
        numberOfViews: 21,
        numberOfLikes: 9,
        img: "https://images.wallpaperscraft.com/image/tiger_face_stone_eyes_predator_92029_1280x720.jpg"
    },

    {
        _id: "5b21ca3e72hereb7f6fb1251256ccd471815",
        author: "Person 7" ,
        img: "https://images.wallpaperscraft.com/image/cat_cute_lie_71887_1280x720.jpg"
    },

    {
        _id: "5b21ca3eeb7f6tyjfbccd448568471815",
        author: "Person 8" ,
        img: "https://images.wallpaperscraft.com/image/panda_bear_branch_tree_99785_1280x720.jpg"
    },

    {
        _id: "5b21ca3eeb7f6fbcytjjrcd471815",
        author: "Person 9" ,
        img: "https://images.wallpaperscraft.com/image/owl_tree_nature_85975_1280x720.jpg"
    }
];

export function getRelations(){
    return relations;
}

export  function getRelation(id){
    return relations.find(p=> p._id === id);
}