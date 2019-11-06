import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
class Player extends Component {
    render() {
        const {player} = this.props;
        const playerName = player ? player.username : '';
        return (
            <div className="player-game-info">
                <Container>
                    <Row>
                        <Col xs={4}>
                            <Image
                                className="user-avatar"
                                src="https://s...content-available-to-author-only...n.net/v/t1.0-9/560187_128403440671657_2007208875_n.jpg?_nc_cat=108&cachebreaker=hd&_nc_oc=AQmV2uOVdB8OsrpXsr1AQjgnuJgokRcmaGj3B8GppvQZdUT6HCrbhcGLmmqyHH5AOAg&_nc_ht=scontent.fsgn2-3.fna&oh=3b06600b59ea18ff815c3b991d850620&oe=5E606D7F"
                                roundedCircle
                            />
 
                        </Col>
                        <Col xs={8}>
                            {playerName}
                        </Col>
                    </Row>
                </Container>
            </div>
 
        );
    }
}
 
export default Player;