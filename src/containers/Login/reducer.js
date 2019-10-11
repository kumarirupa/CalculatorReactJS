import _ from 'lodash';

import {
    SET_LOGIN_DATA,
    SET_LOGGING_USER,
    SET_RESPONSE,
    RESET_DATA
} from '../../actions/actionTypes';

let defaultState = {
    //Response Data
    userDetails: null,

    //Loading Operations
    loginUser: false,

    //Error or Success Detection
    loginError: null,

    // Response Message
    loginResponse: ''

};

const loginReducer = (state = defaultState, action) => {
    let _state = _.cloneDeep(state);

    switch (action.type) {
        case  SET_LOGIN_DATA:
            _state.userDetails = action.payload;
            return _state;

        case  SET_LOGGING_USER:
            _state.loginUser = action.payload;
            return _state;

        case SET_RESPONSE:
            _state.loginResponse = action.msg;
            _state.loginError = action.error;
            return _state;

        case RESET_DATA:
            return defaultState;

        default:
            return state;
    }

};

export default  loginReducer ;