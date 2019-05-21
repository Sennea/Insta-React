import http from './httpService';
import config from '../config.json'
import {authHeader} from "./userService";

const photosEndpoint = config.apiEndpoint + "/photos";

export function getPhotos(){
    return http.get(photosEndpoint)
}

export function getPhoto(photoID){
    return http.get(`${photosEndpoint}/${photoID}`)
}

export function addPhoto(img){
    const requestParams = {
        headers: authHeader()
    };
    console.log(img);
    let photo = new FormData();
    photo.set('file', img);

    return http.post(photosEndpoint,photo, requestParams)
        .then(res => {
            console.log("dane", res)
            let photoData = res.data;
            photoData.userName = JSON.parse(localStorage.getItem("user")).user.name;
            return photoData;
        });
}

export function deletePhoto(photoID){
    const requestParams = {
        headers: authHeader()
    };

    return http.delete(`${photosEndpoint}/${photoID}`, requestParams);
}