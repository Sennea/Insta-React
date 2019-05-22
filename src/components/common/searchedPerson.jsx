import React from 'react';
import {Link} from "react-router-dom"

const SearchedPerson = ({person, handleSelect, index}) => {

    console.log("fefe", person);

    return (
        <Link
            key={person.id}
            to={`/account/${person.id}`}
            className={index === 0 ? "dropdown-item link-style background-dark pb-3 pt-2" : "dropdown-item link-style background-dark border-top pb-3 pt-2"}
            onClick={() => handleSelect}
        >
            <i className="fa fa-user-circle-o fa-2x mt-2 mb-2"/>
            <div className="ml-2">{person.name}</div>
        </Link>
    );
};

export default SearchedPerson;
