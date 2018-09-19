import React from 'react'
import { reduxForm, SubmissionError } from 'redux-form'
import isValidEmail from 'sane-email-validation'
import LoginForm from './LoginForm'
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import { getUser } from '../../actions/userAction';
import store from '../../store';

export  function validation(data){
    let errors ={}
    let isError = false
    console.log('data', data)
    if(data.email=== undefined && data.password=== undefined){
        errors.email = 'Required'
        errors.password = 'Required'
        isError = true
    }
    if (data.email === undefined){
        errors.email = 'Required'
        // console.log('email',errors.email)
        isError = true
        // return errors
    }else if (!isValidEmail(data.email)){
        
            let error = 'Invalid email'
            errors.email = error
            isError = true
        
    }
    if (data.password === undefined ){
        errors.password ='Required'
        // console.log(errors.password)
        isError = true
    }
    if(isError){    
        //console.log(new SubmissionError(errors))  
        //throw new SubmissionError(errors)
        console.log('errors', errors)
        return errors
    }else {
        // push data to api
        let user ={}
        user.password = data.password
        user.email = data.email
        console.log('user', user)
        store.dispatch(getUser(user))
        // return this.submitToServer(data)
}

}

function submitToServer(user,props){
    console.log('new user', user)
    return store.dispatch(getUser(user))
    //this.props.dispatch(getUser(user))
}


export const FormContainer = ({ handleSubmit, props}) => {
    const submitForm = (formValues) => {
        validation(formValues)  
    }

    return (
        <div>
       
         <LoginForm 
            onSubmit={submitForm}
            handleSubmit={handleSubmit}
        />
        </div>
    
        
    )
}

function mapDispatchToProps(dispatch){
    return {
        user:bindActionCreators(getUser,dispatch)
    }
}





const formConfiguration = connect(null, mapDispatchToProps)(FormContainer)


export default reduxForm({
    form:'login',
    validation
})(formConfiguration)

