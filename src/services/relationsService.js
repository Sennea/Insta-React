import http from './httpService';
import config from '../config.json'

const relationsEndpoint = config.apiEndpoint + "/relations";

export function getRelations(){
    return http.get(relationsEndpoint)
}

export function getRelation(relationID){
    return http.get(`${relationsEndpoint}/${relationID}`)
}

export function addRelation(relation){
    return http.post(relationsEndpoint, relation);
}
