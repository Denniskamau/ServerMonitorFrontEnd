import {
    LOGGING_USER_BEGIN,
    LOGGING_USER_SUCCESS,
    LOGGING_USER_FAILURE
  } from '../actions/userAction';

const initialState = {
    loading: false,
    error: null,
    userToken: ''

}
  
const userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGGING_USER_BEGIN:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: true,
                error: null

            }
        case LOGGING_USER_SUCCESS:
            // set loading false
            return {
                ...state,
                loading:false,
                userToken: action.payload.user
            }
        case LOGGING_USER_FAILURE:
            // set loading false
            return {
                ...state,
                loading:false,
                error: action.payload.error,
                userToken:''
            }
        default:
            return state
    }   
}

export default userReducer