import React from 'react'
import { shallow } from 'enzyme'
import  { SignupForm } from '../../src/components/signup'

// describe('render signup component', ()=>{
//     let wrapper
//     beforeEach(()=>{
//         wrapper = shallow(<SignupForm />)
//         // console.log('wrapper',JSON.stringify(wrapper))
//     })
//     // it('should render correctly', ()=>{
//     //     // const wrapper = shallow(<Signup/>)
//     //     console.log('wrapper', wrapper)
//     //     expect(wrapper).toMatchSnapshot();
//     // })
//     it('should find signup ethodm', () => {
        
//     });


// })

describe('find submit function', ()=>{
    const form = new SignupForm()
    
    it('should find submit function defined', ()=>{
        expect(form.submit).toBeDefined()
    })
 
})
