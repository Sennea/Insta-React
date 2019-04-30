import React from 'react';
import ScrollBar from "react-perfect-scrollbar";
import {Link} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';

const RelationsSection = ({relations, size}) => {
    //<ScrollBar style={{width: 2000 + 'px'}}>

    return (
        <ScrollBar className="side-scroll-parent">
            {
                relations.map((relation, index) => {
                    let className = "";
                    if(size === 0){
                        if(index === 0)
                            className = "side-scroll mr-5 ml-2";
                        else if(index === relations.length - 1)
                            className = "side-scroll mr-2";
                        else
                            className = "side-scroll mr-5";

                    }else
                         className = "float-none";


                    return <div className={className}>
                        {size === 0 ?
                            <Link to={`/account/${relation.author}`}>
                                <figure>
                                    <Avatar src={relation.img} className="big-avatar-sm"/>
                                    <figcaption className="link-style">
                                        <div className="text-center">
                                            <a className="ml-2 mt-2"> {relation.author} </a>
                                            <a className="ml-2 time d-block"> 23hr. ago </a>
                                        </div>
                                    </figcaption>
                                </figure>
                            </Link> :
                            <Link to={`/account/${relation.author}`} className="link-style row ml-1 mr-0 mt-1 ">
                                <Avatar src={relation.img} className="big-avatar"/>
                                <div>
                                    <a className="ml-2 mt-2"> {relation.author} </a>
                                    <a className="ml-2 time d-block"> 23hr. ago </a>
                                </div>
                            </Link>
                        }

                    </div>;
                    }
                )
            }

        </ScrollBar>
    )
        ;
};

export default RelationsSection;