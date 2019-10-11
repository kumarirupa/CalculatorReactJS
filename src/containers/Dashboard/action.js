import {
    GET_USER_DATA,
    GETTING_USER_DETAILS,
    UPDATE_USER_DATA,
    UPDATING_USER_DATA,
    SET_RESPONSE,
    RESET_DATA
} from '../../actions/actionTypes';
import { USER_DETAILS, UPDATE_USER_DETAILS } from '../../api'
import APIService from "../../services/APIServices";

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