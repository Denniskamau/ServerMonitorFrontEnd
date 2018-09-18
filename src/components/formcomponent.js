import React, { Component } from 'react'

class formcomponent extends Component {
  render() {
    const {type,input ,label, meta:{touched,error, warning}} = this.props
    return (
        <div className="input-row">
        <label className="control-label">{label}</label>
        <div class="error">
             <input {...input} placeholder={label} type={type} className="form-control"/>
             {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
        </div>
        
    )
  }
}

export default formcomponent