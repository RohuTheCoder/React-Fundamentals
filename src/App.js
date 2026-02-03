import React, { Component } from 'react';
import './App.css'
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';


class App extends React.Component {
  render() {
    console.log('UserProvider in App:', UserProvider)
    return (
      <div className="App">
        <UserProvider value="Vishwas">
          <ComponentC />
        </UserProvider>
      </div>
    );
  }
}

export default App;
