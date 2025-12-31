import logo from './logo.svg';
import './App.css';
import MyComponent from './components/Greet'
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
       <MyComponent />
      </div>
    );
  }
}

export default App;
