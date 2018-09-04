import React from 'react'
import { Field, reduxForm } from 'redux-form'

const submit =  (values) => {
    console.log(values)
}

const renderField = ({input ,label, meta:{touched,error}}) => (
    <div className="input-row">
    <label>{label}</label>
      <input {...input} type="text"/>
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
    form: 'SingupForm'
})(SingupForm)