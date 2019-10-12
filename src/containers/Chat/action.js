import {
    SEARCHING_USER,
    CREATING_CHANNEL,
    GETTING_CHANNEL
} from '../../actions/actionTypes';
import { SEARCH_USER, CREATE_CHANNEL, GET_CHANNEL_LIST } from '../../api'
import APIService from "../../services/APIServices";

export const searchUserData = username => dispatch =>{
    return  new Promise((resolve,reject)=>{
        dispatch(searchUserLoader(true));
            APIService("GET", `${SEARCH_USER}/${username}`, null, function(err, res) {
            if (err) {
                dispatch(searchUserLoader(false));
                reject(err);
            } else {
                dispatch(searchUserLoader(false));
                let userList = [];
                if(res.data.result !== null) {
                    userList = res.data.result.map(user => {
                        let firstName = user.firstName;
                        firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
                        let lastName = user.lastName;
                        lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1)
                        return {
                            label:`${firstName} ${lastName}`, value: user.id
                        }
                    });
                }
                resolve(userList);
            }
        });
    });
}

export const createChannel = userData => dispatch =>{
    return  new Promise((resolve,reject)=>{
        dispatch(createChannelLoader(true));
            APIService("POST", CREATE_CHANNEL, userData, function(err, res) {
            if (err) {
                dispatch(createChannelLoader(false));
                reject(err);
            } else {
                dispatch(createChannelLoader(false));
                resolve(res);
            }
        });
    });
}

export const getChannelList = userData => dispatch => {
    return  new Promise((resolve,reject)=>{
        dispatch(getChannelLoader(true));
            APIService("GET", GET_CHANNEL_LIST, userData , function(err, res) {
            if (err) {
                dispatch(getChannelLoader(false));
                reject(err);
            } else {
                dispatch(getChannelLoader(false));
                resolve(res);
            }
        });
    });
}

const searchUserLoader = payload => {
    return {
        type: SEARCHING_USER,
        payload
    };
}

const createChannelLoader = payload => {
    return {
        type: CREATING_CHANNEL,
        payload
    };
}

const getChannelLoader = payload => {
    return {
        type: GETTING_CHANNEL,
        payload
    };
}

