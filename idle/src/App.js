import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout';
import ExpCounter from './components/ExpCounter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ExpCounter/>
        <Layout/>
      </div>
    );
  }
}

export default App;
