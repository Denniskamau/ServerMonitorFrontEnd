import React from 'react'
import { shallow } from 'enzyme'
import  {SignupForm } from '../../src/components/signup'

// describe('render signup component', ()=>{
//     let wrapper
//     beforeEach(()=>{
//         wrapper = shallow(<SignupForm />)
//         // console.log('wrapper',JSON.stringify(wrapper))
//     })
//     it('should render correctly', ()=>{
//         // const wrapper = shallow(<Signup/>)
//         console.log('wrapper', wrapper)
//         expect(wrapper).toMatchSnapshot();
//     })
//     it('should find signup form', () => {
//         expect(wrapper.find('[form]').length).toEqual(1);
//     });


// })

describe('find submit function', ()=>{
    const myForm = new SignupForm
    it('find submit to be defined', ()=>{
        expect(myForm.submit).toBeDefined()
    })
    
    it('should console log value', ()=>{
        expect(myForm.submitest).toBeDefined()
    })
})
