import {
    ADDWEBSITE_REQUEST,
    ADDWEBSITE_SUCCESS,
    ADDWEBSITE_FAILED,
    ADDWEBSITE_RESET
}from '../actions/types'

const initialState = {
    name : '',
    url : '',
    status: '',
    error:''
}

const WebsiteReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADDWEBSITE_SUCCESS:
            return {
                ...state,
                name: action.payload.Name,
                url: action.payload.URL,
                status: action.payload.Status,
                
            }
        case ADDWEBSITE_FAILED:
            return {
                ...state,
                error: action.payload.error
            }
        case ADDWEBSITE_REQUEST:
            return {
                ...state
            }
        case ADDWEBSITE_RESET: 
            return{
                ...state
            }
        default:
            return state
        }
    }

export default WebsiteReducer