
import {
  LOGGING_USER_BEGIN,
  LOGGING_USER_SUCCESS,
  LOGGING_USER_FAILURE,
  POST_USER,
  SIGNUP_USER   
} from './types';

export const  getUser = (data) => dispatch => {
      console.log('reached action')
      fetch(
          'http://localhost:8080/user/login', { 
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        )
        .then(res => res.json())
        .then( user =>{
          dispatch({
            type:POST_USER,
            payload: user
          })
        })
      
}

export const signUpUser = (data) => dispatch => {
  console.log('signup action')
  fetch(
    'http://localhost:8080/user/signup', { 
      method: 'POST',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
  }
  )
  .then(res => res.json())
  .then( user => {
    dispatch({
      type: SIGNUP_USER,
      payload: user
    })
  })
}
