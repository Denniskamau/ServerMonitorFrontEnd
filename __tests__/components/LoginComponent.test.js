import React from 'react'
import { shallow } from 'enzyme'
import LoginForm from '../../src/components/login'

describe('render login', ()=>{
    let wrapper
    beforeEach(()=>{
        wrapper = shallow(<LoginForm/>)
    })
    it('should render correctly', ()=>{
        expect(wrapper).toMatchSnapshot();
    })


})


