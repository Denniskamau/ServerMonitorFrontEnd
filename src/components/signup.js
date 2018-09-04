import React from 'react'
import { Field, reduxForm, SubmissionError  } from 'redux-form'

const submit =  ({email='',password=''}) => {
    let errors ={}
    let formData = {}
    let isError = false
    if (email.trim() === ''){
        errors.email = 'Required'
        isError = true
    }
    if (password.trim()=== ''){
        errors.password ='Required'
        isError = true
    }
    if(isError){
        throw new SubmissionError(errors)
    }else {
        // push data to api
        formData.email = email
        formData.password = password
        console.log('Data', JSON.stringify(formData))
    }

}

const renderField = ({type,input ,label, meta:{touched,error}}) => (
    <div className="input-row">
    <label>{label}</label>
      <input {...input} type={type}/>
      {touched && error && 
       <span className="error">{error}</span>}
    </div>
  )

const SingupForm = ({handleSubmit, pristine, reset, submitting }) => {
    return (
        <form onSubmit={ handleSubmit(submit)}>
        <Field name="email" label="Email" component={renderField} type="email" placeholder="Email"/>
        <Field name="password" label="Password" component={renderField} type="password" placeholder="Password"/>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </form>
    )
}

export default reduxForm({
    form: 'SingupForm',
    submit
})(SingupForm)