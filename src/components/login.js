import React from 'react'
import { Field, reduxForm, SubmissionError  } from 'redux-form'
import isValidEmail from 'sane-email-validation'
import { connect} from 'react-redux'
import { getUser } from '../actions/userAction'

function submitToServer(data) {
    console.log('data', data)
    getUser(data)
    
  }
let submit =  ({email='',password='',dispatch}) => {
    let errors ={}
    let isError = false
    if (email.trim() === ''){
        errors.email = 'Required'
        isError = true
    }
    if(!isValidEmail(email)){
        let error = 'Invalid email'
        errors.email = error
        console.log(JSON.stringify(errors))
        isError = true
        throw new SubmissionError(error)
    }
    if (password.trim()=== ''){
        errors.password ='Required'
        isError = true
    }
    if(isError){
        throw new SubmissionError(errors)
    }else {
        // push data to api
        let data ={}
        data.email = email
        data.password = password
        console.log(JSON.stringify(data))
        console.log('sending data')
        return submitToServer(data)
       // submitToServer({email,password})
        // .then( data => {
        //     if(data.error){
        //         throw new SubmissionError(data.error)
        //     }else {
        //         console.log('data',data)
        //     }
        // })
    }

}

const renderField = ({type,input ,label, meta:{touched,error}}) => (
    <div className="input-row">
    <label>{label}</label>
      <input {...input} type={type}/>
      {touched && error && 
       <span className="error">{error}</span>}
    </div>
  )

let LoginForm = ({handleSubmit, pristine, reset, submitting }) => {
    return (
        <form onSubmit={ handleSubmit(submit)}>
        <Field name="email" label="Email" component={renderField} type="email" placeholder="Email"/>
        <Field name="password" label="Password" component={renderField} type="password" placeholder="Password"/>
        <button  type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </form>
    )

}

//function to convert the global state obtained from redux to local props



LoginForm = reduxForm({
    form: 'LoginForm',
    submit
})(LoginForm)

export default connect(null, { getUser })(LoginForm)
