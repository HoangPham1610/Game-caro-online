import axios from 'axios';
import { findPlayerStart, findPlayerSucces, findPlayerError } from '../action/gameAction';
import { isNullOrUndefined } from 'util';
import { MESSAGE } from '../common/constant';

const fetchFindPlayer = (token) => {
    return async (dispatch) => {
        dispatch(findPlayerStart());
       
        const res = await axios({
            method: 'post',
            url: '/game/find-player',
            baseURL: 'http://localhost:3001',
            headers: {
                common: {
                    Authorization: 'Bearer ' + token
                }
            }
        });
        
        const {data} = res;
       console.log(res);
        if (isNullOrUndefined(data) === false) {
            const { error, message, roomId, roomInfo } = data;
            // Không xảy ra lỗi
            if (isNullOrUndefined(error) === true) {
                if (isNullOrUndefined(message) === false) {  
                    if (message === MESSAGE.FIND_PLAYER_SUCCESS) {
                        dispatch(findPlayerSucces(roomId, roomInfo));
                    } else if (message === MESSAGE.WAITING_FIND_PLAYER) {
                        console.log('waiting');
                        return;
                    }
                    
                } else {
                    dispatch(findPlayerError(message));
                }
            } else {
                dispatch(findPlayerError(error));
            }
           
        } else {
            dispatch(findPlayerError('No data'));
        }
        console.log(res);
    }

}

export default fetchFindPlayer; 