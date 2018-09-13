import React from 'react'
import { shallow } from 'enzyme'
import  Signup from '../../src/components/signup'

describe('render signup component', ()=>{
    let wrapper
    beforeEach(()=>{
        wrapper = shallow(<Signup/>)
        // console.log('wrapper',JSON.stringify(wrapper))
    })
    it('should render correctly', ()=>{
        // const wrapper = shallow(<Signup/>)
        expect(wrapper).toMatchSnapshot();
    })
    it('should find signup form', () => {
        expect(wrapper.find('[form]').length).toEqual(1);
    });

})
