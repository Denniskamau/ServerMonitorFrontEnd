// basic react component starting template
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'


const validate = values => {
    const errors = {}

    if(!values.email) {
        errors.email = 'Required'
    }
    if(!values.password) {
        errors.password = 'Required'
    }
    return errors
}

const renderInput = ({ input , meta, label}) => {
    <div>
    <label>{ label}</label>
    <input {...input}/>
    {meta.error && meta.touched &&<span>{meta.error}</span>}
</div>
     
}
let SignupForm = ({ handleSubmit, submitting}) =>
    <form >
        
        <Field name="email" label="Email" component={renderInput}></Field>
        
        
        <Field name="password" label="Password" component={renderInput}></Field>
        
        <button type="submit" disabled={submitting}>Submit</button>

    </form>

SignupForm = reduxForm({
    form: 'signup',
    destroyOnUnmount:false,
    validate
})(SignupForm)
export default SignupForm;