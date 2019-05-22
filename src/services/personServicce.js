import http from './httpService';
import config from '../config.json'

const userEndpoint = config.apiEndpoint + "/users";

export function getUsers(query){

    const userEndpoint = config.apiEndpoint + "/users/filter?search=" + query;

    return http.get(userEndpoint);

}

export function getUser(userID){
    console.log(userID);
    return http.get(`${userEndpoint}/${userID}`).then(res => {
        console.log(res.data);
        return res.data;
    })
}

export function addUser(user){
    const newUser = {
        name: user.name,
        password: user.password,
        email: user.username
    };
    console.log(newUser);

    return http.post(userEndpoint, newUser);
}
