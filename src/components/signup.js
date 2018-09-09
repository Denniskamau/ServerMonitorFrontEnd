import React ,{ Component}from 'react'
import { Field, reduxForm, SubmissionError  } from 'redux-form'
import isValidEmail from 'sane-email-validation'
import {signUpUser} from '../actions/userAction' 
import formcomponent from './formcomponent'

import store from '../store';

class SignupForm extends Component {
    constructor(props){
        super(props)
        this.state ={
            loading: true,
            error: '',
            userToken: '' 
        }

        this.getStoreState = this.getStoreState.bind(this)
    }


    submitToServer = (data)=> {
        this.props.dispatch(signUpUser(data))
        
      }


    componentDidUpdate(prevState) {
        this.getStoreState()
      }
    
    getStoreState = () => {
        const state = store.getState()
        
        if (state.user.error){
            const error = state.user.error
            this.setState({
                error:error
            })
        }

        return this.state
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
                return this.submitToServer(data)
        }
    
    }
    render() {
        const {handleSubmit, pristine, submitting } = this.props
        const checkState = this.getStoreState()
        return (
            <div class="card border-primary mb-3" >
                <div class="card-header">Signup</div>
                    <div class="form-group card-body"> 
                    <h4 class="card-title">Create an account with us</h4>
                    <form onSubmit={ handleSubmit(this.submit)}>
                    
                    <div>
                        
                        <Field name="email" label="Email" component={formcomponent} type="email" placeholder="Email"/>
                    </div>
                    <div>
                        
                        <Field name="password" label="Password" component={formcomponent} type="password" placeholder="Password"/>
                    </div>
                    
                    <button class="btn btn-primary" type="submit" disabled={pristine || submitting}>Submit</button>
                    <p>{checkState.error}</p>
                    </form>
                    
                    </div>
            </div>


        )
    }
}



SignupForm = reduxForm({
    form: 'SignupForm'
})(SignupForm)



export default SignupForm