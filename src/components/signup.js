import React from 'react'
import { Field, reduxForm } from 'redux-form'


const mySubmit= (values) => {
    alert(values)
}
const SingupForm = (props) => {
    const {handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={ handleSubmit(mySubmit) }>
        <Field name="email" component="input" type="email" placeholder="Email"/>
        <Field name="password" component="input" type="password" placeholder="Password"/>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </form>
    )
}

export default reduxForm({
    form: 'SingupForm'
})(SingupForm)