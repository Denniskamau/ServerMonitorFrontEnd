// basic react component starting template
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'

let SignupForm = () =>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Email</label>
            <Field name="email" component="input"></Field>
        </div>
        <div>
            <label>Password</label>
            <Field name="password" component="input"></Field>
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>

SignupForm = reduxForm({
    form: 'signup'
})(SignupForm)
export default SignupForm;