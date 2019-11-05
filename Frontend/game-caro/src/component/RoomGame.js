import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Player from './Player';
import Game from './Game';
import ChatForm from './ChatForm';
import History from './History';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { isNullOrUndefined } from 'util';
import ListGameButon from './ListButtonGame';
class RoomGame extends Component {
    checkLogin = () => {
        const {token} = this.props.userLogin;
        if (isNullOrUndefined(token)) {
          return this.props.history.push('/login');
        }
    }
    
    componentWillMount = () => {
        this.checkLogin();
    }
    render() {
        const {playerX, playerO, nextPlayer} = this.props.gameInfo.roomInfo;
        const {user} = this.props.userLogin;
        let leftPlayer = playerX;
        let rightPlayer = playerO;
        if (user.username === playerO.username) {
            leftPlayer = playerO;
            rightPlayer = playerX;
        }
        return (
            <Container>
                <Row>
                    <Col xs={3}>
                        <Player player = {leftPlayer}/>
                        <ChatForm/>
                    </Col>
                    <Col xs={6}>
                        <div>
                            <span>Đến lượt: {nextPlayer.username}</span>
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
    // return bindActionCreators({fetchFindPlayer: fetchFindPlayer, findPlayerSuccess: findPlayerSuccess}, dispatch);
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(RoomGame);