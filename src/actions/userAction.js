
import {
  POST_USER,
  SIGNUP_USER,   
  SETUP_SESSION
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
          console.log('user in action',user)
          if(user.session){
            dispatch({
              type:POST_USER,
              payload: user
            }),
            dispatch({
              type:SETUP_SESSION,
              payload: user
            })
            history.push('/home')
          }
          else {
            dispatch({
              type:POST_USER,
              payload: user
            })
          }
 
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
