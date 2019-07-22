import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Cell extends Component {

  render() {
    return (
      <div
        onClick={e => {
          if (this.props.isInitial) {
            return;
          }
          this.props.onChange((this.props.number + 1) % 5);
        }}
        className={`cell ${this.props.isInitial ? 'initial' : ''}`}
      >
        {this.props.number !== 0 && this.props.number}
      </div>
    );
  }
}

class Board extends Component {
  state = {
    board: [[1, 2, 3, 4], [3, 4, 0, 0], [2, 0, 4, 0], [4, 0, 0, 2]],
    initial: [
      [true, true, true, true],
      [true, true, false, false],
      [true, false, true, false],
      [true, false, false, true]
    ]
  }
  render() {
    return (
      <div className="board">
        {
          this.state.board.map((row, i) =>
            row.map((number, j) =>
              <Cell
                key={`cell-${i}-${j}`}
                isInitial={this.state.initial[i][j]}
                number={number}
                onChange={(newNumber) => {
                  const { board } = this.state;
                  board[i][j] = newNumber
                  this.setState({
                    board
                  });
                }}
              />
            ))
        }
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App"><Board></Board></div>
    );
  }
}

export default App;
