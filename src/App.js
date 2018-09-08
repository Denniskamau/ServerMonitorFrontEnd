import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
//import { defaultFunction } from './actions';
import {Router, Route} from 'react-router';
import Signup from './components/signup';
import Login from './components/login'

class App extends Component {

  // componentDidMount() {
  //   // call default function to display redux operation
  //   this.props.defaultFunction();
  // }

  render() {
    return (
      <div>
        {/* <Signup></Signup> */}
        <Login ></Login>
      </div>
    );
  }
}


export default App
