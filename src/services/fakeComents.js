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
        _id: "5b21ca3ee52b7f6fbccd471819",
        author: "Commenter 3" ,
        text: "gre taasf f afae wf fwqvd fewf f e "

    },

    {
        _id: "5b21ca3e12eb7f6fbccd471819",
        author: "Commenter 4" ,
        text: "gre taasf f afae wf fwqvd fewf f e "

    },

    {
        _id: "5b21ca3eeb7f6f2435bccd471819",
        author: "Commenter 5" ,
        text: "gre taasf f afae wf fwqvd fewf f e "

    },

    {
        _id: "5b21ca3ee5b7f6fbccd471819",
        author: "Commenter 6" ,
        text: "gre taasf f afae wf fwqvd fewf f e "

    },

    {
        _id: "5b21ca3eeb7124f6fbccd471819",
        author: "Commenter 7" ,
        text: "gre taasf f afae wf fwqvd fewf f e "

    },

    {
        _id: "5b21ca3eeb7f6fbccd47135819",
        author: "Commenter 8" ,
        text: "gre taasf f afae wf fwqvd fewf f e "

    },

    {
        _id: "5b21ca3eeb7f6fbccd4271815",
        author: "Commenter 9" ,
        text: "awesome awesome awesome awesome awesome awesome awesome "
    }
];

export function getComments(){
    return comments;
}

export function getComment(id){
    return comments.find(c=> c._id === id);
}