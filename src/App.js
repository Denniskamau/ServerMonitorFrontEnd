import React, { Component } from 'react';
import Signup from './components/signup';
import Login from './components/login'
import LoginContainer from './components/Login/LoginContainer'
import SignupContainer from './components/Signup/SignupContainer'
class App extends Component {

  render() {
    return (
      // <div><Login ></Login></div>
      <div>
        {/* <Signup store={this.props.store}></Signup>
        <hr></hr>
        <Login store={this.props.store}></Login> */}
        <SignupContainer />
        <hr></hr>
        <LoginContainer />
      </div>

    )
  }
}


export default App
