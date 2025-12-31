import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
       <Greet></Greet>
      </div>
    );
  }
}

export default App;
