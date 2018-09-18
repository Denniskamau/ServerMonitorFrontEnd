import React from 'react'
import {validation} from '../../src/components/Login/LoginContainer'


describe('find submit function', ()=>{
    it('should find submit function defined', ()=>{
        // expect(submit()).toBeDefined()
        const data = {
            email: undefined,
            password: 'password'
        }
        
        expect(validation(data)).toEqual({ email:'Required'})
    })
 
})
