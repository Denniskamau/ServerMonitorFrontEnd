import React from 'react'
import { shallow, mount } from 'enzyme'
import LoginForm from '../../src/components/login'

describe('render login', ()=>{
    let wrapper
    beforeEach(()=>{
        wrapper = shallow(<LoginForm/>)
    })
    it('should render correctly', ()=>{
        expect(wrapper).toMatchSnapshot();
    })
    it('should find login form', () => {
        expect(wrapper.find('[form]').length).toEqual(1);
    });
    it('should find submit button', ()=>{
        expect(wrapper.find(''))
    })
    // it('email must be provided', ()=>{
    //     const values = {
    //         email:'',
    //         password:'password'
    //     }
    //     const result = wrapper.instance().submit(values.email,values.password)
    //     console.log('result is', result)
    //     expect(result).toEqual('Required')
    // })
    // it('password must be provided', ()=>{
    //     const values = {
    //         email:'test@test.com',
    //         password:''
    //     }
    //     const result = wrapper.instance().submit(values.email,values.password)
    //     console.log('result is', result)
    //     expect(result).toEqual('Required')
    // })
    it('error to be undefined if all values are provided', ()=>{
        const values = {
            email:'test@test.com',
            password:'password'
        }
        const result = wrapper.instance().submit(values.email,values.password)
        console.log('result is', result)
        expect(result).toEqual(undefined)
    })
})


