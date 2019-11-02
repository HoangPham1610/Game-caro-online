import { ACTION_TYPE } from "../common/constant";

export const findPlayerStart = () => {
    return {
        type: ACTION_TYPE.FIND_PLAYER_START
    }
}

export const findPlayerSucces = (roomId, roomInfo) => {
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