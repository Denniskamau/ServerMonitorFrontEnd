import React from 'react'
import {validation} from '../../src/components/Login/LoginContainer'


describe('Test validation function', ()=>{
    it('should check that all fields are rquired', ()=>{
        const data = {
            email: undefined,
            password: undefined
        }
        expect(validation(data)).toEqual({email:'Required', password:'Required'})
        
    })
    it('should check email as a required field', ()=>{
        const data = {
            email: undefined,
            password: 'password'
        }
        
        expect(validation(data)).toEqual({ email:'Required'})
    })

    it('should check that password is a required field', ()=>{
        const data = {
            email: 'test@test.com',
            password: undefined
        }
        expect(validation(data)).toEqual({password:'Required'})
    })
    
 
})
