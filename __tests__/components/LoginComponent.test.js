import React from 'react'
import { shallow, mount, render } from 'enzyme'
import LoginForm from '../../src/components/Login/LoginContainer'

describe('render login', ()=>{
    let wrapper
    beforeEach(()=>{
        wrapper = shallow(<LoginForm/>)
        // console.log('wrapper',JSON.stringify(wrapper))
    })
    it('should render correctly', ()=>{
  
        expect(wrapper).toMatchSnapshot();
    })
    // it('should find login form', () => {
    //     expect(wrapper.find('form').length).toEqual(1);
    // });

    // it('email must be provided', ()=>{
    //     const values = {
    //         email:'',
    //         password:'password'
    //     }
    //     const result = wrapper.instance().submit(values.email,values.password)
    //     console.log('result is',JSON.stringify(result))
    //     expect(result).toEqual('Required')
    // })
    // it('password must be provided', ()=>{
    //     const values = {
    //         email:'test@test.com',
    //         password:''
    //     }
    //     const result = wrapper.instance().submit(values.email,values.password)
    //     console.log('result is', result.errors)
    //     expect(result).toEqual('Required')
    // })
    // it('error to be undefined if all values are provided', ()=>{
    //     const values = {
    //         email:'test@test.com',
    //         password:'password'
    //     }
    //     const result = wrapper.instance().submit()
    //     console.log('result is', result)
    //     expect(result).toEqual('Hello')
    // })
})

// describe('handle submit', ()=>{
//     it('should call submit function', () => {
//         const component = shallow(<LoginForm/>)
//         const submit = jest.fn()
//         submit()
//         component.find('[form]').simulate('click')
//         expect(submit).toHaveBeenCalled()
//     });
//     it('should get instance of submit', ()=>{
//         const component = shallow(<LoginForm/>)
//         component.submit = jest.fn()
//         const submit = jest.fn((val)=> {
//             return val
//         })
//         const result = submit('Hello') 
//         expect(component.submit).toEqual('Hello')
       
//     })
// })
