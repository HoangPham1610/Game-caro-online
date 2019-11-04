import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
class Player extends Component {
    render() {
        return (
            <Card>
                <Card.Img variant="top" src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/560187_128403440671657_2007208875_n.jpg?_nc_cat=108&cachebreaker=hd&_nc_oc=AQmV2uOVdB8OsrpXsr1AQjgnuJgokRcmaGj3B8GppvQZdUT6HCrbhcGLmmqyHH5AOAg&_nc_ht=scontent.fsgn2-3.fna&oh=3b06600b59ea18ff815c3b991d850620&oe=5E606D7F" />
                <Card.Body>
                    <Card.Title class="text-center">{this.props.player.username}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default Player;