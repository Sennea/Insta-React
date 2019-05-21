import http from './httpService';
import config from '../config.json'

const albumsEndpoint = config.apiEndpoint + "/relations";

export function getAlbums(){
    return http.get(albumsEndpoint)
}

export function getAlbum(albumID){
    return http.get(`${albumsEndpoint}/${albumID}`)
}

export function addAlbum(albumID){
    return http.post(`${albumsEndpoint}/${albumID}`);
}
