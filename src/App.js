import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Leftbar from './components/leftbar/leftbar';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Leftbar />
      </div>
    );
  }
}

export default App;
