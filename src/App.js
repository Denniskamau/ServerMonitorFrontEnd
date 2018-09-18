import React, { Component } from 'react';
import Signup from './components/signup';
import Login from './components/login'
import LoginContainer from './components/Login/LoginContainer'

class App extends Component {

  render() {
    return (
      // <div><Login ></Login></div>
      <div>
        {/* <Signup store={this.props.store}></Signup>
        <hr></hr>
        <Login store={this.props.store}></Login> */}

        <LoginContainer />
      </div>

    )
  }
}


export default App
