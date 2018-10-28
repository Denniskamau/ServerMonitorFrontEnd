import React from 'react'
import { reduxForm, SubmissionError } from 'redux-form'
import isValidEmail from 'sane-email-validation'
import SignupForm from './SignupForm'
import { signUpUser } from '../../actions/userAction';
import store from '../../store';
export  function validation(data){
    let errors ={}
    let isError = false
    if(data.email=== undefined && data.password=== undefined){
        errors.email = 'Required'
        errors.password = 'Required'
        isError = true
    }
    if (data.email === undefined){
        errors.email = 'Required'
        isError = true
      
    }else if (!isValidEmail(data.email)){
        
            let error = 'Invalid email'
            errors.email = error
            isError = true
        
    }
    if (data.password === undefined ){
        errors.password ='Required'
  
        isError = true
    }
    if(isError){    
        return errors
    }else {
        let user ={}
        user.password = data.password
        user.email = data.email
        store.dispatch(signUpUser(user))
        
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
        <SignupForm 
            onSubmit={submitForm}
            handleSubmit={handleSubmit}/>
    )
}

const formConfiguration = {
    form: 'signup',
    validation
}



export default reduxForm(formConfiguration)(FormContainer)