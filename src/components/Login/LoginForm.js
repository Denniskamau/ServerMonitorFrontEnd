import React from 'react';
import { Field } from 'redux-form';
import formcomponent from '../formcomponent'
export const LoginForm = ({ handleSubmit, onSubmit }) => {

  const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )


  return (
    <div>
      <h1>login</h1>
      <form
        className="loginForm"
        onSubmit={handleSubmit(onSubmit)}
      >
      <Field name="email" label="Email" component={renderField} type="email" placeholder="Email" />
      <Field name="password" label="Password" component={renderField} type="password" placeholder="Password" />

        <button type="submit" className="loginBtn">
          Submit
        </button>
      </form>
      
    </div>
  );
}

export default LoginForm