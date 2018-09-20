import {
    POST_USER,
    SIGNUP_USER  ,
    SETUP_SESSION 
  } from '../actions/types';

  

const initialState = {
    loading: true,
    error: '',
    userToken: ''

}
  
const userReducer = (state = initialState, action) => {
    switch(action.type){
        case POST_USER:
            // send user data to backend
            return {
                ...state,
                loading:false,
                userToken: action.payload,
                error: action.payload.error
            }
        case SETUP_SESSION:
              if(state.userToken.session != ''){
                sessionStorage.setItem('token', state.userToken.session)
                //history.push('/home')
            }
            return{
                ...state,
                loading:false,
                userToken: action.payload,
                error: action.payload.error  
            }
        case SIGNUP_USER:
            return {
                ...state,
                loading: false,
                userToken: action.payload,
                error: action.payload.error
            }
        
        default:
            return state
    }   
}

export default userReducer