import {
    POST_USER,
    SIGNUP_USER  ,
    SETUP_SESSION 
  } from '../actions/types';

  

const initialState = {
    loading: true,
    error: '',
    userToken: '',
    userEmail:''

}
  
const userReducer = (state = initialState, action) => {
    switch(action.type){
        case POST_USER:
            // send user data to backend
            return {
                ...state,
                loading:false,
                userToken: action.payload.session,
                error: action.payload.error,
                userEmail:action.payload.userEmail
            }
        case SETUP_SESSION:
              if(state.userToken.session !== ''){
                sessionStorage.setItem('token', state.userToken)
                //history.push('/home')
            }
            return{
                ...state,
                loading:false,
                userToken: action.payload,
                error: action.payload.error,
                userEmail:action.payload.userEmail  
            }
        case SIGNUP_USER:
            return {
                ...state,
                loading: false,
                userToken: action.payload,
                error: action.payload.error,
                userEmail:action.payload.userEmail 
            }
        
        default:
            return state
    }   
}

export default userReducer