import React, { Component } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import {connect} from 'react-redux';
import { fetchClickReturnTie } from '../../api/playGameApi';
class ModalConfirmTie extends Component {
 
 
    handleClickOk = () => {
        const {roomId} = this.props.gameInfo;
        const {token} = this.props.userLogin;
        fetchClickReturnTie(roomId, token, true);
        this.props.handleCloseModalTie();
    }
 
    handleClickNo = () => {
        const {roomId} = this.props.gameInfo;
        const {token} = this.props.userLogin;
        fetchClickReturnTie(roomId, token, false);
        this.props.handleCloseModalTie();
    }
    render() {
 
        return (
            <Modal show={this.props.isShow} centered = {true}>
                <Modal.Header className="content-center">
                    <Modal.Title >Xin Hòa!</Modal.Title>
                </Modal.Header>
                {/* <Modal.Body>  */}
                    <Container>
                        <Row className="text-center content-center">
                            <Col>
                                <p>Đối thủ của bạn xin hòa. Bạn có đồng ý không?</p>
                            </Col>
 
                        </Row>
                    </Container>
 
                {/* </Modal.Body> */}
                <Modal.Footer>
                <Button variant="secondary" onClick={()=> this.handleClickOk()}>
                    Đồng ý
                </Button>
                <Button variant="primary" onClick={() => this.handleClickNo()}>
                    Không
                </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
 
const mapStateToProps = (state) => ({
  gameInfo: state.gameInfo,
  userLogin: state.userLogin
})
 
const mapDispatchToProps = {
 
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ModalConfirmTie);