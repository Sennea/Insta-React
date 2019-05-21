import http from './httpService';
import config from '../config.json'

const userEndpoint = config.apiEndpoint + "/users/auth";

export function login(email, password){
    const requestParams = {
        headers: loginHeader(email, password)
    };
    return http.post(userEndpoint, {}, requestParams);
}

export function getMyPhotosId(){
    const requestParams = {
        headers: authHeader()
    };
    return http.get(`${config.apiEndpoint}/users/me`, requestParams);
}

export function authHeader() {

    let user = JSON.parse(localStorage.getItem('user'));

    if(user && user.token){
        return { 'Authorization' : 'Bearer ' + user.token};
    } else{
        return {};
    }
}

export function loginHeader(username, password){
    let loginToken = window.btoa(username + ':' + password);
    return { 'Authorization':  'Basic ' +  loginToken };

}