export const ACTION_TYPE = {
    NEW_GAME: 'New Game',
    LOGIN_START: 'Login Start',
    LOGIN_SUCCESS: 'Login Success',
    LOGIN_FAILURE: 'Login Failure',
    LOGOUT: 'Logout',
    SIGNUP: 'SignUp',
 
    FIND_PLAYER_START: 'Find Player Start',
    FIND_PLAYER_SUCCESS: 'Find Player Success',
    FIND_PLAYER_ERROR: 'Find Player Error',
 
    CLICK_SQUARE: 'Click Square',
    UPDATE_GAME: 'Update Game',
    CHAT: 'Chat',
    CLICK_TIE: 'Click Tie',
}
 
export const MESSAGE = {  
    FIND_PLAYER_SUCCESS: 'Find Player Success',
    WAITING_FIND_PLAYER: 'Please Waiting'
}
 
export const SOCKET_EVENT = {
    FIND_PLAYER_SUCCESS: 'findPlayerSuccess',
    UPDATE_GAME: 'updateGame',
    UPDATE_LIST_MESSAGE: 'updateListMessage',
    PLAYER_WANT_TIE: 'playerWantTie',
}