import axios from 'axios';
import { loginStart, loginSuccess, loginFailuer } from '../action/userAction';
import { isNullOrUndefined } from 'util';

const fetchLogin = (username, password) => {
    return async (dispatch) => {
        dispatch(loginStart());
        const res = await axios({
            method: 'post',
            url: '/user/login',
            baseURL: 'http://localhost:3001',
            data: {
                username: username,
                password: password
            }
        });
        
        const {data} = res;
       console.log(res);
        if (isNullOrUndefined(data) === false) {
            const { user, token, message } = data;
            if (isNullOrUndefined(user) === false && isNullOrUndefined(token) === false) {        
                dispatch(loginSuccess(user, token));
                console.log('Login success');
            } else {
                dispatch(loginFailuer(message));
            }
        } else {
            dispatch(loginFailuer('No data'));
        }
        console.log(res);
    }

}

export default fetchLogin;