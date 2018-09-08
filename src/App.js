import React, { Component } from 'react';
import './App.css';
import Signup from './components/signup';
import Login from './components/login'

class App extends Component {

  render() {
    return (
      // <div><Login ></Login></div>
      <div>
        <Signup store={this.props.store}></Signup>
        <hr></hr>
        <Login store={this.props.store}></Login>
      </div>

    )
  }
}


export default App
