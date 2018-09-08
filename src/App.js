import React, { Component } from 'react';
import './App.css';
import Signup from './components/signup';
import Login from './components/login'

class App extends Component {

  render() {
    return (
      // <div><Login ></Login></div>
      <div>
        <Signup></Signup>
        <hr></hr>
        <Login></Login>
      </div>

    )
  }
}


export default App
