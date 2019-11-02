import {combineReducers} from 'redux';
import userReducer from './userReducer';
import gameReducer from './gameReducer';
const rootReducer = combineReducers({ userLogin: userReducer, gameInfo: gameReducer });
export default rootReducer;