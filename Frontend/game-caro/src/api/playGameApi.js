import axios from 'axios';
import { findPlayerStart, findPlayerSuccess, findPlayerError, clickSquare, chat } from '../action/gameAction';
import { isNullOrUndefined } from 'util';
import { MESSAGE } from '../common/constant';

export const fetchClickSquare = (roomId, row, col, token) => {
    return async (dispatch) => {
        dispatch(findPlayerStart());
       
        const res = await axios({
            method: 'post',
            url: '/game/click-square',
            baseURL: 'http://localhost:3001',
            headers: {
                common: {
                    Authorization: 'Bearer ' + token
                }
            },
            data: {
                roomId: roomId,
                row: row,
                col: col,
            }
        });
        
        const {data} = res;
        console.log('click suqare res: ', res);
        if (isNullOrUndefined(data) === false) {
            const { error, roomInfo } = data;
            // Không xảy ra lỗi
            if (isNullOrUndefined(error) === true) {          
                dispatch(clickSquare(roomInfo));  
            } else {
                dispatch(findPlayerError(error));
            }
           
        } else {
            dispatch(findPlayerError('No data'));
        }
    }

} 

export const fetchSendMessage = (roomId, message, token) => {
    return async (dispatch) => {   
        const res = await axios({
            method: 'post',
            url: '/game/send-message',
            baseURL: 'http://localhost:3001',
            headers: {
                common: {
                    Authorization: 'Bearer ' + token
                }
            },
            data: {
                roomId: roomId,
                message: message
            }
        });
        
        const {data} = res;
        console.log('click suqare res: ', res);
        if (isNullOrUndefined(data) === false) {
            const { error, listMessage } = data;
            // Không xảy ra lỗi
            if (isNullOrUndefined(error) === true) {          
                dispatch(chat(listMessage));  
            } else {
                dispatch(findPlayerError(error));
            }
           
        } else {
            dispatch(findPlayerError('No data'));
        }
    }

} 