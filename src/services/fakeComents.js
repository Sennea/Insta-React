const comments = [
    {
        _id: "5b21ca3eeb7f6fbccd471815",
        author: "Commenter 1" ,
        text: "gretaafafae wffwqvd fewf f e "
    },

    {
        _id: "5b21ca3eeb7f6fbccd471817",
        author: "Commenter 2" ,
        text: "gre taasf f afae wf fwqvd fewf f e "
    },

    {
        _id: "5b21ca3eeb7f6fbccd471819",
        author: "Commenter 3" ,
        text: "gre <3"

    },

    {
        _id: "5b21ca3eeb7f6fbccd471815",
        author: "Commenter 4" ,
        text: "awesome awesome awesome awesome awesome awesome awesome "
    }
];

export function getComments(){
    return comments;
}

export function getComment(id){
    return comments.find(c=> c._id === id);
}