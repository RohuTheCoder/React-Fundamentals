import React, { Component } from 'react';
import './App.css'
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ClickCounterTwo />
        <HoverCounterTwo />
      </div>
    );
  }
}

export default App;
