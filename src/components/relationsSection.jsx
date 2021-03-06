import React, {Component} from 'react';
import ScrollBar from "react-perfect-scrollbar";
import Avatar from '@material-ui/core/Avatar';
import config from '../config.json'
import http from '../services/httpService';

class RelationsSection extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSortChange = this.handleSortChange.bind(this);
        this.getSortedRelations = this.getSortedRelations.bind(this);

        this.state = {
            relationsSort: 'desc',
            sortedRelations: []
        };

    }

    async componentDidMount() {
        const sortedRelations = await this.getSortedRelations();
        this.setState({sortedRelations});
    }

    async getSortedRelations(){
        const dir = this.state.relationsSort === "asc" ? 1 : -1;
        const sortedRelations = await http.get(`${config.apiEndpoint}/relations/sort/created?dir=${dir}`);
        return sortedRelations.data;
    }

   async handleSortChange(){
        console.log(this.state.relationsSort);
        const relationsSort = this.state.relationsSort ==='asc'? 'desc' : 'asc';
        this.setState({relationsSort}, async () => {
            const sortedRelations = await this.getSortedRelations();
            this.setState({sortedRelations});

        });
    }

    parseDate = (relation) => {

        let date = new Date(Date.parse(relation.createdAt));
        let today = new Date();


        let time = Math.abs(Math.floor((
            Date.UTC(
                date.getFullYear(),
                date.getMonth(),
                date.getDate(),
                date.getHours(),
                date.getMinutes()) -
            Date.UTC(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                today.getHours(),
                today.getMinutes()))
            / (1000 * 60)));
        if (time / 60 >= 1) {
            time /= 60;

            if (time / 24 >= 1) {

                time /= 24;

            } else {
                time = Math.floor(time) + ' hours ';
            }
        } else {
            time = Math.floor(time) + ' minutes ';
        }

        time = time + 'ago';

        return time;
    };

    render() {
        const  {size, handleAdd, showModal } = this.props;
        const  {relationsSort, sortedRelations}= this.state;


        return (

            <ScrollBar className="side-scroll-parent">
                {size !== 0 ?
                    <div className="row relation-top m-auto clickable p-0 text-dark col-12 d-inline-block">
                        <div className="d-inline-block"
                             onClick={() => handleAdd()}
                        >
                            <i className="fa fa-plus fa-2x ml-2 mt-2"/>
                            <span className=" text-center ml-2 ">Dodaj do relacji</span>
                        </div>

                        <div
                            className="float-right mt-3 mr-3 d-inline-block"
                            onClick={this.handleSortChange}
                        >
                            <span>Sort</span>
                            <i className={relationsSort === 'asc' ? "fa fa-sort-asc ml-2" : "fa fa-sort-desc ml-2"}/>
                        </div>
                    </div>
                    :
                    <div>
                        <figure className="relation-left clickable  float-left">
                            <i className="fa fa-plus fa-2x mt-2 ml-3 d-inline-block"
                               onClick={() => handleAdd()}/>
                            <figcaption>
                                <div className="d-inline-block ml-2 mt-2 d-block  justify-content-center"
                                     onClick={() => handleAdd()}
                                >
                                    Dodaj
                                </div>
                                <div className="d-inline-block ml-2 -block  justify-content-center"
                                     onClick={this.handleSortChange}
                                >
                                    <span>Sort</span>
                                    <i className={relationsSort === 'asc' ? "fa fa-sort-asc ml-2" : "fa fa-sort-desc ml-2"}/>
                                </div>
                            </figcaption>
                        </figure>

                    </div>
                }
                {
                    sortedRelations.length > 0 &&
                    sortedRelations.map((relation, index) => {
                            let className = "";
                            if (size === 0) {
                                if (index === 0)
                                    className = "side-scroll mr-5 ml-2";
                                else if (index === sortedRelations.length - 1)
                                    className = "side-scroll mr-2";
                                else
                                    className = "side-scroll mr-5";
                            } else
                                className = "float-none";


                            return <div
                                key={relation.id}
                                className={className}
                            >
                                {size === 0 ?
                                    <div onClick={() => showModal(relation)}
                                         className="clickable">
                                        <figure>
                                            <Avatar src={`${config.apiEndpoint}/relations/${relation.id}`} className="big-avatar-sm ml-3 mt-2"/>
                                            <figcaption className="link-style">
                                                <div className="text-left">
                                                    <div className="ml-2 "> {relation.userName} </div>
                                                    <div className="ml-2  relation-time"> {this.parseDate(relation)} </div>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </div> :
                                    <div onClick={()=>showModal(relation)}
                                         className="link-style row ml-2 mr-0 mt-3 clickable">
                                        <Avatar src={`${config.apiEndpoint}/relations/${relation.id}`} className="big-avatar"/>
                                        <div>
                                            <div className="ml-2 "> {relation.userName} </div>
                                            <div className="ml-2  relation-time"> {this.parseDate(relation)} </div>
                                        </div>
                                    </div>
                                }
                            </div>;
                        }
                    )
                }
            </ScrollBar>
        );
    }
}

export default RelationsSection;

