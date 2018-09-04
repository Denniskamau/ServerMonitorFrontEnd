import React , {Component} from 'react'
import SignupForm from './signup'


export default class Home extends Component {
    // handleSubmit = (values) => {
    //     // Do something with the form values
    //     console.log(values);
    //   }
    Submit = (values) => {
        console.log('Values', values)
    }
    render() {

 
        <SignupForm onSubmit={this.Submit} />
    }
}