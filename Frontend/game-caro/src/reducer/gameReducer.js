import { ACTION_TYPE } from '../common/constant';

const initialState = {
    isWaiting: false, // Đang tìm kiếm người chơi
    isConnect: false,
    roomId: null,
    roomInfo: {
      roomId: null,
      playerX: null,
      playerY: null,
      historys: [
        {
          squares: Array(20)
            .fill(null)
            .map(() => {
              return new Array(20).fill(null);
            }),
          row: null,
          col: null
        }
      ], // Lịch sử chơi cờ
      nextPlayer: null, // Kiểm tra ai là người chơi tiếp theo
      isFinish: false, // Kiểm tra xem đã có người win chưa
      stepNumber: 0, // Nước đi hiện tại
      isReverse: false, // Biến kiểm tra đảo ngược danh sách nước đi
      listWin: [
        {
          row: null,
          col: null
        }
      ], // Danh sách vị trí những quân cờ tạo chiến thắng
      listMessage: [], // Lưu tin nhắn của người dùng
    }
}

export default (state = initialState, action) => {
    const {type, roomId, roomInfo, listMessage} = action;
  switch (type) {

  case ACTION_TYPE.FIND_PLAYER_START:
    return Object.assign({}, state, {
        isWaiting: true,
        isConnect: false
    });
  case ACTION_TYPE.FIND_PLAYER_SUCCESS:
    console.log(action);
    return Object.assign({}, state, {
     isWaiting: false,
     isConnect: true,
     roomId: roomId,
     roomInfo: roomInfo
    }); 
  case ACTION_TYPE.FIND_PLAYER_ERROR:
    return Object.assign({}, state, {
      isWaiting: false,
      isConnect: false
    });

    case ACTION_TYPE.UPDATE_GAME:
    case ACTION_TYPE.CLICK_SQUARE:
      return Object.assign({}, state, {
        roomInfo: roomInfo
    });

    case ACTION_TYPE.CHAT:
      return Object.assign({}, state, {roomInfo: Object.assign({}, state.roomInfo, {listMessage: listMessage})});
  default:
    return state
  }
}