import {
    ADDWEBSITE_REQUEST,
    ADDWEBSITE_SUCCESS,
    ADDWEBSITE_FAILED,
    ADDWEBSITE_RESET
}from '../actions/types'

const initialState = {
    loading:false,
    error:'',
    sites:[]
}

const WebsiteReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADDWEBSITE_SUCCESS:

            return {
                ...state,
                loading:false,
                sites:action.payload
            }
            
        case ADDWEBSITE_FAILED:
            return {
                ...state,
                loading:false

            }
        case ADDWEBSITE_REQUEST:
            return {
                ...state,
                loading:true,
            }
        case ADDWEBSITE_RESET: 
            return{
                ... state,
                loading: false
            }
        default:
            return state
        }
    }

export default WebsiteReducer