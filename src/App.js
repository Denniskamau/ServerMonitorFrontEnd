import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { defaultFunction } from './actions';
import {Router, Route} from 'react-router';
import Signup from './components/signup';

class App extends Component {

  componentDidMount() {
    // call default function to display redux operation
    this.props.defaultFunction();
  }

  render() {
    return (
      <div>
        <Signup></Signup>
      </div>
    );
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {
    default: state.default
  };
}

export default connect(mapStateToProps, { defaultFunction })(App);
