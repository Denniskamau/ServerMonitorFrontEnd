import {
    LOGGING_USER_BEGIN,
    LOGGING_USER_SUCCESS,
    LOGGING_USER_FAILURE,
    POST_USER,
    SIGNUP_USER   
  } from '../actions/types';

const initialState = {
    loading: true,
    error: '',
    userToken: ''

}
  
const userReducer = (state = initialState, action) => {
    switch(action.type){
        case POST_USER:
        console.log('reducers')
            // send user data to backend
            return {
                ...state,
                loading:false,
                userToken: action.payload,
                error: action.payload.error
            }
        case SIGNUP_USER:
            console.log('reducer hit')
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