import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Player from './Player';
import Game from './Game';
import ChatForm from './ChatForm';
import History from './History';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import socketIOClient from 'socket.io-client';
import { isNullOrUndefined } from 'util';
import ListGameButon from './ListButtonGame';
import { SOCKET_EVENT } from '../common/constant';
import ModalConfirmTie from './Modal/ModalConfirmTie';
import ModalWinner from './Modal/ModalWinner';
import { fetchClickNewGame } from '../api/playGameApi';
class RoomGame extends Component {
    constructor () {
        super();
        this.state = {
            showModalTie: false,
            showModalWinner: false
        }
    }
    checkLogin = () => {
        const {token} = this.props.userLogin;
        if (isNullOrUndefined(token)) {
          return this.props.history.push('/login');
        }
    }
 
    componentWillMount = () => {
        this.checkLogin();
    }
 
    handleCloseModalTie = () => {
        this.setState(Object.assign({}, this.state, {showModalTie: false}));
    }
    componentDidMount = () => {
        const {user} = this.props.userLogin;
        if (user) {
            const {username} = this.props.userLogin.user;
            const io = socketIOClient('http://localhost:3001');
            io.on(SOCKET_EVENT.PLAYER_WANT_TIE + username, ()=>{
                // const {roomId, roomInfo} = data;
                // const {findPlayerSuccess} = this.props;
                console.log('show');
                this.setState(Object.assign({}, this.state, {showModalTie: true}));
            });
        }
    }

    handleClickNewGame = () => {
        console.log('click nè');
        this.setState(Object.assign({}, this.state, {showModalWinner: false}));
        const {roomId} = this.props.gameInfo;
        const {token} = this.props.userLogin;
        const {fetchClickNewGame} = this.props;
        
        fetchClickNewGame(roomId, token);
        
    }
 
    handleClickLeave = () => {

    }
    renderModalTie = () => {
        return <ModalConfirmTie isShow = {this.state.showModalTie} handleCloseModalTie = {()=> this.handleCloseModalTie()}/>
    }
 
    renderModalWinner = () => {
        return <ModalWinner isShow = {this.state.showModalWinner} handleClickNewGame = {() => this.handleClickNewGame()}/>
    }
 
    checkGameFinish = () => {
       
    }
    componentDidMount = () => {
        const {isFinish, winPlayer} = this.props.gameInfo.roomInfo;
        const {user} = this.props.userLogin;
        if (isFinish && !this.state.showModalWinner) {
            if (winPlayer.username === user.username) {
                this.setState(Object.assign({}, this.state, {showModalWinner: true}));
            }
        }
    }
    render() {
        this.checkLogin();
        const {playerX, playerO, nextPlayer} = this.props.gameInfo.roomInfo;
        const {user} = this.props.userLogin;
        const nextPlayerName = nextPlayer ? nextPlayer.username : '';
        let leftPlayer = playerX;
        let rightPlayer = playerO;
        if (user) {
            if (user.username === playerO.username) {
                leftPlayer = playerO;
                rightPlayer = playerX;
            }
        }
        return (
            <Container>
                {/* {this.checkGameFinish()} */}
                {this.renderModalTie()}
                {this.renderModalWinner()}
                <Row>
                    <Col xs={3}>
                        <Player player = {leftPlayer}/>
                        <ChatForm/>
                    </Col>
                    <Col xs={6}>
                        <div>
                            <span>Đến lượt: {nextPlayerName}</span>
                        </div>
                        <ListGameButon/>
                        <Game/>
                    </Col>
                    <Col xs={3}>
                        <Player player = {rightPlayer}/>
                        <History/>
                    </Col>
                </Row>
            </Container>
        );
    }
}
const mapStateToProps = (state) => ({
    gameInfo: state.gameInfo,
    userLogin: state.userLogin
  });
 
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchClickNewGame: fetchClickNewGame}, dispatch);
  }
 
  export default connect(mapStateToProps, mapDispatchToProps)(RoomGame);