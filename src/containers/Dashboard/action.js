import {
    GET_USER_DATA,
    GETTING_USER_DETAILS,
    GETTING_USER_STATUS,
    UPDATE_USER_DATA,
    UPDATING_USER_DATA,
    SET_RESPONSE,
    RESET_DATA,
    SEARCHING_USER,
    SETTING_USER_STATUS,
    BLOCKING_USER
} from '../../actions/actionTypes';
import { USER_DETAILS, UPDATE_USER_DETAILS, GET_USER_PRIVACY_STATUS, SET_USER_PRIVACY_STATUS, SEARCH_USER, GET_BLOCK_USER  } from '../../api'
import APIService from "../../services/APIServices";
import CookieStorage from './../../utils/cookie-storage';

import messages from './../../messages/language/index';
const language = CookieStorage.getCookie('language');

const CONSTANTS = messages.messages[(language===null || language==='' || language===undefined) ? 'EN' : language];
console.log(CONSTANTS);

export const getUserDetails = userData => dispatch =>{
    return  new Promise((resolve,reject)=>{
                dispatch(getUserLoader(true));
                    APIService("GET", USER_DETAILS, userData, function(err, res) {
                    if (err) {
                        dispatch(setResponse(true, err));
                        dispatch(getUserLoader(false));
                        reject(err);
                    } else {
                        dispatch(userDetails(res.data.result));
                        dispatch(setResponse(false, res.data.message));
                        dispatch(getUserLoader(false));
                        resolve(res.data);
                    }
                });
        });
}

export const updateUserDetails = userData => dispatch =>{
    return  new Promise((resolve,reject)=>{
                dispatch(updateUserLoader(true));
                APIService("POST", UPDATE_USER_DETAILS, userData, function(err, res) {
                if (err) {
                    dispatch(setResponse(true, err));
                    dispatch(updateUserLoader(false));
                    reject(err);
                } else {
                    dispatch(updateUser(res.data.result));
                    dispatch(setResponse(false, res.data.message));
                    dispatch(updateUserLoader(false));
                    resolve(res.data);
                }
            });
        });
}

export const getUserStatus = () => dispatch =>{
    return  new Promise((resolve,reject)=>{
        dispatch(getUserStatusLoader(true));
        APIService("GET", GET_USER_PRIVACY_STATUS, null, function(err, res) {
            if (err) {
                dispatch(getUserStatusLoader(false));
                reject({
                    message: CONSTANTS.httpErrorMessages.GET_USERS_PRIVACY_STATUS_ERROR
                });
            } else {
                dispatch(getUserStatusLoader(false));
                res.data.result !== null ? resolve(res.data.result): reject({message: CONSTANTS.httpErrorMessages.GET_USERS_PRIVACY_STATUS_ERROR});
            }
        });
    });
}
export const setUserStatus = (userStatus) => dispatch =>{
    return  new Promise((resolve,reject)=>{
        dispatch(setUserStatusLoader(true));
        APIService("POST", SET_USER_PRIVACY_STATUS, {onlineVisibility: userStatus}, function(err, res) {
            if (err) {
                dispatch(setUserStatusLoader(false));
                reject({
                    message: CONSTANTS.httpErrorMessages.GET_USERS_PRIVACY_STATUS_ERROR
                });
            } else {
                dispatch(setUserStatusLoader(false));
                res.data.result !== null ? resolve(res.data.result): reject({message: CONSTANTS.httpErrorMessages.GET_USERS_PRIVACY_STATUS_ERROR});
            }
        });
    });
}
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
                console.log(userList);
                resolve(userList);
            }
        });
    });
}
export const getBlockUser = userData => dispatch =>{
    return  new Promise((resolve,reject)=>{
        APIService("GET", GET_BLOCK_USER, userData , function(err, res) {
            if (err) {
                dispatch(blockUserLoader(false));
                reject({
                    message: CONSTANTS.httpErrorMessages.GET_USERS_PRIVACY_STATUS_ERROR
                });
            } else {
                dispatch(blockUserLoader(false));
                res.data.result !== null ? resolve(res.data.result): reject({message: CONSTANTS.httpErrorMessages.GET_USERS_PRIVACY_STATUS_ERROR});
            }
        });
    });
}

const userDetails = payload => {
    return {
        type: GET_USER_DATA,
        payload
    };
}

const getUserLoader = payload => {
    return {
        type: GETTING_USER_DETAILS,
        payload
    };
}

const updateUser = payload => {
    return {
        type: UPDATE_USER_DATA,
        payload
    };
}

const updateUserLoader = payload => {
    return {
        type: UPDATING_USER_DATA,
        payload
    };
}

const getUserStatusLoader = payload =>{
    return {
        type: GETTING_USER_STATUS,
        payload
    }
}

const setUserStatusLoader = payload =>{
    return{
        type: SETTING_USER_STATUS,
        payload
    }
}
const searchUserLoader = payload => {
    return {
        type: SEARCHING_USER,
        payload
    };
}
const blockUserLoader = payload =>{
    return {
        type: BLOCKING_USER,
        payload
    };
}
const setResponse = (error, msg) => {
    return {
        type: SET_RESPONSE,
        msg,
        error
    };
}

export const resetUserData = () => {
    return {
        type: RESET_DATA
    };
}