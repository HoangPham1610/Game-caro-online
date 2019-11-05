import React, { Component } from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import socketIOClient from 'socket.io-client';
import { fetchSendMessage } from '../api/playGameApi';
import { SOCKET_EVENT } from '../common/constant';
import { chat } from '../action/gameAction';
class ChatForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    componentDidMount = () => {
        const {user} = this.props.userLogin;
        if (user) {
          const {username} = this.props.userLogin.user;
          const io = socketIOClient('http://localhost:3001');
          io.on(SOCKET_EVENT.UPDATE_LIST_MESSAGE + username, (data)=>{
            const {listMessage} = data;
            const {chat} = this.props;
            chat(listMessage);
          });
        }
    }
    
    handleChangeMessage = (event) => {
        const message = event.target.value;
        this.setState(Object.assign({}, this.state, {message: message}))
    }
    handleClickSend = ()=>{
        const {fetchSendMessage} = this.props;
        const {token} = this.props.userLogin;
        const {roomId} = this.props.gameInfo;
        fetchSendMessage(roomId, this.state.message, token);
        this.setState(Object.assign({}, this.state, {message: ''}))
    }
    render() {
        const {listMessage} = this.props.gameInfo.roomInfo;
        const {user} = this.props.userLogin;
        console.log('list message: ', listMessage);
        return (
            <Container>
                <Row>
                    <Col className="clear-padding">
                        <div className="chat-form">
                            <div className="chat-history"> 
                               
                                {listMessage.map((value, index) => {
                                    const {fromUser, message} = value;
                                    if (user.username === fromUser.username) {
                                        return  <div className="chat-by-me" key = {index}><p className="chat-content">{message}</p></div>
                                    } else {
                                        return <div className="chat-by-player" key = {index}><p className="chat-content">{message}</p></div>
                                    }
                                })}                              
                            </div>
                            <div className="input-chat text-center">
                                    <textarea rows={4} cols={25} value = {this.state.message} onChange= {(event)=> this.handleChangeMessage(event)}/>
                                    <Button onClick={()=> this.handleClickSend()}>Send</Button>
                                </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    userLogin: state.userLogin,
    gameInfo: state.gameInfo,
});
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchSendMessage: fetchSendMessage, chat: chat}, dispatch);
}
export  default connect(mapStateToProps, mapDispatchToProps)(ChatForm);