import React, { Component } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import {connect} from 'react-redux';
class ModalLoading extends Component {
  
    
    render() {
        const {isWaiting} = this.props.gameInfo;
        return (
            <Modal show={isWaiting} centered = {true}>
                <Modal.Header className="content-center">
                    <Modal.Title >Vui lòng đợi người chơi khác</Modal.Title>
                </Modal.Header>
                {/* <Modal.Body>  */}
                    <Container>
                        <Row className="text-center content-center">
                            <Col>
                                <div className="loader"></div>
                            </Col>
                            
                        </Row>
                    </Container>
                
                {/* </Modal.Body> */}
                {/* <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalLoading);