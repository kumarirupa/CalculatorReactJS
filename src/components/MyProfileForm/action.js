import {
    GET_USER_DATA,
    GETTING_USER_DETAILS,
    SET_RESPONSE,
    RESET_DATA
} from '../../actions/actionTypes';
import { USER_DETAILS } from '../../api'
import APIService from "../../services/APIServices";

export const getUserDetails = userData => {
    console.log('USerdata recvd paul', userData);
    return dispatch => {
        dispatch(Loader(true));
        APIService('GET', USER_DETAILS, userData, function (err, res) {
            if (err) {
                dispatch(setResponse(true, err));
                dispatch(Loader(false));
            } else {
                dispatch(userDetails(res.data.result));
                dispatch(setResponse(false, res.data.message));
                dispatch(Loader(false));
            }
        })
    };
}


const userDetails = payload => {
    return {
        type: GET_USER_DATA,
        payload
    };
}

const Loader = payload => {
    return {
        type: GETTING_USER_DETAILS,
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