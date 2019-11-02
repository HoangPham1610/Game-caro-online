import React, { Component } from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';

class ChatForm extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className="clear-padding">
                        <div className="chat-form">
                            <div className="chat-history">                               
                            </div>
                            <div className="input-chat text-center">
                                    <textarea rows={3} cols={28}/>
                                    <Button>Send</Button>
                                </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ChatForm;