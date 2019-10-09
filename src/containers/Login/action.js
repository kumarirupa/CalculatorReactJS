

import {
    SET_LOGIN_DATA,
    SET_LOGGING_USER,
    SET_RESPONSE,
    RESET_DATA
} from '../../actions/actionTypes';
import { LOGIN_USER } from '../../api'
import APIService from "../../services/APIServices";

export const loginUser = userData => {
    console.log('USerdata recvd paul', userData);
    return dispatch => {
        dispatch(loginLoader(true));
        APIService('POST', LOGIN_USER, userData, function (err, res) {
            if (err) {
                dispatch(setResponse(true, err));
                dispatch(loginLoader(false));
            } else {
               document.cookie = `Authorization = Bearer ${res.data.result.token}`;
                dispatch(loggedinUser(res.data.result));
                dispatch(setResponse(false, res.data.message));
                dispatch(loginLoader(false));
            }
        })
    };
}


const loggedinUser = payload => {
    return {
        type: SET_LOGIN_DATA,
        payload
    };
}

const loginLoader = payload => {
    return {
        type: SET_LOGGING_USER,
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

export const resetLoginData = () => {
    return {
        type: RESET_DATA
    };
}