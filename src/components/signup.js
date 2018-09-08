import React ,{ Component}from 'react'
import { Field, reduxForm, SubmissionError  } from 'redux-form'
import isValidEmail from 'sane-email-validation'


class SignupForm extends Component {

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
        return (
            <div><h1>singup</h1> 
            <form>
                <div>
                    <label>Email</label>
                    <div>
                    <Field name="email" label="Email" component="input" type="text" placeholder="Email" />
                    </div>
                </div>
                <div>
                    <label>Password</label>
                    <div>
                    <Field name="firstName" label="Password" component="input" type="password" placeholder="Password" />
                    </div>
                </div>
                <div>
                    <button type="submit" disabled={pristine || submitting}>Submit</button>
                </div>
            {/* <input name="email" label="Email" component={this.renderField} type="email" placeholder="Email"/>  */}
            </form>
            </div>


        )
    }
}


export default reduxForm({
    form: 'SignupForm'
})(SignupForm)