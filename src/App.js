import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Leftbar from './components/leftbar/leftbar';
import Middlebar from './components/middlebar/middlebar';
import Rightbar from './components/rightbar/rightbar';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Leftbar />
        <Middlebar />
        <Rightbar />
      </div>
    );
  }
}

export default App;
