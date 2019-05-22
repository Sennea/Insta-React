import http from './httpService';
import config from '../config.json'
import {authHeader} from "./userService";

const relationsEndpoint = config.apiEndpoint + "/relations";

export function getRelations(){
    return http.get(relationsEndpoint)
}

export function getRelation(relationID){
    return http.get(`${relationsEndpoint}/${relationID}`)
}

export function addRelation(img){
    const requestParams = {
        headers: authHeader()
    };
    console.log(img);
    let relation = new FormData();
    relation.set('file', img);

    return http.post(relationsEndpoint,relation, requestParams)
        .then(res => {
            let photoData = res.data;
            photoData.userName = JSON.parse(localStorage.getItem("user")).user.name;
            return photoData;
        });
}
