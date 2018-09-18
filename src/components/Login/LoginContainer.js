import React from 'react'
import { reduxForm, SubmissionError } from 'redux-form'
import isValidEmail from 'sane-email-validation'
import LoginForm from './LoginForm'
import { getUser } from '../../actions/userAction'


export  function validation(data){
    console.log('hello from submit', data)
    console.log('submitting Form: ', data.email);
    console.log('submitting Form: ', data.password);
    let errors ={}
    let isError = false
    if (data.email == undefined){
        errors.email = 'Required'
        console.log('email',errors.email)
        isError = true
    }
    if ( !data.email == undefined){
        if(!isValidEmail(data.email)){
            let error = 'Invalid email'
            errors.email = error
            isError = true
            console.log(errors.email)
            throw new SubmissionError(error)
        }
    }
    if (data.password == undefined ){
        errors.password ='Required'
        console.log(errors.password)
        isError = true
    }
    if(isError){
        console.log('all errors',errors)
        let message = new SubmissionError(errors)
        throw message
        return message.errors
        // throw new SubmissionError(errors)
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
        let data ={}
        data.email= formValues.email
        data.password = formValues.password 
        validation(data)
        
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