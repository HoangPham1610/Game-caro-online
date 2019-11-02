import { ACTION_TYPE } from '../common/constant';

const initialState = {
    isWaiting: false,
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
      ] // Danh sách vị trí những quân cờ tạo chiến thắng
    }
}

export default (state = initialState, action) => {
    const {type, roomId, roomInfo} = action;
  switch (type) {

  case ACTION_TYPE.FIND_PLAYER_START:
    return Object.assign({}, state, {
        isWaiting: true,
        isConnect: false
    })
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
    })
  default:
    return state
  }
}