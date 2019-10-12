import _ from 'lodash';
import {
    SEARCHING_USER,
} from '../../actions/actionTypes';


let defaultState = {
    //Loading Operations
    searchingUser: false,
};


const chatReducer = (state = defaultState, action) => {
    let _state = _.cloneDeep(state);

    switch (action.type) {

        case SEARCHING_USER:
            _state.searchingUser = action.payload;
            return _state;
        default:
            return state;
    }

};

export default chatReducer;


