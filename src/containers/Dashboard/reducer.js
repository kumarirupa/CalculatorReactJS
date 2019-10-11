import _ from 'lodash';
import {
    GET_USER_DATA,
    GETTING_USER_DETAILS,
    UPDATE_USER_DATA,
    UPDATING_USER_DATA,
    SET_RESPONSE,
    RESET_DATA
} from '../../actions/actionTypes';


let defaultState = {
    //Response Data
    userDetails: null,
    updateUser: null,

    //Loading Operations
    gettingUserDetails: false,
    updatingUserDetails: false,

    //Error or Success Detection
    Error: null,

    // Response Message
    Response: ''

};


const DashboardReducer = (state = defaultState, action) => {
    let _state = _.cloneDeep(state);

    switch (action.type) {
        case GET_USER_DATA:
            _state.userDetails = action.payload;
            return _state;

        case GETTING_USER_DETAILS:
            _state.gettingUserDetails = action.payload;
            return _state;

        case UPDATE_USER_DATA:
            _state.updateUser = action.payload;
            return _state;

        case UPDATING_USER_DATA:
            _state.updatingUserDetails = action.payload;
            return _state;

        case SET_RESPONSE:
            _state.Response = action.msg;
            _state.Error = action.error;
            return _state;

        case RESET_DATA:
            return defaultState;

        default:
            return state;
    }

};

export default DashboardReducer;


