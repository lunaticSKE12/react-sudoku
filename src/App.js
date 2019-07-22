import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Cell extends Component {
  render() {
    return (<div className="cell">1</div>)
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="board">
          <div className="cell">1</div>
          <div className="cell">1</div>
          <div className="cell">1</div>
          <div className="cell">1</div>
          <div className="cell">1</div>
          <div className="cell">1</div>
          <div className="cell">1</div>
          <div className="cell">1</div>
          <div className="cell">1</div>
          <div className="cell">1</div>
          <div className="cell">1</div>
          <div className="cell">1</div>
          <div className="cell">1</div>
          <div className="cell">1</div>
          <div className="cell">1</div>
          <div className="cell">1</div>
        </div>
      </div>
    );
  }
}

export default App;
