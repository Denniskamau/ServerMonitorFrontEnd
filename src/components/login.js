import React, { Component} from 'react'
import { Field, reduxForm, SubmissionError  } from 'redux-form'
import isValidEmail from 'sane-email-validation'
import { connect} from 'react-redux'
import { getUser } from '../actions/userAction'


class LoginForm extends Component {
    // handleSubmit = (user) => {

    // }
    constructor(props){
        super(props)
    }

    submitToServer = (data)=> {
    console.log('data', data)
    this.props.dispatch(getUser(data))
    
  }
   
     submit =  ({email='',password='',dispatch}) => {
        let errors ={}
        let isError = false
        if (email.trim() === ''){
            errors.email = 'Required'
            isError = true
        }
        if(!isValidEmail(email)){
            let error = 'Invalid email'
            errors.email = error
            console.log(JSON.stringify(errors))
            isError = true
            throw new SubmissionError(error)
        }
        if (password.trim()=== ''){
            errors.password ='Required'
            isError = true
        }
        if(isError){
            throw new SubmissionError(errors)
        }else {
            // push data to api
            let data ={}
            data.email = email
            data.password = password
            console.log(JSON.stringify(data))
            console.log('sending data')
            return this.submitToServer(data)
    }

}


    renderField = ({type,input ,label, meta:{touched,error}}) => {(
        <div className="input-row">
        <label>{label}</label>
        <input {...input} type={type}/>
        {touched && error && 
        <span className="error">{error}</span>}
        </div>
    )
    }

    render() {
        const {handleSubmit, pristine, submitting } = this.props

        return (
            <form onSubmit={ handleSubmit(this.submit)}>
            <div>
                <label>Email</label>
                <Field name="email" label="Email" component="input" type="email" placeholder="Email"/>
            </div>
            <div>
                <label>Password</label>
                <Field name="password" label="Password" component="input" type="password" placeholder="Password"/>
            </div>
            
            <button  type="submit" disabled={pristine || submitting}>Submit</button>
            </form>
        )
    }
}




LoginForm = reduxForm({
    form: 'LoginForm'
})(LoginForm)



export default LoginForm
