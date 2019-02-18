import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button  from "./Button";
import AnotherButton  from "./AnotherButton";

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>HOC example</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <Button/>
          <AnotherButton/>
          <p>Both buttons are wrapped in a higher order component that injects them 2 props and manage the state of each one</p>
      </div>
    );
  }
}

export default App;
