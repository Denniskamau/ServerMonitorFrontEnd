import React from 'react'
import { shallow } from 'enzyme'
import  Signup from '../../src/components/signup'

describe('render signup component', ()=>{
    it('should render correctly', ()=>{
        const wrapper = shallow(<Signup/>)
        expect(wrapper).toMatchSnapshot();
    })

})
