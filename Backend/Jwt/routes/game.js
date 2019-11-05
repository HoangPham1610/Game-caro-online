const express = require('express');
const router = express.Router();
const uuidv1 = require('uuid/v1');


/**
 * Kiểm tra người chơi vừa đánh đã thắng hay chưa
 */
const checkWinner = (historys, row, col) => {
  // const { historys } = state;
  const historyLength = historys.length;
  const { squares } = historys[historyLength - 1];
  const valCheck = squares[row][col];
  let temp = 1;
  let chanDau = 0;
  let curRow = row;
  let curCol = col + 1;
  let listWin = [];

  listWin.push({ row, col });
  // Duyệt hàng ngang sang phải
  while (curCol < 20) {
    // Kiểm tra xem ô hiện tại đã được đánh chưa
    if (squares[curRow][curCol] !== null) {
      // Nếu đã được đánh thì có bằng quân cờ hiện tại đang check không
      if (squares[curRow][curCol] === valCheck) {
        temp += 1;
        // Thêm vị trí quân cờ vào danh sách các quân cờ tạo nên chiến thắng
        const location = {
          row: curRow,
          col: curCol
        };
        listWin.push(location);
        curCol += 1;
      } else {
        // Quân cờ khác, nghĩa là bị chặn
        chanDau += 1;
        break;
      }
    } else {
      // Chưa được đánh. Thoát vòng lặp
      break;
    }
  }

  curRow = row;
  curCol = col - 1;
  // Duyệt hàng ngang sang trái
  while (curCol >= 0) {
    // Kiểm tra xem ô hiện tại đã được đánh chưa
    if (squares[curRow][curCol] !== null) {
      // Nếu đã được đánh thì có bằng quân cờ hiện tại đang check không
      if (squares[curRow][curCol] === valCheck) {
        temp += 1;
        // Thêm vị trí quân cờ vào danh sách các quân cờ tạo nên chiến thắng
        const location = {
          row: curRow,
          col: curCol
        };
        listWin.push(location);
        curCol -= 1;
      } else {
        // Quân cờ khác, nghĩa là bị chặn
        chanDau += 1;
        break;
      }
    } else {
      // Chưa được đánh. Thoát vòng lặp
      break;
    }
  }

  if (temp >= 5 && chanDau < 2) {
    return {
      isFinish: true,
      listWin
    };
  }

  // Duyệt xong hàng ngang reset lại value
  temp = 1;
  chanDau = 0;
  curRow = row + 1;
  curCol = col;
  listWin = listWin.slice(0, 1);
  // Duyệt hàng dọc xuống dưới
  while (curRow < 20) {
    // Kiểm tra xem ô hiện tại đã được đánh chưa
    if (squares[curRow][curCol] !== null) {
      // Nếu đã được đánh thì có bằng quân cờ hiện tại đang check không
      if (squares[curRow][curCol] === valCheck) {
        temp += 1;
        // Thêm vị trí quân cờ vào danh sách các quân cờ tạo nên chiến thắng
        const location = {
          row: curRow,
          col: curCol
        };
        listWin.push(location);
        curRow += 1;
      } else {
        // Quân cờ khác, nghĩa là bị chặn
        chanDau += 1;
        break;
      }
    } else {
      // Chưa được đánh. Thoát vòng lặp
      break;
    }
  }

  curRow = row - 1;
  curCol = col;
  // Duyệt hàng dọc lên trên
  while (curRow >= 0) {
    // Kiểm tra xem ô tiếp theo bên phải đã được đánh chưa
    if (squares[curRow][curCol] !== null) {
      // Nếu đã được đánh thì có bằng quân cờ hiện tại đang check không
      if (squares[curRow][curCol] === valCheck) {
        temp += 1;
        // Thêm vị trí quân cờ vào danh sách các quân cờ tạo nên chiến thắng
        const location = {
          row: curRow,
          col: curCol
        };
        listWin.push(location);
        curRow -= 1;
      } else {
        // Quân cờ khác, nghĩa là bị chặn
        chanDau += 1;
        break;
      }
    } else {
      // Chưa được đánh. Thoát vòng lặp
      break;
    }
  }

  if (temp >= 5 && chanDau < 2) {
    return {
      isFinish: true,
      listWin
    };
  }

  // Duyệt xong hàng dọc reset lại value để duyệt hàng chéo xuôi
  temp = 1;
  chanDau = 0;
  curRow = row + 1;
  curCol = col + 1;
  listWin = listWin.slice(0, 1);
  // Duyệt hàng chéo xuôi xuống dưới
  while (curRow < 20 && curCol < 20) {
    // Kiểm tra xem ô tiếp theo bên phải đã được đánh chưa
    if (squares[curRow][curCol] !== null) {
      // Nếu đã được đánh thì có bằng quân cờ hiện tại đang check không
      if (squares[curRow][curCol] === valCheck) {
        temp += 1;
        // Thêm vị trí quân cờ vào danh sách các quân cờ tạo nên chiến thắng
        const location = {
          row: curRow,
          col: curCol
        };
        listWin.push(location);
        curRow += 1;
        curCol += 1;
      } else {
        // Quân cờ khác, nghĩa là bị chặn
        chanDau += 1;
        break;
      }
    } else {
      // Chưa được đánh. Thoát vòng lặp
      break;
    }
  }

  curRow = row - 1;
  curCol = col - 1;
  // Duyệt hàng chéo xuôi lên trên
  while (curRow >= 0 && curCol >= 0) {
    // Kiểm tra xem ô tiếp theo bên phải đã được đánh chưa
    if (squares[curRow][curCol] !== null) {
      // Nếu đã được đánh thì có bằng quân cờ hiện tại đang check không
      if (squares[curRow][curCol] === valCheck) {
        temp += 1;
        // Thêm vị trí quân cờ vào danh sách các quân cờ tạo nên chiến thắng
        const location = {
          row: curRow,
          col: curCol
        };
        listWin.push(location);
        curRow -= 1;
        curCol -= 1;
      } else {
        // Quân cờ khác, nghĩa là bị chặn
        chanDau += 1;
        break;
      }
    } else {
      // Chưa được đánh. Thoát vòng lặp
      break;
    }
  }

  if (temp >= 5 && chanDau < 2) {
    return {
      isFinish: true,
      listWin
    };
  }

  // Duyệt xong hàng chéo xuôi reset lại value để duyệt hàng chéo ngược
  temp = 1;
  chanDau = 0;
  curRow = row - 1;
  curCol = col + 1;
  listWin = listWin.slice(0, 1);
  // Duyệt hàng chéo ngược lên trên
  while (curRow >= 0 && curCol < 20) {
    // Kiểm tra xem ô tiếp theo bên phải đã được đánh chưa
    if (squares[curRow][curCol] !== null) {
      // Nếu đã được đánh thì có bằng quân cờ hiện tại đang check không
      if (squares[curRow][curCol] === valCheck) {
        temp += 1;
        // Thêm vị trí quân cờ vào danh sách các quân cờ tạo nên chiến thắng
        const location = {
          row: curRow,
          col: curCol
        };
        listWin.push(location);
        curRow -= 1;
        curCol += 1;
      } else {
        // Quân cờ khác, nghĩa là bị chặn
        chanDau += 1;
        break;
      }
    } else {
      // Chưa được đánh. Thoát vòng lặp
      break;
    }
  }

  curRow = row + 1;
  curCol = col - 1;
  // Duyệt hàng chéo ngược xuống dưới
  while (curRow < 20 && curCol >= 0) {
    // Kiểm tra xem ô tiếp theo bên phải đã được đánh chưa
    if (squares[curRow][curCol] !== null) {
      // Nếu đã được đánh thì có bằng quân cờ hiện tại đang check không
      if (squares[curRow][curCol] === valCheck) {
        temp += 1;
        // Thêm vị trí quân cờ vào danh sách các quân cờ tạo nên chiến thắng
        const location = {
          row: curRow,
          col: curCol
        };
        listWin.push(location);
        curRow += 1;
        curCol -= 1;
      } else {
        // Quân cờ khác, nghĩa là bị chặn
        chanDau += 1;
        break;
      }
    } else {
      // Chưa được đánh. Thoát vòng lặp
      break;
    }
  }

  if (temp >= 5 && chanDau < 2) {
    return {
      isFinish: true,
      listWin
    };
  }
  return {
    isFinish: false,
    listWin: [
      {
        row: null,
        col: null
      }
    ]
  };
};



/* GET home page. */
router.post('/find-player', function(req, res, next) {
  const {user} = res.locals;
  const {io} = req.app;
  if (listPlayerWaiting.length > 0 && user.username !== listPlayerWaiting[0].username) {
    const playerX = listPlayerWaiting.shift();
    const playerO = user;
    const roomId = uuidv1();
    const roomInfo = {
      roomId: roomId,
      playerX: playerX,
      playerO: playerO,
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
      nextPlayer: playerX, // Kiểm tra ai là người chơi tiếp theo
      isFinish: false, // Kiểm tra xem đã có người win chưa
      stepNumber: 0, // Nước đi hiện tại
      isReverse: false, // Biến kiểm tra đảo ngược danh sách nước đi
      listWin: [
        {
          row: null,
          col: null
        }
      ], // Danh sách vị trí những quân cờ tạo chiến thắng
      listMessage: [] // Lưu trữ tin nhắn
    }
    listRoom.set(roomId, roomInfo);
    io.sockets.emit('findPlayerSuccess' + playerX.username, {roomId: roomId, roomInfo: roomInfo});
    res.json({'message': 'Find Player Success', 'roomInfo' : roomInfo, 'roomId': roomId });
  } else  {
    listPlayerWaiting.push(user);
    res.json({'message': 'Please Waiting'});
  }
});

/**
 * Người chơi thực hiện đánh vào 1 ô chưa có nước đi
 */
router.post('/click-square', (req, res) => {

  const {roomId, row, col} = req.body;
  const {user} = res.locals;
  const roomInfo = listRoom.get(roomId);
  console.log('test---------------------------------------------------------------------------------------');
  // console.log(roomInfo);
  
  if (roomInfo === null || roomInfo === undefined) {
    res.json({'error': "Can't find room"})
  }
  const {playerX, playerO, nextPlayer, historys, isFinish} = roomInfo;
  console.log('nextPlayer:', nextPlayer);
  console.log('user: ', user);
  if (user.username !== playerX.username && user.username !== playerO.username){
   
    res.json({'error': 'User not exist'});
  }

  // Không phải lượt đi của user này
  if (user.username !== nextPlayer.username) {
    res.json({'error': 'Not your turn'});
  } else {
    const copyHistorys = historys.slice(0, historys.length);

    const currentHistory = copyHistorys[historys.length -1];
    const squares = [];
      for (let i = 0; i < currentHistory.squares.length; i += 1) {
        squares.push(currentHistory.squares[i].slice());
      }
      if (squares[row][col] === null && isFinish === false) {
        squares[row][col] = nextPlayer.username === playerX.username ? 'X' : 'O';
        const next = nextPlayer.username === playerX.username ? playerO : playerX;
        console.log('next: ', next);
        // Khi người chơi đánh 1 quân cờ thì list win sẽ bị reset
        newRoomInfo = Object.assign({}, roomInfo, {
          historys: copyHistorys.concat([
            {
              squares,
              row,
              col
            }
          ]),
          nextPlayer: next,
          stepNumber: copyHistorys.length,
          listWin: [
            {
              row: null,
              col: null
            }
          ]
        });
        checkGameFinish = checkWinner(newRoomInfo.historys, row, col);
        newRoomInfo.isFinish = checkGameFinish.isFinish;
        newRoomInfo.listWin = checkGameFinish.listWin;
        listRoom.set(roomId, newRoomInfo);
        req.app.io.emit('updateGame' + next.username, {roomInfo: newRoomInfo});
        res.json({roomInfo: newRoomInfo});
      }
  }
  
});

router.post('/send-message', (req, res) => {

  const {roomId, message} = req.body;
  const {user} = res.locals;
  const roomInfo = listRoom.get(roomId);
  
  const {listMessage, playerX, playerO} = roomInfo;
  const toUser = user.username === playerX.username ? playerO.username : playerX.username;
  listMessage.push({fromUser: user, message: message});
  req.app.io.emit('updateListMessage' + toUser, {listMessage: listMessage});
  res.json({listMessage: listMessage});
});
module.exports = router;
