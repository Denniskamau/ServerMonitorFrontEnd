import React, { Component } from 'react';
import {Router, Route, Link } from 'react-router-dom'
import LoginContainer from './components/Login/LoginContainer'
import SignupContainer from './components/Signup/SignupContainer'
class App extends Component {

  render() {
    return (

      
      <div>
        <header>
          <Link to="/" >Login</Link>
          <Link to="/signup">Signup</Link>
        </header>

        <main>

          <Route exact path="/" component={LoginContainer}/>
          <Route  path="/signup" copmonent={SignupContainer}/>
        </main>
      </div>
      


    )
  }
}


export default App
