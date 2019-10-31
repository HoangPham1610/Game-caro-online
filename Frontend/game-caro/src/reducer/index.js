import {combineReducers} from 'redux';
import userReducer from './userReducer';
const rootReducer = combineReducers({ userLogin: userReducer });
export default rootReducer;