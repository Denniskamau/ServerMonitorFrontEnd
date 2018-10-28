import React from 'react';
import { Field } from 'redux-form';
import formcomponent from '../formcomponent'


export const LoginForm = ({ handleSubmit, onSubmit, props }) => {

  return (
    <div>
      <h1>login</h1>
    
      <form
        className="loginForm"
        onSubmit={handleSubmit(onSubmit)}
      >
      <Field name="email" label="Email" component={formcomponent} type="email" placeholder="Email" />
      <Field name="password" label="Password" component={formcomponent} type="password" placeholder="Password" />

        <button type="submit" className="loginBtn">
          Submit
        </button>
      </form>
      
    </div>
  );
}

export default LoginForm