import { ACTION_TYPE } from '../common/constant';

const initialState = {
    user: null,
    token: null,
    message: null,
    isLogin: false,
    isPending: false,
}

export default (state = initialState, action) => {
    const {type, user, token, errorMessage} = action;
  switch (type) {

  case ACTION_TYPE.LOGIN:
    return Object.assign({}, state, {
      user: null,
      token: null,
      message: errorMessage,
      isLogin: false,
      isPending: true,
    })
  case ACTION_TYPE.LOGIN_SUCCESS:
    console.log(action);
    return Object.assign({}, state, {
      user: user,
      token: token,
      isLogin: true,
      isPending: false
    });
    case ACTION_TYPE.LOGIN_FAILURE:
      return Object.assign({}, state, {
        user: null,
        token: null,
        message: errorMessage,
        isLogin: false,
        isPending: false
      })
  default:
    return state
  }
}