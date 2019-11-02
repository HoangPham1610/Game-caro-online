import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Player from './Player';
import Game from './Game';
import ChatForm from './ChatForm';
import History from './History';
class RoomGame extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={3}>
                        <Player/>
                        <ChatForm/>
                    </Col>
                    <Col xs={6}>
                        <Game/>
                    </Col>
                    <Col xs={3}>
                        <Player/>
                        <History/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default RoomGame;