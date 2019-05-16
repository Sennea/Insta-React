import React, {Component} from 'react';
import ScrollBar from "react-perfect-scrollbar";
import Avatar from '@material-ui/core/Avatar';
import _ from "lodash";

class RelationsSection extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSortChange = this.handleSortChange.bind(this);
        this.getSortedRelations = this.getSortedRelations.bind(this);

        this.state = {
            relationsSort: 'asc',
        };

    }

    getSortedRelations(){
        const {relations} = this.props;
        const toSort = [...relations];
        return _.orderBy(toSort, ['author'], [this.state.relationsSort]);
    }

    handleSortChange(){
        const relationsSort = this.state.relationsSort ==='asc'? 'desc' : 'asc';
        this.setState({relationsSort});
    }

    render() {
        const  {size, handleAdd, showModal } = this.props;
        const  {relationsSort} = this.state;
        const sorted = this.getSortedRelations();

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
                    sorted.map((relation, index) => {
                            let className = "";
                            if (size === 0) {
                                if (index === 0)
                                    className = "side-scroll mr-5 ml-2";
                                else if (index === sorted.length - 1)
                                    className = "side-scroll mr-2";
                                else
                                    className = "side-scroll mr-5";
                            } else
                                className = "float-none";


                            return <div
                                key={relation._id}
                                className={className}
                            >
                                {size === 0 ?
                                    <div onClick={() => showModal(relation)}
                                         className="clickable">
                                        <figure>
                                            <Avatar src={relation.img} className="big-avatar-sm ml-3 mt-2"/>
                                            <figcaption className="link-style">
                                                <div className="text-center">
                                                    <div className="ml-2 mt-2"> {relation.author} </div>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </div> :
                                    <div onClick={()=>showModal(relation)}
                                         className="link-style row ml-2 mr-0 mt-3 clickable">
                                        <Avatar src={relation.img} className="big-avatar"/>
                                        <div>
                                            <div className="ml-2 mt-2"> {relation.author} </div>
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

