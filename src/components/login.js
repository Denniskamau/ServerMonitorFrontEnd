import React, { Component} from 'react'
import { Field, reduxForm, SubmissionError  } from 'redux-form'
import isValidEmail from 'sane-email-validation'
import { getUser } from '../actions/userAction'
import formcomponent from './formcomponent'
import store from '../store';


class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state ={
            loading: true,
            error: '',
            userToken: '' 
        }

        this.getStoreState = this.getStoreState.bind(this)
        this.submit = this.submit.bind(this)
    }

// push data to action responsible for submiting to backend
    submitToServer = (data)=> {
    this.props.dispatch(getUser(data))
  }

// Get the updated store state
  componentDidUpdate() {
    this.getStoreState()
  }

// Handle validation of Form data
  submit =  (val) => {

    return val
//     if (email.trim() === ''){
//         errors.email = 'Required'
//         isError = true
//         throw new SubmissionError(errors.email)
//     }
//     if(!isValidEmail(email)){
//         let error = 'Invalid email'
//         errors.email = error
//         isError = true
//         throw new SubmissionError(error)
//     }
//     if (password.trim()=== ''){
//         errors.password ='Required'
//         isError = true
//     }
//     if(isError){
//         return errors
//         // throw new SubmissionError(errors)
//     }else {
//         // push data to api
//         let data ={}
//         data.email = email
//         data.password = password
//         return this.submitToServer(data)
// }

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
    render() {
        const {handleSubmit, pristine, submitting } = this.props
        const testState = this.getStoreState()

        return (
            <div class="card border-primary mb-3" className='loginForm'>
                <div class="card-header">Login</div>
                <div class="form-group card-body"> 
                    <h4 class="card-title">Login to your account</h4>
                    <form onSubmit={ handleSubmit(this.submit)} >
                    
                    <div>
                        
                        <Field name="email" label="Email" component={formcomponent} type="email" placeholder="Email" />
                    </div>
                    <div>
                        
                        <Field name="password" label="Password" component={formcomponent} type="password" placeholder="Password" />
                    </div>
                    
                    <button id="foo" className="create" class="btn btn-primary" type="submit" variant="raised" color="primary" disabled={pristine || submitting}>Submit</button>
                    <p>{testState.error}</p>
                    </form>
                </div>
            </div>
        )
    }
}




LoginForm = reduxForm({
    form: 'LoginForm'
})(LoginForm)


export default LoginForm
