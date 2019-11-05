import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import fetchFindPlayer from '../api/findPlayerApi';
import socketIOClient from 'socket.io-client';
import {connect} from 'react-redux';
import { isNullOrUndefined } from 'util';
import { SOCKET_EVENT } from '../common/constant';
import { findPlayerSuccess } from '../action/gameAction';
import ModalLoading from './Modal/ModalLoading';
class MenuGame extends Component {

  /**
   * Tìm kiếm người chơi khác để bắt đầu game
   */
  handleClickFindPlayer = async() => {
    console.log('find player');
    const {fetchFindPlayer} = this.props;
    const {token} = this.props.userLogin;
    console.log(this.props);
    await fetchFindPlayer(token);
    const {isConnect, roomId} = this.props.gameInfo;
    if (isConnect) {
      return this.props.history.push('/room/'+ roomId);
    }
  }

  checkLogin = () => {
    const {token} = this.props.userLogin;
    if (isNullOrUndefined(token)) {
      return this.props.history.push('/login');
    }
  }

  componentDidMount = () => {
    const {user} = this.props.userLogin;
    if (user) {
      const {username} = this.props.userLogin.user;
      const io = socketIOClient('http://localhost:3001');
      io.on(SOCKET_EVENT.FIND_PLAYER_SUCCESS + username, (data)=>{
        const {roomId, roomInfo} = data;
        const {findPlayerSuccess} = this.props;
        findPlayerSuccess(roomId, roomInfo);
        const {isConnect} = this.props.gameInfo;
        if (isConnect) {
          console.log('connec socket io');
          return this.props.history.push('/room/'+ roomId);
        }
      });
    }
  }
  render() {
    this.checkLogin();
    return (
     
      <Container className="text-center">
        <ModalLoading/>
        <Row>
          <Col>
            Menu Game
          </Col>
          
           
        </Row>
        <Row>
          <Col>
            <button className="btn-triangle" onClick= {()=> this.handleClickFindPlayer()}>
              Tìm Người chơi
            </button>
          </Col>
        </Row>

        <Row>
          <Col>
            <button className="btn-triangle">
            Chơi với máy
            </button>
          </Col>
        </Row>
      </Container>
    )
  }
}


const mapStateToProps = (state) => ({
  gameInfo: state.gameInfo,
  userLogin: state.userLogin
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchFindPlayer: fetchFindPlayer, findPlayerSuccess: findPlayerSuccess}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(MenuGame);