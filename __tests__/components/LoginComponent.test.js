import React from 'react'
import { shallow } from 'enzyme'
import LoginForm from '../../src/components/login'

describe('render login', ()=>{
    it('should render correctly', ()=>{
        const wrapper = shallow(<LoginForm/>)
        expect(wrapper).toMatchSnapshot();
    })

})
