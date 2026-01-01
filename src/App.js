import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import React from 'react';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

class App extends React.Component {
  render() {
    return (
      <div className="App">
       <Greet name="Bruce" />
       <Greet name="Clark" />
       <Greet name="Diana" />
       {/* <Welcome /> */}
       {/* <Hello /> */}
      </div>
    );
  }
}

export default App;
