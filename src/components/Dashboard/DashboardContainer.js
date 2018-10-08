import React from 'react'
import { reduxForm, SubmissionError } from 'redux-form'
import WebsiteList from './WebsiteList'
import WebsiteForm from './WebsiteForm'

export  function validation(data){

}

export const DashboardContainer = ({ handleSubmit}) => {
    const submitForm = (formValues) => {
        let data ={}
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