import React from 'react';
import { Field } from 'redux-form';
import formcomponent from '../formcomponent'
export const WebsiteForm = ({ handleSubmit, onSubmit }) => {
  return (
    <div>
      <h1>Add a new website to Monitor</h1>
      <form
        className="websiteForm"
        onSubmit={handleSubmit(onSubmit)}
      >
      <Field name="name" label="Name" component={formcomponent} type="text" placeholder="name" />
      <Field name="url" label="URL" component={formcomponent} type="test" placeholder="url" />

        <button type="submit" className="loginBtn">
          Add
        </button>
      </form>
    </div>
  );
}

export default WebsiteForm