import React from 'react';
import SearchedPerson from "./common/searchedPerson";

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

            {filtered.length > 0 ?
                <div onMouseLeave={handleSelect}
                     className={value !== "" ? "dropdown-menu d-block ml-4 col-9" : "d-none"}>
                    {filtered.map((fPerson, index) =>

                        <SearchedPerson
                            key={fPerson._id}
                            person={fPerson}
                            index={index}
                            handleSelect={handleSelect}
                        />
                    )}
                </div> : null}
        </form>
    );
};

export default SearchBoxPerson;