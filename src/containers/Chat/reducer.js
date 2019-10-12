import _ from 'lodash';
import {
    SEARCHING_USER,
    CREATING_CHANNEL,
    GETTING_CHANNEL
} from '../../actions/actionTypes';


let defaultState = {
    //Loading Operations
    searchingUser: false,

    creatingChannel: false,
    
    gettingChannel:false
};


const chatReducer = (state = defaultState, action) => {
    let _state = _.cloneDeep(state);

    switch (action.type) {

        case SEARCHING_USER:
            _state.searchingUser = action.payload;
            return _state;

        case CREATING_CHANNEL:
            _state.creatingChannel = action.payload;
            return _state;

        case GETTING_CHANNEL:
            _state.gettingChannel = action.payload;
            return _state;

        default:
            return state;
    }

};

export default chatReducer;


