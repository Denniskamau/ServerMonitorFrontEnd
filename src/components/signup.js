import React ,{ Component}from 'react'
import { Field, reduxForm, SubmissionError  } from 'redux-form'
import isValidEmail from 'sane-email-validation'
import {signUpUser} from '../actions/userAction'  

class SignupForm extends Component {


    submitToServer = (data)=> {
        console.log('data', data)
        this.props.dispatch(signUpUser(data))
        
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
    render() {
        const {handleSubmit, pristine, submitting } = this.props
        return (
            <div><h1>singup</h1> 
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
            </div>


        )
    }
}


export default reduxForm({
    form: 'SignupForm'
})(SignupForm)