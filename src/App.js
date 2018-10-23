import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import LoginContainer from './components/Login/LoginContainer'
import SignupContainer from './components/Signup/SignupContainer'
import Home from './components/Home'
import DashboardContainer from './components/Dashboard/DashboardContainer'
import {history} from './store'
import { ConnectedRouter } from 'connected-react-router'

class App extends Component {


  render() {
    return (

    <Router>
      <ConnectedRouter history={history}>
      <div>
        
        <Link to="/">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/">Logout</Link>
        <hr></hr>
        <Route exact path="/" component={LoginContainer}  />
        <Route path="/signup" component={SignupContainer} />
        <Route path = "/dashboard" component= {DashboardContainer} />
        <Route path="/home" component={Home} />
      </div>
      </ConnectedRouter>
    </Router>
      


    )
  }
}


export default App
