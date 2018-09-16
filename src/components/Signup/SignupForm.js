import React from 'react';
import { Field } from 'redux-form';
import formcomponent from '../formcomponent'
export const SignupForm = ({ handleSubmit, onSubmit }) => {
  return (
    <div>
      <h1>Signup</h1>
      <form
        className="signupForm"
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

export default SignupForm