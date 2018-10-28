import {
    ADDWEBSITE_REQUEST,
    ADDWEBSITE_SUCCESS,
    ADDWEBSITE_FAILED,
    ADDWEBSITE_RESET
}from './types'

const Api = 'http://localhost:8080/website'

export const saveWebsite = (data)=> dispatch => {
    //call addwebsite_request to show the loader
    console.log('data is', data)
    dispatch({
        type:ADDWEBSITE_REQUEST
    })
    fetch(
        Api + '/add',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer '+ sessionStorage.getItem('token') + '/'

            },
            body: JSON.stringify(data)
        }
    ).then (res => res.json())
    .then (site => {
                //if success call addwebsite success
        //if failed call add website failed
        
        if(site.newsite){
            
            dispatch({
                type:ADDWEBSITE_SUCCESS,
                payload: site.newsite
            })
        }else if(site.error){
            
            dispatch({
                type:ADDWEBSITE_FAILED,
                payload: site.error
            })
        }else {
           
            dispatch({
                type:ADDWEBSITE_RESET
            })
        }
    })
}


export const showSavedWebsite = () => dispatch => {
    //call addwebsite_request to show the loader
    
    dispatch({
      type:ADDWEBSITE_REQUEST
    })
    fetch(
        Api + '/list', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer '+ sessionStorage.getItem('token')  
            }
        }
    ).then (res => res.json())
    .then (site => {
        //if success call addwebsite success
        //if failed call add website failed
        console.log('geting ites', site)
       // const data = JSON.stringify(site)
        if(site.length >= 0){
            
            
            //console.log('success', data)
            dispatch({
                type:ADDWEBSITE_SUCCESS,
                payload:site
            })
        }else if(site.length <0){
            console.log('reset')
            dispatch({
                type:ADDWEBSITE_RESET,
                payload:site
            })
        }else {
            console.log('failed')
            dispatch({
                type:ADDWEBSITE_FAILED
            })
        }
    })
}