import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import logo from './logo.svg';
import './App.css';

const colors = {
  new: 'lightblue',
  playing: 'deepskyblue',
  won: 'lightgreen',
  lost: 'lightcoral',
};

const randomNumberBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

class Number extends React.Component {
  render() {
    return (
      <div
        className="number"
        style={{ opacity: this.props.clickable ? 1 : 0.3 }}
        onClick={() => console.log(this.props.id)}
      >
        {this.props.value}
      </div>
    );
  }
}

class Game extends React.Component {
  state = {
    gameStatus: 'new', // new, playing, won, lost
    remainingSeconds: this.props.initialSeconds,
    selectedIds: [],
  };
  challengeNumbers = Array.from({
    length: this.props.challengeSize,
  }).map(() =>
    randomNumberBetween(...this.props.challengeRange)
  );
  target = _.sum(
    _.sampleSize(this.challengeNumbers, this.props.answerSize)
  );

  isNumberAvailable = numberIndex =>
    this.state.selectedIds.indexOf(numberIndex) === -1;

  render() {
    const { gameStatus, remainingSeconds } = this.state;
    return (
      <div className="game">
        <div className="help">
          Pick {this.props.answerSize} numbers that sum to the
          target in {this.props.initialSeconds} seconds
        </div>
        <div
          className="target"
          style={{ backgroundColor: colors[gameStatus] }}
        >
          {gameStatus === 'new' ? 'TARGET' : this.target}
        </div>
        <div className="challenge-numbers">
          {this.challengeNumbers.map((value, index) =>
            <Number
              key={index}
              id={index}
              value={gameStatus === 'new' ? '?' : value}
              clickable={this.isNumberAvailable(index)}
            />
          )}
        </div>
        <div className="footer">
          {gameStatus === 'new' &&
            <button>Start Game</button>}

          {gameStatus === 'playing' &&
            <div className="timer-value">{remainingSeconds}</div>
          }

          {['won', 'lost'].includes(gameStatus) &&
            <button>Play Again</button>
          }
        </div>
      </div>
    );
  }
}

class Page extends React.Component {

  render() {
    return (
      <Game
        challengeRange={[2, 9]}
        challengeSize={6}
        answerSize={4}
        initialSeconds={15}
      />
    )
  }
}

export default Page;
