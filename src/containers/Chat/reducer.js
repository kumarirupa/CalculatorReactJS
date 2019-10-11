import _ from 'lodash';
import {
    SEARCH_USER_DATA,
    SEARCHING_USER,
    SET_RESPONSE,
    RESET_DATA
} from '../../actions/actionTypes';


let defaultState = {
    //Response Data
    searchUser: null,

    //Loading Operations
    searchingUser: false,

    //Error or Success Detection
    searchingUserError: null,

    // Response Message
    searchingUserResponse: ''

};


const chatReducer = (state = defaultState, action) => {
    let _state = _.cloneDeep(state);

    switch (action.type) {
        case SEARCH_USER_DATA:
            _state.searchUser = action.payload;
            return _state;

        case SEARCHING_USER:
            _state.searchingUser = action.payload;
            return _state;

        case SET_RESPONSE:
            _state.searchingUserResponse = action.msg;
            _state.searchingUserError = action.error;
            return _state;

        case RESET_DATA:
            return defaultState;

        default:
            return state;
    }

};

export default chatReducer;


