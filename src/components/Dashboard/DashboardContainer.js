// import React from 'react'
// import { reduxForm, SubmissionError } from 'redux-form'
// import WebsiteList from './WebsiteList'
// import WebsiteForm from './WebsiteForm'
// import store from '../../store'
// import {saveWebsite} from '../../actions/websiteAction'
// import {showSavedWebsite} from '../../actions/websiteAction'
// export  function pushDataToBackend(data){
//     let errors = {}
//     let isError = false
//     if(data.name === undefined && data.url === undefined){
//         errors.name = 'Required'
//         errors.url = 'Required'
//         isError = true
//     }
//     if( data.name === undefined){
//         errors.name = 'Required'
//         isError = true
//     }
//     if(data.url === undefined){
//         errors.url = 'Required'
//         isError = true
//     }else {
//         let newWebsite = {} 
//         newWebsite.name = data.name
//         newWebsite.url = data.url
//         //dispatch action to send data to backend
//         store.dispatch(saveWebsite(newWebsite))
//     }

// }

// export function loadDataFromBackend(){
//     store.dispatch(showSavedWebsite())
// }

// function getUserData(){
//     var user = store.getState()
//     var email = user.user.userEmail
//     console.log('user email', email) 
//     return email
// }
// export const DashboardContainer = ({ handleSubmit}) => {
//     const submitForm = (formValues) => {
//         pushDataToBackend(formValues)
//     }

//     return (
//         <div>
//             <p>welcome {getUserData()}</p>
//         <WebsiteForm 
//             onSubmit={submitForm}
//             handleSubmit={handleSubmit}
//         />
//         <WebsiteList />
//         </div>

//     )
// }

// const formConfiguration = {
//     form: 'addwebsite',
//     pushDataToBackend
// }



// export default reduxForm(formConfiguration)(DashboardContainer)


import React, {Component} from 'react'
import WebsiteList from './WebsiteList'
import WebsiteForm from './WebsiteForm'
import PropTypes from 'prop-types'
import * as website from '../../actions/websiteAction'
import { connect } from 'react-redux'
import propTypes from 'redux-form/lib/propTypes';
import { bindActionCreators } from 'redux'


class DashboardContainer extends Component {
    componentDidMount () {
        this.props.showSavedWebsite()
      }



    pushDataToBackend(data){
    let errors = {}
    let isError = false
    console.log('data', data)
    this.props.saveWebsite(data)
    // if(data.name === undefined && data.url === undefined){
    //     errors.name = 'Required'
    //     errors.url = 'Required'
    //     isError = true
    // }
    // if( data.name === undefined){
    //     errors.name = 'Required'
    //     isError = true
    // }
    // if(data.url === undefined){
    //     errors.url = 'Required'
    //     isError = true
    // if(isError){
    //     return errors
    // }
    // }else {
    //     let newWebsite = {} 
    //     newWebsite.name = data.name
    //     newWebsite.url = data.url
    //     //dispatch action to send data to backend
    //     this.props.saveWebsite(newWebsite)
    // }

}
      render(){
          const { website } = this.props
          const { handleSubmit } = this.props
          const submitForm = (formValues) => {
            this.pushDataToBackend(formValues)
        }
          return (
              <div>
                <WebsiteForm 
                onSubmit={submitForm}
                handleSubmit={handleSubmit}
                />
                <WebsiteList site={website}/>

               

              </div>

          )
      }
}

DashboardContainer.propTypes = {
    showSavedWebsite: PropTypes.func.isRequired,
}
const mapDispatchToProps = (dispatch) => (
    bindActionCreators(website, dispatch)
  )

  const mapStateToProps = state => {
    return {
      website:state.website
    }
  }


  export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
