

import {
    SET_USER_DATA,
    SET_REGISTERING_USER,
    SET_RESPONSE,
    RESET_DATA
} from '../../actions/actionTypes';
import { REGISTER_USER } from '../../api'
import APIService from "../../services/APIServices";

export const registerUser = userData => {
    console.log('USerdata recvd paul', userData);
    return dispatch => {
        dispatch(registrationLoader(true));
        APIService('POST', REGISTER_USER, userData, function (err, res) {
            if (err) {
                dispatch(setResponse(true, err));
                dispatch(registrationLoader(false));
            } else {
                dispatch(registeredUser(res.data.result));
                dispatch(setResponse(false, res.data.message));
                dispatch(registrationLoader(false));
            }
        })
    };
}


const registeredUser = payload => {
    return {
        type: SET_USER_DATA,
        payload
    };
}

const registrationLoader = payload => {
    return {
        type: SET_REGISTERING_USER,
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

export const resetRegistrationData = () => {
    return {
        type: RESET_DATA
    };
}