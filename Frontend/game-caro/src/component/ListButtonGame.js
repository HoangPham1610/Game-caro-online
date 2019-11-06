import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {fetchClickBtnTie} from '../api/playGameApi';
class ListGameButon extends Component {
 
    handleClickTie = async() => {
        const {token} = this.props.userLogin;
        const {roomId} = this.props.gameInfo;
        await fetchClickBtnTie(roomId, token);
    }
    render() {
        return (
            <Container className="list-game-button">
                <Row>
                    <Col>
                        <Button> Xin đánh lại</Button>
                    </Col>
                    <Col>
                        <Button  variant="warning" onClick = {() => this.handleClickTie()}> Xin hòa</Button>
                    </Col>
                    <Col>
                        <Button  variant="danger"> Đầu hàng</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
const mapStateToProps = (state) => ({
    userLogin: state.userLogin,
    gameInfo: state.gameInfo
});
 
export default connect(mapStateToProps)(ListGameButon);