import React from 'react'
import { reduxForm, SubmissionError } from 'redux-form'
import isValidEmail from 'sane-email-validation'
import LoginForm from './LoginForm'
import { getUser } from '../../actions/userAction'

 const validation = ({email='', password=''})=>{
    console.log('submitting Form: ', email);
    console.log('submitting Form: ', password);
    let errors ={}
    let isError = false
    if (email.trim() === ''){
        errors.email = 'Required'
        console.log('email',errors.email)
        isError = true
    }
    if ( !email.trim() === ''){
        if(!isValidEmail(email)){
            let error = 'Invalid email'
            errors.email = error
            isError = true
            console.log(errors.email)
            throw new SubmissionError(error)
        }
    }
    if (password.trim()=== ''){
        errors.password ='Required'
        console.log(errors.password)
        isError = true
    }
    if(isError){
        console.log('all errors',JSON.stringify(errors))
        throw new SubmissionError(errors)
    }else {
        // push data to api
        let data ={}
        data.email = email
        data.password = password
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