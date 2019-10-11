import { combineReducers } from 'redux';
import registrationReducer from '../containers/Registration/reducer';
import loginReducer from '../containers/Login/reducer';
import DashboardReducer from '../containers/Dashboard/reducer';
import ChatReducer from '../containers/Chat/reducer';

export default combineReducers({
    registrationReducer,
    loginReducer,
    DashboardReducer,
    ChatReducer,
});