import React, { Component } from 'react';

class History extends Component {
    render() {
        return (
            <div>
                <button
                    type="button"className="btn btn-primary"
                    onClick={() => {
                        this.handleClickNewGame();
                    }}
                    >
                    New Game
                </button>
                {/* {this.renderStatus()}
                <ol reversed={isReverse ? 'reverse' : ''}>
                {this.renderHistory(isReverse)}
                </ol> */}
                <button
                    type="button"
                        className="btn btn-warning btn-margin"
                        onClick={() => {
                            this.handleClickReverse();
                        }}
                        >
                        Reverse
                </button>
            </div> 
        );
    }
}

export default History;