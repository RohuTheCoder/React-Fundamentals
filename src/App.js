import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import React from 'react';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <FunctionClick></FunctionClick>
       {/* <Counter /> */}
       {/* <Message /> */}
       {/* <Greet name="Bruce" heroName="Batman" />
        <p>This is children props</p>
       <Greet name="Clark" heroName="Superman" />
        <button>Action</button>
        </Greet>*/}
       {/* <Greet name="Diana" heroName="Wonder Woman" />
        <Welcome name="Bruce" heroName="Batman" /> */}
        {/* <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" /> */}
       {/* <Hello /> */}
      </div>
    );
  }
}

export default App;
