import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import fetchFindPlayer from '../api/findPlayerApi';

import {connect} from 'react-redux';
import { isNullOrUndefined } from 'util';
class MenuGame extends Component {

  /**
   * Tìm kiếm người chơi khác để bắt đầu game
   */
  handleClickFindPlayer = async() => {
    console.log('find player');
    const {fetchFindPlayer} = this.props;
    const {token} = this.props.userInfo;
    console.log(this.props);
    await fetchFindPlayer(token);
    const {isConnect, roomId} = this.props.state;
    if (isConnect) {
      return this.props.history.push('/room/'+ roomId);
    }
  }

  checkLogin = () => {
    if (isNullOrUndefined(this.props.state.token)) {
      return this.props.history.push('/login');
    }
  }
  render() {
    // this.checkLogin();
    return (
     
      <Container className="text-center">
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
  state: state.gameInfo,
  userInfo: state.userLogin
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchFindPlayer: fetchFindPlayer}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(MenuGame);