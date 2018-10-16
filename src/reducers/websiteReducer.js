import {
    ADDWEBSITE_REQUEST,
    ADDWEBSITE_SUCCESS,
    ADDWEBSITE_FAILED,
    ADDWEBSITE_RESET
}from '../actions/types'

const initialState = {}

const WebsiteReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADDWEBSITE_SUCCESS:
        //console.log('success reducer', action.payload)
        state =  action.payload
            return {
                state 
            }
        case ADDWEBSITE_FAILED:
            return {
                state

            }
        case ADDWEBSITE_REQUEST:
            return {
                state
            }
        case ADDWEBSITE_RESET: 
            return{
                state
            }
        default:
            return state
        }
    }

export default WebsiteReducer