const express = require('express');
const router = express.Router();
const uuidv1 = require('uuid/v1');


/**
 * Kiểm tra người chơi vừa đánh đã thắng hay chưa
 */
const checkWinner = (state, row, col) => {
  const { historys } = state;
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
  if (listPlayerWaiting.length > 0 && user.username !== listPlayerWaiting[0].username) {
    const playerX = listPlayerWaiting.shift();
    console.log('playerX:', playerX);
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
      nextPlayer: playerX.username, // Kiểm tra ai là người chơi tiếp theo
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
    listRoom.set(roomId, roomInfo);
    res.json({'message': 'Find Player Success', 'roomInfo' : roomInfo, 'roomId': roomId });
  } else  {
    listPlayerWaiting.push(user);
    res.json({'message': 'Please Waiting'});
  }
});

router.post('/play', (req, res) => {
  const {roomId, row, col} = req.body;
  const {user} = res.locals;
  const roomInfo = listRoom.get(roomId);
  if (isNullOrUndefined(roomInfo)) {
    res.json({'error': "Can't find room"})
  }
  const {playerX, playerO, nextPlayer, historys} = roomInfo;
  if (user.username !== playerX.username || user.username !== playerO.username){
    res.json({'error': 'User not exist'});
  }

  // Không phải lượt đi của user này
  if (user.username !== nextPlayer) {
    res.json({'message': 'Not your turn'});
  } else {
    const copyHistory = historys.slice(0, historys.length);
    const currentHistory = copyHistory[history.length -1];
    const squares = [];
      for (let i = 0; i < currentHistory.squares.length; i += 1) {
        squares.push(currentHistory.squares[i].slice());
      }

      if (squares[row][col] === null && isFinish === false) {
        squares[row][col] = xIsNext ? 'X' : 'O';
        // Khi người chơi đánh 1 quân cờ thì list win sẽ bị reset
        newState = {
          ...state,
          historys: newHistorys.concat([
            {
              squares,
              row,
              col
            }
          ]),
          xIsNext: !xIsNext,
          stepNumber: newHistorys.length,
          listWin: [
            {
              row: null,
              col: null
            }
          ]
        };
        checkGameFinish = checkWinner(newState, row, col);
        newState.isFinish = checkGameFinish.isFinish;
        newState.listWin = checkGameFinish.listWin;
        return newState;
      }
  }
  
});

module.exports = router;
