import React, {Component} from 'react'
import WebsiteList from './WebsiteList'
import WebsiteForm from './WebsiteForm'
import PropTypes from 'prop-types'
import * as website from '../../actions/websiteAction'
import { connect } from 'react-redux'
import propTypes from 'redux-form/lib/propTypes';
import { bindActionCreators } from 'redux'

import { reduxForm } from 'redux-form';
class DashboardContainer extends Component {
    constructor(props,context) {
        super(props, context)
        this.pushDataToBackend=this.pushDataToBackend.bind(this)
    }

    componentDidMount () {
        this.props.showSavedWebsite()
      }


    pushDataToBackend(data){

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
    if(isError){
        
        return errors
    }
    }else {
        let newWebsite = {} 
        newWebsite.name = data.name
        newWebsite.url = data.url
        //dispatch action to send data to backend
        this.props.saveWebsite()
        
    }

}
      render(){
          const { website } = this.props
          const { handleSubmit } = this.props
          return (
              <div>
                <WebsiteForm 
                  onSubmit={this.pushDataToBackend}
                  handleSubmit={handleSubmit}/>
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


DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer)

  export default reduxForm({
    form:'websiteForm'
  })(DashboardContainer)