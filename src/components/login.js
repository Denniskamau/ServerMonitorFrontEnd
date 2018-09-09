import React, { Component} from 'react'
import { Field, reduxForm, SubmissionError  } from 'redux-form'
import isValidEmail from 'sane-email-validation'
import { connect} from 'react-redux'
import { getUser } from '../actions/userAction'
import store from '../store';


class LoginForm extends Component {
    // handleSubmit = (user) => {

    // }
    constructor(props){
        super(props)
        this.state ={
            loading: true,
            error: '',
            userToken: '' 
        }

        this.getStoreState = this.getStoreState.bind(this)
    }

    

    submitToServer = (data)=> {
    console.log('data', data)
    this.props.dispatch(getUser(data))
    console.log('state is', store.getState())
  }

  componentDidUpdate(prevState) {
    this.getStoreState()
  }

    getStoreState = () => {
        // Typical usage (don't forget to compare props):
        console.log('state now is', store.getState())
        // if (this.props.userID !== prevProps.userID) {
        //   this.fetchData(this.props.userID);
        // }
        const state = store.getState()
        
        if (state.user.error){
            const error = state.user.error
            this.state.error= error
    
            console.log('error',this.state.error)
           // throw new SubmissionError(this.state.error)
        }
        // this.setState({
        //     loading: state.user.loading,
        //     error: state.user.error,
        //     userToken: state.user.userToken 
        // })
        console.log('state is', this.state)
        return this.state
    }
   
     submit =  ({email='',password='',dispatch}) => {
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
            return this.submitToServer(data)
    }

}


    renderField = ({type,input ,label, meta:{touched,error}}) => {(
        <div className="input-row">
        <label>{label}</label>
        <input {...input} type={type}/>
        {touched && error && 
        <span className="error">{error}</span>}
        </div>
    )
    }

    render() {
        const {handleSubmit, pristine, submitting } = this.props
        const testState = this.getStoreState()
       // console.log('loading valu', loading)
        return (
            <form onSubmit={ handleSubmit(this.submit)}>
            <h1>Login</h1>
            <div>
                <label>Email</label>
                <Field name="email" label="Email" component="input" type="email" placeholder="Email"/>
            </div>
            <div>
                <label>Password</label>
                <Field name="password" label="Password" component="input" type="password" placeholder="Password"/>
            </div>
            
            <button  type="submit" variant="raised" color="primary" disabled={pristine || submitting}>Submit</button>
            <p>{testState.error}</p>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.user.loading,
    error: state.user.error
})


LoginForm = reduxForm({
    form: 'LoginForm'
})(LoginForm)

LoginForm =  connect(mapStateToProps,getUser)(LoginForm)



export default LoginForm
