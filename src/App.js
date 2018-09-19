import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import LoginContainer from './components/Login/LoginContainer'
import SignupContainer from './components/Signup/SignupContainer'
import Home from './components/Home'
class App extends Component {

  render() {
    return (

    <Router>
      <div>
        <Link to="/">Login</Link>
        <Link to="/signup">Signup</Link>
        <hr></hr>
        <Route exact path="/" component={LoginContainer} />
        <Route path="/signup" component={SignupContainer} />
        <Route path="/home" component={Home} />
      </div>
    </Router>
      


    )
  }
}


export default App
