import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from './Board';
import {Container, Row, Col} from 'react-bootstrap';
// import {
//   clickNewGame,
//   clickJumpTo,
//   clickSquare,
//   clickReverse
// } from '../actions/gameAction';

class Game extends Component {
  /**
   * Function: Xử lý sự kiện click vào square
   * @param row: Dòng được click
   * @param col: Cột được click
   */
  handleClickSquare = (row, col) => {
    const { handleClickSquare } = this.props;
    handleClickSquare(row, col);
  };

  handleClickNewGame = () => {
    const { handleClickNewGame } = this.props;
    handleClickNewGame();
  };

  jumpTo = step => {
    const { handleClickJumpTo } = this.props;
    handleClickJumpTo(step);
  };

  renderStatus = () => {
    const { state } = this.props;
    const { isFinish, xIsNext } = state;
    console.log('isFinish: ', isFinish);
    if (isFinish === false) {
      return <p>Next player: {xIsNext ? 'X' : 'O'}</p>;
    }
    // Người chiến thắng là người vừa đi xong.
    return <p>Winner player: {xIsNext ? 'O' : 'X'}</p>;
  };

  renderHistory = isReverse => {
    const { state } = this.props;
    const { historys, stepNumber } = state.roomInfo;
    // const current = history[this.state.stepNumber];
    // const winner = calculateWinner(current.squares);

    const moves = historys.map((step, move) => {
      const desc = move
        ? `Go to move #${move}(${step.row},${step.col})`
        : 'Go to game start';
      const indexHistory = move;
      if (stepNumber === move) {
        return (
          <li key={indexHistory}>
            <input
              type="button"
              className="btn btn-danger btn-margin"
              onClick={() => this.jumpTo(move)}
              value={desc}
            />
          </li>
        );
      }
      return (
        <li key={indexHistory}>
          <button
            type="button"
            className="btn btn-info btn-margin"
            onClick={() => this.jumpTo(move)}
          >
            {desc}
          </button>
        </li>
      );
    });
    if (isReverse === true) {
      return moves.reverse();
    }
    return moves;
  };

  handleClickReverse = () => {
    const { handleClickReverse } = this.props;
    handleClickReverse();
  };

  render() {
    const { state } = this.props;
    console.log(this.props);
    const { historys, stepNumber, listWin, isReverse } = state.roomInfo;
    console.log(historys, stepNumber);
    const current = historys[stepNumber];
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Board
              squares={current.squares}
              listWin={listWin}
              onClick={(row, col) => {
                this.handleClickSquare(row, col);
              }}
            />
          </div>
          {/* <div className="col-lg-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                this.handleClickNewGame();
              }}
            >
              New Game
            </button>
            {this.renderStatus()}
            <ol reversed={isReverse ? 'reverse' : ''}>
              {this.renderHistory(isReverse)}
            </ol>
            <button
              type="button"
              className="btn btn-warning btn-margin"
              onClick={() => {
                this.handleClickReverse();
              }}
            >
              Reverse
            </button>
          </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state: state.gameInfo
});

const mapDispatchToProps = dispatch => {
  return {
    // handleClickNewGame: () => dispatch(clickNewGame()),
    // handleClickSquare: (row, col) => dispatch(clickSquare(row, col)),
    // handleClickJumpTo: step => dispatch(clickJumpTo(step)),
    // handleClickReverse: () => dispatch(clickReverse())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
