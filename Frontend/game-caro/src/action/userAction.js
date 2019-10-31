import { ACTION_TYPE } from "../common/constant"

export const loginStart = () => {
    return {
        type: ACTION_TYPE.LOGIN_START
    }
}

export const loginSuccess = (user, token) => {
    return {
        type: ACTION_TYPE.LOGIN_SUCCESS,
        user: user,
        token: token
    }
}

export const loginFailuer = (message) => {
    return {
        type: ACTION_TYPE.LOGIN_FAILURE,
        errorMessage: message
    }
}