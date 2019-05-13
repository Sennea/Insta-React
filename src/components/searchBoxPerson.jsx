import React from 'react';
import {Link} from "react-router-dom";
import {Avatar} from "@material-ui/core";

const SearchBoxPerson = ({value, onChange, filtered, handleSelect}) => {
    return (
        <form className="form-inline active-blue-4 mt-2">
            <input
                className="form-control form-control-sm ml-3 col-10 mb-0 pb-0"
                type="text"
                placeholder="Search"
                aria-label="Search"
                value={value}
                onChange={e => onChange(e.currentTarget.value)}
            />

            { filtered.length > 0 ?
            <div  onMouseLeave={handleSelect}
                  className={value!== "" ? "dropdown-menu d-block ml-4 col-9" : "d-none"}>
                {filtered.map(fPerson =>
                    <Link
                        key={fPerson._id}
                        to={`/account/${fPerson.author}`}
                        className="dropdown-item link-style border-top pb-3 pt-2"
                        onClick={handleSelect}
                    >
                        <Avatar src={fPerson.img} className="avatar-mini float-left mr-2 "> </Avatar>
                        <div className="ml-2" >{fPerson.author}</div>
                    </Link>
                )}
            </div>: null}
        </form>
    );
};

export default SearchBoxPerson;