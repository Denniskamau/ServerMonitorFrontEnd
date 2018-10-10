import React from 'react'
import { reduxForm, SubmissionError } from 'redux-form'
import WebsiteList from './WebsiteList'
import WebsiteForm from './WebsiteForm'

export  function validation(data){
    let errors = {}
    let isError = false
    if(data.name === undefined && data.url === undefined){
        errors.name = 'Required'
        errors.url = 'Required'
        isError = true
    }
    if( data.name === undefined){
        errors.name = 'Required'
        isError = true
    }
    if(data.url === undefined){
        errors.url = 'Required'
        isError = true
    }else {
        let newWebsite = {} 
        newWebsite.name = data.name
        newWebsite.url = data.url
        //dispatch action to send data to backend
    }

}

export const DashboardContainer = ({ handleSubmit}) => {
    const submitForm = (formValues) => {
        validation(formValues)
    }

    return (
        <div>
        <WebsiteForm 
            onSubmit={submitForm}
            handleSubmit={handleSubmit}
        />
        <WebsiteList />
        </div>

    )
}

const formConfiguration = {
    form: 'addwebsite',
    validation
}



export default reduxForm(formConfiguration)(DashboardContainer)