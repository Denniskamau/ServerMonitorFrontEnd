import React , {Component} from 'react'
import {Link} from "react-router-dom"

export  class Home extends Component {

    render() {
        return (
            <div>
            <div>Welcome Home</div>
            <button><Link to='/'>logout</Link></button>
            </div>
            
        )
       
    }
}

export default Home