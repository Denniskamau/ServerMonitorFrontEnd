import {
    LOGGING_USER_BEGIN,
    LOGGING_USER_SUCCESS,
    LOGGING_USER_FAILURE
  } from '../actions/user';

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
    }
}

export default userReducer