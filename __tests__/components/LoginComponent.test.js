import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import LoginForm from '../../src/components/login'

describe('render login', ()=>{
    const wrapper = shallow(<LoginForm/>)
    expect(wrapper).toMatchSnapshot();
})
