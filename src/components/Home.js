import React , {Component} from 'react'
import SignupForm from './signup'


export default class Home extends Component {
    handleSubmit = (values) => {
        // Do something with the form values
        console.log(values);
      }
    render() {
        <SignupForm onSubmit={this.handleSubmit} />
    }
}