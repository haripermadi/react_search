import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tickers from './components/Tickers.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Cryptocurrency</h1>
        </header>
        <Tickers/>
      </div>
    );
  }
}

export default App;
