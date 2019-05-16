import React from 'react';
import {Avatar} from "@material-ui/core";
import {Link} from "react-router-dom"

const SearchedPerson = ({person, handleSelect, index}) => {
    return (
        <Link
            key={person._id}
            to={`/account/${person.author}`}
            className={index === 0 ? "dropdown-item link-style background-dark pb-3 pt-2" : "dropdown-item link-style background-dark border-top pb-3 pt-2"}
            onClick={() => handleSelect}
        >
            <Avatar src={person.img} className="avatar-mini float-left mr-2 "> </Avatar>
            <div className="ml-2">{person.author}</div>
        </Link>
    );
};

export default SearchedPerson;
