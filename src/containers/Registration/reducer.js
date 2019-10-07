import _ from 'lodash';
import {
    SET_USER_DATA,
    SET_REGISTERING_USER,
    SET_RESPONSE,
    RESET_DATA
} from '../../actions/actionTypes';


let defaultState = {
    //Response Data
    userDetails: null,

    //Loading Operations
    registeringUser: false,

    //Error or Success Detection
    registrationError: null,

    // Response Message
    registrationResponse: ''

};


const registrationReducer = (state = defaultState, action) => {
    let _state = _.cloneDeep(state);

    switch (action.type) {
        case SET_USER_DATA:
            _state.userDetails = action.payload;
            return _state;

        case SET_REGISTERING_USER:
            _state.registeringUser = action.payload;
            return _state;

        case SET_RESPONSE:
            _state.registrationResponse = action.msg;
            _state.registrationError = action.error;
            return _state;

        case RESET_DATA:
            return defaultState;

        default:
            return state;
    }

};

export default registrationReducer;


