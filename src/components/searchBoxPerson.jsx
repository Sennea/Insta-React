import React, {Component} from 'react';
import SearchedPerson from "./common/searchedPerson";
import {getUsers} from "../services/personServicce";


class SearchBoxPerson extends Component {

    state = {
        query: '',
        filtered: []
    };

    async getSearchedData(){
        const {query} = this.state;

        const {data: personsData} = await getUsers(query);
        let filtered = [...personsData];

        this.setState( {filtered:filtered});
    }

    handleSearch = (query) => {
        this.setState({query: query},
            async () => {
                console.log(this.state.query)
                await this.getSearchedData();
            });


    };

    handleSelect = () =>{
        this.setState({query: ''})
    };

    render() {

        const {filtered, query} = this.state;

        return (
            <form className="form-inline active-blue-4 mt-2">
                <input
                    className="form-control form-control-sm ml-3 col-10 mb-0 pb-0"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    value={query}
                    onChange={e => this.handleSearch(e.currentTarget.value)}
                />

                {filtered.length > 0 ?
                        <div onMouseLeave={this.handleSelect}
                             className={query !== "" ? "dropdown-menu d-inline-block offset-3 col-3" : "d-none"}>
                            {filtered.map((person, index) =>

                                <SearchedPerson
                                    key={person.id}
                                    person={person}
                                    index={index}
                                    handleSelect={this.handleSelect}
                                />
                            )}
                        </div> : null}
            </form>
        );
    }
}

export default SearchBoxPerson;
