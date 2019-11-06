import React, { Component } from 'react'
import { Modal, Container, Row, Col, Button } from 'react-bootstrap';
 
class ModalLose extends Component {
  render() {
    return (
        <Modal show={this.props.isShow} centered = {true}>
            <Modal.Header className="content-center">
                <Modal.Title >Bạn Đã Thua</Modal.Title>
            </Modal.Header>
            {/* <Modal.Body>  */}
                <Container>
                    <Row className="text-center content-center">
                        <Col>
                            <p>Bạn đã thua mất rồi.</p>
                            <br/>
                            <p> Bạn có muốn chơi game mới không?</p>
                        </Col>
 
                    </Row>
                </Container>
 
            {/* </Modal.Body> */}
            <Modal.Footer>
            <Button variant="secondary" onClick={()=> this.handleClickOk()}>
                Rời phòng
            </Button>
            <Button variant="primary" onClick={() => this.handleClickNo()}>
                Game mới
            </Button>
            </Modal.Footer>
        </Modal>
    );
  }
}
 
export default ModalLose;