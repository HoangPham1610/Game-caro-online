import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import fetchLogin from '../api/loginApi';

import {connect} from 'react-redux';
import { isNullOrUndefined } from 'util';
class MenuGame extends Component {

  checkLogin = () => {
    if (isNullOrUndefined(this.props.state.token)) {
      return this.props.history.push('/login');
    }
  }
  render() {
    this.checkLogin();
    return (
     
      <Container className="text-center">
        <Row>
          <Col>
            Menu Game
          </Col>
          
           
        </Row>
        <Row>
          <Col>
            <button className="btn-triangle">
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
  state: state.userLogin
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchLogin: fetchLogin}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(MenuGame);