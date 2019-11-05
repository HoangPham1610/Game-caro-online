import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

class ListGameButon extends Component {
    render() {
        return (
            <Container className="list-game-button">
                <Row>
                    <Col>
                        <Button> Xin đánh lại</Button>
                    </Col>
                    <Col>
                        <Button  variant="warning"> Xin hòa</Button>
                    </Col>
                    <Col>
                        <Button  variant="danger"> Đầu hàng</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ListGameButon;