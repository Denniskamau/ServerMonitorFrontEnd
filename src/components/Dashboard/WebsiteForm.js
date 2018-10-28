import React,{Component} from 'react';
import { Field , reduxForm} from 'redux-form';
import formcomponent from '../formcomponent'

class WebsiteForm  extends Component {
  render (){
    const {handleSubmit,onSubmit}= this.props
    return (
      <div>
        <h1>Add a new website to Monitor</h1>
          <form className="WebsiteForm" 
              onSubmit={handleSubmit(onSubmit)}
          >
            <Field name="name" label="Name" component={formcomponent} type="text" placeholder="name" />
            <Field name="url" label="URL" component={formcomponent} type="test" placeholder="url" />
            <button type="submit" className="addBtn">Add</button>
          </form>
      </div>
     
    )
  }
}
export default WebsiteForm

