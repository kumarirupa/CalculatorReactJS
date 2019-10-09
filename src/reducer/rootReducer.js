import { combineReducers } from 'redux';
import registrationReducer from '../containers/Registration/reducer';
import loginReducer from '../containers/Login/reducer';
import userDetailsReducer from '../components/MyProfileForm/reducer';

export default combineReducers({
    registrationReducer,
    loginReducer,
    userDetailsReducer,
});