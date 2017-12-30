import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import lodash;
import logo from './logo.svg';
import './App.css';

// TARGET SUM - Starting Template
const randomNumberBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

class Number extends React.Component {
  render() {
    return <div className="number">{this.props.value}</div>;
  }
}

class Game extends React.Component {

  challengeNumbers = Array
    .from({ length: this.props.challengeSize })
    .map(() => randomNumberBetween(...this.props.challengeRange));

  target = _.sampleSize(
    this.challengeNumbers,
    this.props.challengeSize - 2
  ).reduce((acc, curr) => acc + curr, 0);


  render() {
    return (
      <div className="game">
        <div className="help">
          Pick 4 numbers that sum to the target in 15 seconds
        </div>
        <div className="target">{this.target}</div>
        <div className="challenge-numbers">
          {this.challengeNumbers.map((value, index) =>
           <Number key={index} value={value} />
          )}
        </div>
        <div className="footer">
          <div className="timer-value">15</div>
          <button>Start</button>
        </div>
      </div>
    );
  }
}

export default Game;
