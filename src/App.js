import React, { Component } from 'react';
import './App.css'
import ClickCounter from './ClickCounter';
import HoverCounter from './components/HoverCounter';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ClickCounter />
        <HoverCounter />
      </div>
    );
  }
}

export default App;
