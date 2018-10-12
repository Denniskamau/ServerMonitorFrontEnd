import {
    ADDWEBSITE_REQUEST,
    ADDWEBSITE_SUCCESS,
    ADDWEBSITE_FAILED,
    ADDWEBSITE_RESET
}from './types'

const Api = 'http://localhost:8080/website'
const token = sessionStorage.getItem('token')
export const saveWebsite = (data)=> dispatch => {
    //call addwebsite_request to show the loader
    dispatch({
        type:ADDWEBSITE_REQUEST
    })
    fetch(
        Api + '/add',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer '+ token + '/'

            },
            body: JSON.stringify(data)
        }
    ).then (res => {
        //if success call addwebsite success
        //if failed call add website failed
        console.log('response is ', res)
        if(res.status == 200){

            dispatch({
                type:ADDWEBSITE_SUCCESS,
                payload: res.body
            })
        }else if(res.status != 200){
            dispatch({
                type:ADDWEBSITE_FAILED,
                payload: res.body
            })
        }else {
            dispatch({
                type:ADDWEBSITE_RESET
            })
        }
        
    })
}


export const showSavedWebsite = () => dispatch => {
    fetch(
        Api + '/list', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer '+ sessionStorage.getItem('token')  
            }

        }
    ).then (res =>{
        //if success call addwebsite success
        //if failed call add website failed
        if(res.status == 200){
            dispatch({
                type:ADDWEBSITE_SUCCESS,
                payload: res.body
            })
        }else if(res.status != 200){
            dispatch({
                type:ADDWEBSITE_FAILED,
                payload: res.body
            })
        }else {
            dispatch({
                type:ADDWEBSITE_RESET
            })
        }
    })
}