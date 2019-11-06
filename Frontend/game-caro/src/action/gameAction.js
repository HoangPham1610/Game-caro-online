import { ACTION_TYPE } from "../common/constant";
 
export const findPlayerStart = () => {
    return {
        type: ACTION_TYPE.FIND_PLAYER_START
    }
}
 
export const findPlayerSuccess = (roomId, roomInfo) => {
    return {
        type: ACTION_TYPE.FIND_PLAYER_SUCCESS,
        roomId: roomId,
        roomInfo: roomInfo
    }
}
 
export const findPlayerError = () => {
    return {
        type: ACTION_TYPE.FIND_PLAYER_ERROR
    }
}
 
export const clickSquare = (roomInfo) => {
    return {
        type: ACTION_TYPE.CLICK_SQUARE,
        roomInfo: roomInfo
    }
}
 
export const updateGame = (roomInfo) => {
    return {
        type: ACTION_TYPE.UPDATE_GAME,
        roomInfo: roomInfo
    }
}
 
export const chat = (listMessage) => {
    return {
        type: ACTION_TYPE.CHAT,
        listMessage: listMessage
    }
}
 
export const clickTie = () => {
    return {
        type: ACTION_TYPE.CLICK_TIE
    }
}