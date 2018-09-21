import React from 'react';
import { storiesOf } from '@storybook/react';
import store from '../store'
import SignupForm from '../components/Signup/SignupForm'


const stories = storiesOf('Signup', module)

stories.add('Signup page selected', ()=> {
  return <SignupForm />
})
