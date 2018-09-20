
import {
  POST_USER,
  SIGNUP_USER   
} from './types';
 import {history} from '../store'
export const  getUser = (data) => dispatch => {
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
          }),
          localStorage.setItem('token', user.session)
          history.push('/home')
        })
      
}

export const signUpUser = (data) => dispatch => {
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
