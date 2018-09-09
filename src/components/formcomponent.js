import React, { Component } from 'react'

class formcomponent extends Component {
  render() {
    const {type,input ,label, meta:{touched,error}} = this.props
    return (
        <div className="input-row">
        <label>{label}</label>
        <div>
             <input {...input} type={type}/>
            {touched && (error && <span></span>)}
        </div>
        </div>
        
    )
  }
}

export default formcomponent