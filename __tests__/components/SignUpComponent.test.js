import React from 'react'
import {validation} from '../../src/components/Login/LoginContainer'
import {SubmissionError } from 'redux-form'

describe('find submit function', ()=>{
    const form = validation
    // console.log('submit is', form)
    it('should find submit function defined', ()=>{
        // expect(submit()).toBeDefined()
        const data = {
            email: undefined,
            password: 'password'
        }
        
        expect(validation(data)).toEqual({ email:'Required'})
    })
 
})
