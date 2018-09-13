import React from 'react';
import { storiesOf } from '@storybook/react';
import Signup from '../components/signup'


const stories = storiesOf('Signup', module)

stories.add('Signup page selected', ()=> {
  return <Signup />
})
