import React from 'react'
import { reduxForm, SubmissionError } from 'redux-form'
import isValidEmail from 'sane-email-validation'
import LoginForm from './LoginForm'
import { getUser } from '../../actions/userAction'


export  function validation(data){
    // console.log('hello from submit', data)
    // console.log('submitting Form: ', data.email);
    // console.log('submitting Form: ', data.password);
    let errors ={}
    let isError = false
    if(data.email== undefined && data.password== undefined){
        errors.email = 'Required'
        errors.password = 'Required'
        isError = true
    }
    if (data.email == undefined){
        errors.email = 'Required'
        // console.log('email',errors.email)
        isError = true
        // return errors
    }else if (!isValidEmail(data.email)){
        
            let error = 'Invalid email'
            errors.email = error
            isError = true
        
    }
    if (data.password == undefined ){
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
        let data ={}
        data.email = data.email
        data.password = data.password
        this.props.dispatch(getUser(data))
        // return this.submitToServer(data)
}

}


export const FormContainer = ({ handleSubmit}) => {
    const submitForm = (formValues) => {
        validation(formValues)  
    }

    return (
        <LoginForm 
            onSubmit={submitForm}
            handleSubmit={handleSubmit}
        />
        
    )
}

const formConfiguration = {
    form: 'login',
    validation
}

export default reduxForm(formConfiguration)(FormContainer)